

# Getting Started

>**Note**: 
I am a newbie in React Native. Here is my frist package which I publish to npm. 
If it make you waste your time, please dont blame me. I hope to disscuss about any the problem with you. Thank you !!!

### This package is for Android
## Test
You can clone this repo to test package.
   ```bash
   https://github.com/tiennguyen12g/react-native-animated-number-tnbt.git
   ```
   ```bash
   npx react-native start
   ```
   In the App.tsx, I have some data for test, you can use it if need.

## Installation using npm
   ```bash
   npm i react-native-animated-number-tnbt
   ```
# How to use "react-native-animated-number-tnbt"
## Import to your component
   ```bash
   import {AnimatedNumber} from "react-native-animated-number-tnbt"
   ```
   if typescript gives the error, you can try to create file name react-native-animated-number-tnbt.d.ts
   ```bash
   // file react-native-animated-number-tnbt.d.ts
   declare module "react-native-animated-number-tnbt"
   ```
#### Demo
   ![Watch the video](https://www.youtube.com/watch?v=gbKQOYHOjZY&ab_channel=CodeDaily)
## Available props
   ```bash
      interface Props {
        numberForAnimated: number;
        decimalAmount: number;
        includeComma?: boolean;
        gap?: number;
        colorValue?:string;
        fontSizeValue?:number;
        hookName:"withTiming" | "withSpring",
        withTimingProps?: {
          durationValue?: number;
          easingValue:string
        };
        withSpringProps?: {
          mass?: number;
          damping?: number;
          stiffness?: number;
          restDisplacementThreshold?: number;
          overshootClamping?: boolean;
          restSpeedThreshold?: number;
        };
      }
   ```
## Table list props

| Name              | Type    | Default | Description                                                                                                                                                        |
|-------------------|---------|---------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| decimalAmount     | number  | 1       | How many decimal places after the comma.                                                                                                                          |
| includeComma      | boolean | true    | Whether to include a comma for numbers greater than or equal to 1000. Example: 1000 => 1,000.                                                                    |
| gap               | number  | 5       | The space between two numbers.                                                                                                                                    |
| colorValue        | string  | "red"   | The color for the number.                                                                                                                                         |
| fontSizeValue     | number  | 50      | The size of the font.                                                                                                                                             |
| hookName          | string  | "withSpring" | The type of animation: "withTiming" or "withSpring".                                                                                                                 |

If you want to customize your animation, you should provide parameters to either "withTimingProps" or "withSpringProps", not both.
By default, "withSpring" is used.

### "withTimingProps"

| Name          | Type    | Default | Description                                                             |
|---------------|---------|---------|-------------------------------------------------------------------------|
| durationValue | number  | 500     | Time for running the animation.                                       |
| easingValue   | string  | "linear" | The easing function for the animation. Options: "linear", "ease", "bounce", "poly", "circle", "bezier". |

### "withSpringProps"

| Name                        | Type     | Default | Description                                                                                              |
|-----------------------------|----------|---------|----------------------------------------------------------------------------------------------------------|
| mass                        | number   | 1       | The weight of the spring. Reducing this value makes the animation faster.                               |
| damping                     | number   | 10      | How quickly a spring slows down. Higher damping means the spring will come to rest faster.             |
| stiffness                   | number   | 100     | How bouncy the spring is.                                                                               |
| overshootClamping           | boolean  | false   | Whether a spring can bounce over the `toValue`.                                                         |
| restDisplacementThreshold   | number   | 0.01    | The displacement below which the spring will snap to `toValue` without further oscillations.          |
| restSpeedThreshold          | number   | 2       | The speed in pixels per second from which the spring will snap to `toValue` without further oscillations. |

Reference: [Reanimated withSpring Documentation](https://docs.swmansion.com/react-native-reanimated/docs/animations/withSpring/)


Reference: https://docs.swmansion.com/react-native-reanimated/docs/animations/withSpring/
   ## Example
   ```bash
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Button
} from 'react-native';
import {AnimatedNumber} from "react-native-animated-number-tnbt"


function App(): JSX.Element {

  const [floatNumber, setFloatNumber] = React.useState(18500.5); 
  const decimalAmount = 2
  const increaseFloat = () => {
  const fractionNumber = decimalAmount;
  const result = (floatNumber + 565.4).toFixed(fractionNumber);
  setFloatNumber(+result);
}
  return (
    <SafeAreaView style={styles.container}>
      <AnimatedNumber              
        numberForAnimated = {floatNumber}
        includeComma = {true} // use for number greater or equal 1000.It looks like 1000 => 1,000.
        decimalAmount={decimalAmount}
        gap={2}
        hookName='withSpring'
        colorValue='orange'
        fontSizeValue={50}
      />
      <Button title="increaseFloat" onPress={increaseFloat} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    justifyContent:"center",
    flex:1
  }

});

export default App;

   ```
## I hope this library will help you save your time.
## Congratulations! :tada:

You've successfully run and modified this package. :partying_face:

