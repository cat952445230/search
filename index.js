import React, {Component} from 'react';
import { AppRegistry } from 'react-native';
import TabNavigator from './js/page/Mainframe';

export default class app_framework extends Component {
  render() {
    return (
        <TabNavigator />
    );
  }
}

AppRegistry.registerComponent('search', () => app_framework);
