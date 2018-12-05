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
 - **/*.js
This will hide all javascript files.


