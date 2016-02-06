# Not a Clicker - GameJam 2015

A simple HTML, CSS and JavaScript game written from scratch without frameworks
or additional tools.

## Folder Structure


    GGJ2016
    + .git - git specific folder
    + build - minified releases (appears with grunt use)
    + development - development files such as GUI mockups
    + node_modules - node.js/grunt modules (appears with grunt use)
    + src - the actual source code
    + .gitignore - defines which files/folders are ignored (e. g. Thumbs.db)
    + Gruntfile.js - grunt specific
    + package.json - grunt specific
    + README.md - this file

### Building a minified version of the Game

**NOTE:** Make sure you have [node.js](https://nodejs.org/) installed on your system: [How to Install Node.js](http://howtonode.org/how-to-install-nodejs)

**NOTE:** Make sure you have [grunt]() installed on your system: [Installing the CLI](http://gruntjs.com/getting-started#installing-the-cli)

We use [grunt](http://gruntjs.com/) to create a minified version of the game. The dependencies and tasks are already defined in the Gruntfile.js file.

**Build the minified version**

1. Open a command shell (e. g. powershell on Windows) or console/terminal MacOS X/Linux.

2. Change directory into the game repository. For example:

    ```
    ~$ cd GGJ2016
    ```

3. Run the grunt command:

   ```
   GGJ2016 ~$ grunt
   ```
4. A new folder `build` will be created, which contains the complete minified game.

The grunt command will recognize the `Gruntfile.js`, download the dependencies defined in `package.json`, and run all tasks in the `Gruntfile.js`. The dependencies will be stored in `node_modules` which will be automatically created the first time the grunt command is executed.
