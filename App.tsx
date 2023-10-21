/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Button
} from 'react-native';
import AnimatedNumber from './src/AnimatedNumber';


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
        // decimalAmount={decimalAmount}
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
