####1. Install dependencies with:

``` # npm i ```

``` # bower i ```

####3. Build preview(local) and prod directories:

``` # gulp build ```

####3. Run with livereload workflow:

``` # gulp  ```




Node JS installation
Install Node.js from http://nodejs.org/

Node packages Installation
	• Open terminal and enter: 
		○ npm install gulp -g
	• An error should appear displaying that npm does not have access to the directory under /usr/local/lib/node_modules and Please try running this command again as root/Administrator.
	• Install gulp as admin or sudo:
		○ sudo npm install gulp -g
	• Install grunt as admin or sudo:
		○ sudo npm install grunt -g
	• Install bower as admin or sudo:
		○ sudo npm install bower -g

Package Installation on Git Repository
	• Navigate to git repository: 
		○ cd git/RowdytheRoadRunner
	• Once in the directory run:
		○  npm i
	• When completed run:
		○ bower I
	
Mac and Xcode
If you are using a Mac you will get the following message if you have never set up Xcode:

Additional error details:
xcode-select: note: no developer tools were found at '/Applications/Xcode.app', requesting install. Choose an option in the dialog to download the command line developer tools.

Agree to the installation and once it's complete return to Terminal

Gulp Build and Gulp
To start building with the tools run:
	• gulp build
And to start the live reload server run:
	• gulp

This should open a new tab in your default browser displaying all files and preview html files.
