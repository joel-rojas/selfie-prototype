# Selfie Prototype

## Intro

This app can take, list and display selfies by using smartphone's front camera.

This project was bootstrapped with [Expo CLI QuickStart](https://github.com/expo/expo-cli).


## Usage
**Note:** *This app only works on `iOS devices` (Tested with iOS 14+ version & different mobile devices). The app works partially with `iOS simulators` since they don't support apps with camera devices. It won't work for `Android devices`.*

Before opening this app, make sure you have downloaded and installed [Expo Go app](https://apps.apple.com/us/app/expo-go/id982107779) in your iOS device.

There are two ways to review this app:

### Quick way review

The app is published in the following [page](https://expo.io/@joel-rojas/selfie-prototype-by-emerson-rojas). Please follow next steps:

1. Open it from your computer, it will display a `QR Code`.
2. Scan the `QR Code` with your smartphone camera or a `QR Code scanner` app.
3. After scanning it, a notification badge will be displayed in your smartphone which propmts opening `Expo Go` app.
4. Once `Expo Go` app is opened, the `Selfie app` should be rendered and working without any issues.

### Normal way review

The app can be opened by running its own local server but these steps should be followed first before drilling down deeper:

1. `Node.js` version `14+ `installed locally.
2. Install app's npm dependencies with npm command: `npm i` and wait until all `npm dependencies` are installed.
3. Run `npm start` to lift and run `Metro Bundler` server (Opens a web page).
4. This page will display a simple dashboard with connected mobile devices, a terminal logger, compatible devices lists to run and small `QR Code` section if user decides to run the app through his/her smartphone.

Finally, follow `2-4` steps from `Quick way review` section and the app should be ready to go.

## Limits
The app meets all requirements needed by the code challenge. However, some functionalities are incomplete or need to improve:

- The selfies list will display only the first 50 selfies. This happens because `expo-media-library` package needs a single paramater to show the first `nth photos` created and gives a chance to display more by using almost `pagination` mechanism in its `getAssetsAsync` method.
- If a selfie is selected from list then its image gets rendered with `100%` height value in its screen but the image is slightly zoomed in. This could be improved.

## Tech Stack
The following main tools were integrated during development process:

- React 16
- React Native 0.63
- Typescript 4
- Expo SDK 41
- Expo Media Library
- Expo Camera
- Redux
- React Redux

## License
MIT License
