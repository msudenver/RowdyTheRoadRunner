####1. Node JS installation

Install Node.js from http://nodejs.org/

####2. Node packages Installation

	   Open terminal and enter:
    
		``` # npm install gulp -g ```
        
	• An error should appear displaying that npm does not have access to the directory under /usr/local/lib/node_modules and Please try running this command again as root/Administrator.
    
	• Install gulp as admin or sudo:
    
		``` # sudo npm install gulp -g ```
        
	• Install grunt as admin or sudo:
    
		``` # sudo npm install grunt -g ```
        
	• Install bower as admin or sudo:
    
		``` # sudo npm install bower -g ```

####3. Package Installation and dependencies on Git Repository

	• Navigate to git repository: 
    
		``` # cd git/RowdytheRoadRunner ```
        
	• Once in the directory run:
    
		``` # npm i ```
        
	• When completed run:
    
		``` # bower i ```
	
####Note. Mac and Xcode

If you are using a Mac you will get the following message if you have never set up Xcode:

``` Additional error details: ```
``` xcode-select: note: no developer tools were found at '/Applications/Xcode.app', requesting install. Choose an option in the dialog to download the command line developer tools. ```

Agree to the installation and once it's complete return to Terminal


####4. Build preview(local) and prod directories:

``` # gulp build ```

####5. Run with livereload workflow:

``` # gulp  ```

This should open a new tab in your default browser displaying all files and preview html files.
