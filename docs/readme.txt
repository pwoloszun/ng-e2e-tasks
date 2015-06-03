===
Install Node.js:
$ sudo apt-get update
$ sudo apt-get install nodejs

===
Install npm:
$ sudo npm install -g npm

===
Install node modules:
$ cd /path/to/app/ng-e2e-tasks
$ sudo npm install

===
Install bower components:
$ bower install

===
Run unit tests:
$ sudo npm test

===
Run e2e tests:
1) start server
$ npm start
2) run e2e protractor tests
$ npm run protractor

===
Debuging Protractor from WebStorm:
Open Run/Debug Configurations dialog
Add new Node.js configuration
On Configuration tab set:
  Path to Node: path to node executable . e.g. ‘/usr/bin/node’
  Working directory: your project base path e.g. ‘/usr/sesteva/myTests’
  Path To Node JS App file: path to Protractor cli.js file (e.g. node_modules\protractor\lib\cli.js)
  Application parameters: path to your Protractor configuration file (e.g. protractorConfig.js)
Click OK, place some breakpoints on your js files.
Click on Debug from the Run menu.
