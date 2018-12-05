# Android Nativescript Documentation

The nativescript documentation can be found at <a href="https://docs.nativescript.org">this link</a>.

The documentation for installation and setting up enivronment are found <a href="https://docs.nativescript.org/angular/start/quick-setup">here</a>.
Follow the website's instructions to the T and the enviornment should be created correctly.
To run you will have to seperately install an android emulator, found in the documentation.
Note, in order to run on iOS, you will need a mac.

To compile the project <br>
$ tsc <br>

To see which devices are available, run <br>
$ tns device [ios/android] --available-devices <br>
This should give you ID's of the devices, either emulators or devices.

To run on a device <br>
$ tns run [ios/android] <br>
This will default to any emulator you have installed. 
If you wish to specify the device (to run on a seperate phone) <br>
$ tns run [ios/android] -device [device_id] <br>

In order to connect an android device, you need
- a file transfer software
- the device in FTP mode

In order to sideload onto an iOS device,
- configure developer signature in XCode
- then locate the file ~/app/App_Resources/iOS/build.xcconfig
- edit developer ID there

# Project Setup
Ignore every javascript file in the repository, typescript overrides the javascript file if they have the same name
In the VSCode Preferences->settings, in the commonly used section, go to Files:Exclude, add
 - **/*.js <br>
This will hide all javascript files.

The project structure looks like
 - App_Resources - this is where individual settings for iOS vs Android go
 - App angular components (folder)
 - Main app files
 - Hooks (IDK what this does, internet tells me its pretty irrelevant)
 - Node_modules contain all dependencies, don't open or edit, all done through the command line
 - platforms, compiled code for the iOS/Android app goes here. If changes ever don't go live, delete this whole folder and it will be recompiled

The main app files contain a component, module, html, css, router, and 2 main files.
I didn't touch the main files. They came bundled with new project command.
The module is where you declare any other sub components for the app in order to be compiled.
Routing file handles the routes between components.
The HTML file has the first loaded page of the app. This pairs with the CSS file.

Each sub component contains its own mini environment. Each component needs to include <br>
- component.ts file
- component.html file - every component's look and feel is defined here. Use web skills!
- component.css file (optional) 
- component.service.ts (optional) - I used this as a getter/setter for the component.

The component.ts file is the compiler for the component. Follow the structure to declare where the html file, css, methods etc. 
You can use a VSCode extension called "Angular Snippets" to easily create the files for you, then you have to populate them. 

Good Luck.



