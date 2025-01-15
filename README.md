# Expo iOS Crash with Alert.alert in useEffect

This repository demonstrates a bug where an Expo app crashes on iOS when `Alert.alert` is called within a `useEffect` hook. The app attempts to increment a counter and displays an alert when the counter reaches 10.  However, on iOS, this causes a crash.

## Reproducing the Bug

1. Clone this repository.
2. Run `npm install`.
3. Run `expo start`.
4. Increment the counter on the app until it reaches 10. The app should crash on iOS devices.

## Solution

The solution involves checking if the component is still mounted before calling `Alert.alert`. This prevents attempts to update state after unmounting.  See the `bugSolution.js` file for the corrected code.

## Note

This bug appears to be specific to iOS and may be related to the timing of state updates and component unmounting within the `useEffect` hook.