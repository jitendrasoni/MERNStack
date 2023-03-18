# React.js Introduction
Node.js will be the express backend is basically first letter of MERN Stack development project.

# Node.js Setup (ATLAS CLOUD DATABASE)

1.	Best way to start is to create a new react-app, run below command and create the frontend folder in parallel to the backend folder.

`npx create-react-app frontend`

why use npx, as it' required one time base setup

the name should be the lower case, otherwise you will get an error

![creation of new react app in progress](https://github.com/jitendrasoni/MERNStack/blob/main/Setup/React/image/001%20InProgress.png?raw=true)

At this stage, I again realised that I should have kept all folder names in the lower case, because if you are working on the FE application with BE, it's a bit weired to keep different different type of the navming conventions, so in case the FE has the hard restriction to keep the name in the lower case, so I would prefer to keep everthing in lower case for the projecct structure.

Default output once you have installed the react app

//`Run `npm audit` for details.

Success! Created frontend at C:\projects\personal\MERNStack\frontend
Inside that directory, you can run several commands:

  npm start
    Starts the development server.

  npm run build
    Bundles the app into static files for production.

  npm test
    Starts the test runner.

  npm run eject
    Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!

We suggest that you begin by typing:

  cd frontend
  npm start

Happy hacking!
`
![Installation completed](https://raw.githubusercontent.com/jitendrasoni/MERNStack/main/Setup/React/image/002%20React%20Application%20completed.png)

2. Defautl react folder structure after creating the first app

It has a node_modules, public folder, src folder
go into the front end folder and do npm start

Here is the first react app running on port 3000

//![Default running react app](https://raw.githubusercontent.com/jitendrasoni/MERNStack/main/Setup/React/image/003%20Start%20React%20App.png)


All react code are under the src folder and index.js is the main entry point
React is the library for creating views, ReactDOM is the library used to render the UI in the browser


App.js is the main React code that we display on the page.

//`import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;`

In the above example, ClassName is the property instead of Class, because Class is a reserverd word in the Javascript.

A component can be a functional or class based.

3. Add React bootstrap framework.

run the below command 

install react-bootstrap bootstrap

![alt](https://raw.githubusercontent.com/jitendrasoni/MERNStack/main/Setup/React/image/004%20Install%20bootstrap.png)

4. Add React-Router-DOM

Install react-router-dom to route different URLs to different pages in our React app. The react Router library interprets a browser URL as an instruction to navigate to varous components.

`npm install --save react-router-demo@5.2.0`

![Install react rounter](https://github.com/jitendrasoni/MERNStack/blob/main/Setup/React/image/005%20install%20React%20Routers.png?raw=true)


![Install react rounter references](https://github.com/jitendrasoni/MERNStack/blob/main/Setup/React/image/006%20Package%20Information.png?raw=true)

5. Error - bootstrap/dist/css/boostrap.min.css can't resolved

![Error](https://github.com/jitendrasoni/MERNStack/blob/main/Setup/React/image/007%20Error.png?raw=true)

oh! I foound the path, basically all the modules installed under the node_modules so I have updated the correct path.


C:\projects\personal\MERNStack\frontend\node_modules\bootstrap\dist\css\bootstrap.min.css

I found the answer help here, always thanks to stachoverflow
https://stackoverflow.com/a/67655500/4253729

now, I can see the result

![Error Fix ](https://github.com/jitendrasoni/MERNStack/blob/main/Setup/React/image/008%20Final%20Result.png?raw=true)

6. create navigation header bar

first create a components folder under the src folder, we will create four new components

movies-list.js
movie.js
add-review.js
login.js

Add these references in App.js

import AddReview from './components/add-review' 
import MovieList from './components/movie-list'
import Movie from './components/movie'
import Login from './components/login'

7. Setup navbar 

https://react-bootstrap.github.io/components/navbar/
