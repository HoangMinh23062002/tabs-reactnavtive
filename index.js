/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import Bai from './practise/bai1'
import Run from './practise/bai3'
import Baii from './practise/bai4'
import SecondScreen from './practise/navigation'



import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => SecondScreen);
