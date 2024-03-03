# ***Bio-Watch*, Javascript Game connected to a ML Model and a React App.**

![Bio-Watch logo](https://github.com/Kronium345/Neural-Navigators-Project/assets/123801537/1be5c853-dc54-47ba-a95a-71747548dedd)

## **Table of Contents**
- [Description](#description)
- [Screenshots](#screenshots)
- [Project Status](#project-status)
- [Technologies Used](#technologies-used)
- [Installation](#installation)

## Description

A JavaScript game connected to a Threat Identifier, to help identify environmental threats affecting different animals and helping us implement solutions to save them.

A React App to promote the project created by the Team Neural Navigators for the GenAI Hackathon , discussing the contribution of every team member and our development process.

### Screenshots

![IMG_9257](https://github.com/Kronium345/Neural-Navigators-Project/assets/123801537/f17ca510-3326-414b-afee-cedf8785210e)


![IMG_9259](https://github.com/Kronium345/Neural-Navigators-Project/assets/123801537/1aada1d4-f222-499c-894a-682b0e5ce759)


![PHOTO-2024-03-03-11-23-14](https://github.com/Kronium345/Neural-Navigators-Project/assets/123801537/2d2898be-7a1b-4b8f-8bc1-c8dffe8b2a94)


#### Project status

This project is complete.
We will be including newer versions with bug fixes , enhanced UI features through increased user-testing , security features , improved model with better data accuracy.
We will also be updating the react app regarding the newer versions and other updates in the future.


##### Technologies used

React (18.2) web app incorporating bootstrap , framer motion , browserrouter , react-icons , textline , parallax , elements for styling.
Javascript Game (8th Edition) connected with Flask to a Threat Identifier , created using Jupyter Notebooks in Python.

###### Installation
To run a react app on your computer, you must have Node.js and a suitable library package manager, such as npm or yarn, installed on your computer. 

- To install node.js get started here https://nodejs.org/en and be sure to select the lts (long term support) version. Follow the installer's instructions for your device.
- Update npm, if required, by running the following command from your command line: npm install npm –global 

 To run the app on your local machine:

 - On github under the code tab, copy the repo url (https)
 https://github.com/carolinenorris1/cfg_project.git
 - Create a new folder for the project on your computer.
 - In your command line cd into the new directory.
 - git clone //url of repo//
 - cd into the wellbeing-app folder.
 - npm install
 - npm start

The website will open in a new tab on your web browser.
In command line, ctrl + c will stop the local server when you're finished!

### JavaScript Game (Live Server):

Setting up a live server in Visual Studio Code (VS Code) is a straightforward process, thanks to extensions available in the Visual Studio Code Marketplace. One popular extension for this purpose is "Live Server." Here's a step-by-step guide on how to set up a live server in VS Code using this extension:

1. **Install Visual Studio Code:**
   - If you haven't already, download and install Visual Studio Code from the official website: [Visual Studio Code](https://code.visualstudio.com/).

2. **Open VS Code:**
   - Launch Visual Studio Code on your computer.

3. **Open or Create a Project:**
   - Open an existing project or create a new one in VS Code.

4. **Install the "Live Server" Extension:**
   - Open the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of the window or by using the keyboard shortcut `Ctrl+Shift+X`.
   - Search for "Live Server" in the Extensions Marketplace.
   - Install the extension provided by Ritwick Dey.

5. **Reload VS Code:**
   - After installing the extension, you might be prompted to reload VS Code to activate the extension. If not, you can manually reload by clicking on the reload button that appears next to the extension in the Extensions view.

6. **Open Your HTML File:**
   - Open the HTML file that you want to serve with Live Server in the editor.

7. **Start Live Server:**
   - Right-click anywhere in the HTML file editor.
   - Select the "Open with Live Server" option from the context menu.
   - Alternatively, you can use the keyboard shortcut `Alt+L, Alt+O` to open the file with Live Server.

8. **Access Your Live Server:**
   - After starting the Live Server, a new browser window/tab should open automatically, displaying your HTML file.
   - If the browser window doesn't open automatically, you can find the URL in the VS Code status bar at the bottom. Click on the link to open it in your default browser.

9. **Updates and Automatic Reloading:**
   - As you make changes to your HTML, CSS, or JavaScript files and save them, Live Server will automatically reload the page in the browser to reflect the changes.

That's it! You now have a live server set up for your project in Visual Studio Code using the "Live Server" extension. This allows you to easily preview and test your web applications in a live environment while making development more efficient.


### Threat Identifier :

To install Flask and Jupyter Notebook, you can use the Python package manager, `pip`. Make sure you have Python installed on your system before proceeding. Here's how you can install Flask and Jupyter Notebook:

Installing Flask:

1. Open a terminal or command prompt on your system.

2. To install Flask, run the following command:

    ```bash
    pip install Flask
    ```

   This command will download and install Flask along with its dependencies.

3. After the installation is complete, you can verify that Flask is installed by checking its version:

    ```bash
    flask --version
    ```

   This should display the Flask version number, confirming a successful installation.

### Installing Jupyter Notebook:

1. Open a terminal or command prompt on your system.

2. To install Jupyter Notebook, run the following command:

    ```bash
    pip install notebook
    ```

   This command will download and install Jupyter Notebook along with its dependencies.

3. After the installation is complete, you can launch Jupyter Notebook by running:

    ```bash
    jupyter notebook
    ```

   This command will start the Jupyter Notebook server, and a new tab will open in your default web browser with the Jupyter Notebook interface.

Please note that it's recommended to use virtual environments when working with Python projects to avoid conflicts between different projects and their dependencies. Here's a brief overview of how you can create and activate a virtual environment:

### Virtual Environment (Optional but recommended):

1. Install `virtualenv` using:

    ```bash
    pip install virtualenv
    ```

2. Create a virtual environment (replace "venv" with your preferred virtual environment name):

    ```bash
    python -m venv venv
    ```

3. Activate the virtual environment:

   - On Windows:

        ```bash
        .\venv\Scripts\activate
        ```

   - On macOS/Linux:

        ```bash
        source venv/bin/activate
        ```

   After activating the virtual environment, you can proceed to install Flask and Jupyter Notebook within the virtual environment.

This ensures that the dependencies for your Flask and Jupyter projects are isolated from the global Python environment.



