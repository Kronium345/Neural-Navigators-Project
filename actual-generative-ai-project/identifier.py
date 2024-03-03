import pandas as pd
import numpy as np
import plotly.express as px
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
import pickle  # Importing pickle module
from sklearn.preprocessing import OneHotEncoder

def preprocess_test_data(xtest, xtrain_encoded):
    # Convert xtest into a DataFrame
    xtest_df = pd.DataFrame(xtest, columns=xtrain_encoded.columns)

    # Convert categorical variables into dummy/indicator variables (one-hot encoding)
    encoder = OneHotEncoder(categories='auto', sparse=False)
    encoder.fit(xtrain_encoded)
    xtest_encoded = encoder.transform(xtest_df)

    # Ensure that the columns in xtest_encoded match the columns in xtrain_encoded
    missing_cols = set(xtrain_encoded.columns) - set(xtest_encoded.columns)
    for col in missing_cols:
        xtest_encoded[col] = 0

    # Reorder the columns to match the order in xtrain_encoded
    xtest_encoded = xtest_encoded[xtrain_encoded.columns]

    return xtest_encoded

data = pd.read_csv("animaldataset.csv")
data.head()

# Checking for missing values
print(data.isnull().sum())

# Exploring the distribution of species
print(data["Animal"].value_counts())

# Visualizing the distribution of species
species_counts = data["Animal"].value_counts()
species_names = species_counts.index
species_quantity = species_counts.values

figure = px.pie(data, values=species_quantity, names=species_names, hole=0.5, title="Distribution of Species")
figure.show()

# Checking correlation (if applicable)
numeric_data = data.select_dtypes(include=['float64', 'int64'])
correlation = numeric_data.corr()
print(correlation)

# Creating a new target variable based on Habitat and Predator columns
data['Environmental_Threat'] = 'None'  # Initialize with 'None'
data.loc[(data['Habitat'].str.contains('Savanna') & data['Predators'].str.contains('Lion')), 'Environmental_Threat'] = 'Predation by Lions in Savanna'
data.loc[(data['Habitat'].str.contains('Forest') & data['Predators'].str.contains('Tiger')), 'Environmental_Threat'] = 'Predation by Tigers in Forest'
# Add more specific threats based on habitat and predator combinations

# Splitting the data for training
x = np.array(data.drop(columns=["Animal", "Habitat", "Predators", "Environmental_Threat"]))  
y = np.array(data[["Environmental_Threat"]])

xtrain, xtest, ytrain, ytest = train_test_split(x, y, test_size=0.20, random_state=42)

# Assuming xtrain is a NumPy array with multiple columns representing features
# If not, adjust the code to ensure that xtrain contains the required features
xtrain = pd.DataFrame(xtrain[:, :4], columns=["type", "amount", "oldbalanceOrg", "newbalanceOrig"])

# Convert categorical variables into dummy/indicator variables (one-hot encoding)
xtrain_encoded = pd.get_dummies(xtrain)

# Train the decision tree classifier using the encoded data
model = DecisionTreeClassifier()
model.fit(xtrain_encoded, ytrain)

# Save the trained model using pickle
with open('model.pkl', 'wb') as f:
    pickle.dump(model, f)

# Assuming xtest_encoded contains only the four features
# Retrain the decision tree classifier using only the four features
model = DecisionTreeClassifier()
model.fit(xtrain_encoded, ytrain)

# Ensure xtest has the same columns as xtrain_encoded
xtest_encoded = preprocess_test_data(xtest, xtrain_encoded)

# Make predictions using xtest_encoded
prediction = model.predict(xtest_encoded)
print("Predicted Environmental Threat:", prediction)
