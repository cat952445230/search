import React, {Component} from 'react';
import { AppRegistry } from 'react-native';
import StackNav from './js/page/Mainframe';

export default class app_framework extends Component {
  render() {
    return (
        <StackNav />
    );
  }
}

AppRegistry.registerComponent('search', () => app_framework);
