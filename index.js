/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import AnimatedNumber from './src/AnimatedNumber';

AppRegistry.registerComponent(appName, () => App);

export {AnimatedNumber}
