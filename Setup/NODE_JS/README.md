# Node.js (Express Backend) Introduction
Node.js will be the express backend is basically first letter of MERN Stack development project.

# Node.js Setup (ATLAS CLOUD DATABASE)

1.	Download and install the Node.js


![Download and Install Nodejs](https://raw.githubusercontent.com/jitendrasoni/MERNStack/main/Setup/NODE_JS/images/001%20Download%20Nodejs.png)

Setup to automatically download and install other tools like 

![Install Chcho](https://raw.githubusercontent.com/jitendrasoni/MERNStack/main/Setup/NODE_JS/images/002%20Selectin%20Automatically%20install%20required%20tools%20it%20will%20download%20chocolatey.png)

Check the version 
I got v18.15.0

2.	Create a backend folder to start the setup

Create a new Backend folder, mkdir Backend and go to the Backend folder and setup the package.json file

The easiest way is to do the npm init and answer a few questions

After that install a few dependencies 

npm install express cors mongodb dotenv

Express is a framework that acts as a light layer for the Node.js

![setup new backend folder](https://raw.githubusercontent.com/jitendrasoni/MERNStack/main/Setup/NODE_JS/images/003%20Setup%20the%20backend%20Folder%20and%20install%20npm.png)

Package name has to be in lower case

3.	Package.json will looks like this 

![setup new backend folder](https://raw.githubusercontent.com/jitendrasoni/MERNStack/main/Setup/NODE_JS/images/004%20Setup%20the%20backend%20Project%20Structure%20looks%20like.png)

3.	Setup express 
npm install express cores mongodb dotenv

 ![setup new express](https://raw.githubusercontent.com/jitendrasoni/MERNStack/main/Setup/NODE_JS/images/005%20-%20setup%20express.png)

 after installing the express, you would see below dependencies in the package.json

  ![express dependencies in package.json]( https://raw.githubusercontent.com/jitendrasoni/MERNStack/main/Setup/NODE_JS/images/006%20-%20new%20dependenciess%20added%20to%20the%20packges.png)

  Now, if you see the installation folder has the express folder

   ![express dependencies in package.json](https://raw.githubusercontent.com/jitendrasoni/MERNStack/main/Setup/NODE_JS/images/007%20%20Installatino%20folder%20has%20the%20express%20folder.png)

3.	Setup nodemon

//`npm install -g nodemon`

This package automatically detect code changes and restart the Node server.

4. Run the server 
//![Run Server](https://raw.githubusercontent.com/jitendrasoni/MERNStack/main/Setup/NODE_JS/BackendServer/image/0012%20Allow%20MongoDB%20Get%20connection%20String.png)

# Learning

1. I made a few mistakes, first was that when you run the commmand nodemon server, it should pick the index.js file from the root, I made a wrong file name, instead of index.js I kept it as index,js

2. Second mistakes, please don't use @ in the password, because it will not work, the environment variable connection string is the below format
MOVIEREVIEWS_DB_URI=mongodb+srv://jitusonijk:Impossible2050@merncluster.uwytm9h.mongodb.net/sample_mflix?retryWrites=true&w=majority






