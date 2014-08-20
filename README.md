####1. Node JS installation

Install Node.js from http://nodejs.org/

####2. Node packages Installation

• Navigate to git repository:

    # cd git/RowdytheRoadRunner

• Once in the directory run:

    # sudo npm install

####3. Package Installation and dependencies on Git Repository

• Install bower packages:

		# bower install

###Note. Mac and Xcode

If you are using a Mac you will get the following message if you have never set up Xcode:

        Additional error details:
        xcode-select: note: no developer tools were found at '/Applications/Xcode.app', requesting install. Choose an option in the dialog to download the command line developer tools.

Agree to the installation and once it's complete return to Terminal


####4. Prepares preview and prod directories:

        # gulp prep

####5. Run with livereload workflow:

        # gulp serve

This should open a new tab in your default browser displaying all files and preview html files.
