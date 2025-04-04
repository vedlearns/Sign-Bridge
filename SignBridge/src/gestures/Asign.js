import {Finger, FingerCurl, FingerDirection, GestureDescription} from 'fingerpose';

export const aSign = new GestureDescription('A');
//Thumb
// aSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
// aSign.addDirection(Finger.Index, FingerDirection.DiagonalUpRight, 0.70);

// //Index
// aSign.addCurl(Finger.Index, FingerCurl.FullCurl, 1);
// aSign.addDirection(Finger.Index, FingerDirection.VerticalUp, 0.70);

// //Middle
// aSign.addCurl(Finger.Middle, FingerCurl.FullCurl, 1);
// aSign.addDirection(Finger.Middle, FingerDirection.VerticalUp, 0.70);

// //Ring
// aSign.addCurl(Finger.Ring, FingerCurl.FullCurl, 1);
// aSign.addDirection(Finger.Ring, FingerDirection.VerticalUp, 0.70);

// //Pinky
// aSign.addCurl(Finger.Pinky, FingerCurl.FullCurl, 1);
// aSign.addDirection(Finger.Pinky, FingerDirection.VerticalUp, 0.70);

//----------------------
// Thumb: Not curled (extended across the side)
aSign.addCurl(Finger.Thumb, FingerCurl.NoCurl, 1.0);
aSign.addDirection(Finger.Thumb, FingerDirection.DiagonalUpLeft, 1.0);

// All other fingers: Fully curled into the palm
[Finger.Index, Finger.Middle, Finger.Ring, Finger.Pinky].forEach((finger) => {
  aSign.addCurl(finger, FingerCurl.FullCurl, 1.0);
  aSign.addDirection(finger, FingerDirection.VerticalUp, 0.9);
});