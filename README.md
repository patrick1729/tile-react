# Tiles
My first POC (Proof Of Concept) on ReactJS. A small game of tiles where the user is given a score when clicked on tiles that are continuously appearing and disappering at different locations of the canvas. The score is decided based on the color of the tile clicked.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You’ll need to have Node >= 6 on your machine and a modern web browser. 

### Installing

First install [Node](https://nodejs.org/en/download/).
After installation check the version of ```npm``` (run the following command in the terminal):
```
npm -v
```
If you have ```npm``` 5.2.0+ installed, you may use npx:
```
npx create-react-app tiles

cd tiles
```
else run the command : 
```
npm install -g create-react-app

create-react-app tiles

cd tiles
```
Create React App is the best way to start building a new React single page application. It sets up your development environment so that you can use the latest JavaScript features, provides a nice developer experience, and optimizes your app for production. Create React App doesn’t handle backend logic or databases; it just creates a frontend build pipeline, so you can use it with any backend you want. It uses build tools like Babel and webpack under the hood, but works with zero configuration.

Now install one more package ```jquery```:
```
npm install jquery
```
After installation replace the ```src``` and ```public``` directories of the ```tiles``` app just created with the ```src``` and ```public``` directories of this repository that you have cloned on your personal machine.

That's all run the following command and enjoy! 
```
npm start
```

### Folder Structure

After creation, your project should look like this:

```
tiles/
  README.md
  LICENSE
  package.json
  CONTRIBUTING.md
  public/
    index.html
    favicon.ico
    manifest.json
  src/
    components/
      App.js
      Canvas.js
      Guide.js
      Score.js
      Timer.js    
    css/
      index.css    
    index.js
    createServiceWorker.js
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.

Only files inside `public` can be used from `public/index.html`.

You can, however, create more top-level directories.

## Built With

* [ReactJS](https://reactjs.org/) - The web framework used
* [jQuery](https://jquery.com/) - For animations
* [ECMASCRIPT 6](http://es6-features.org/#Constants) - Standard used to write Javascript code
* [Babel](https://babeljs.io/) - Transpiler used

## Contributing

Please read [CONTRIBUTING.md](https://github.com/prateekmishra-95/Tiles/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Authors

* **Prateek Mishra** - [prateekmishra-95](https://github.com/prateekmishra-95)

## License

This project is licensed under the Apache License - see the [LICENSE.md](https://github.com/prateekmishra-95/Tiles/blob/master/LICENSE) file for details.
