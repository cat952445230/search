import React from 'react';
import { Text, View, Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TabNavigator, TabBarBottom, StackNavigator } from 'react-navigation';

class DetailsScreen extends React.Component {
	static navigationOptions = ({ navigation }) => {
		const { params } = navigation.state;
		return {
			title: params ? params.title : 'unknow page',
		}
	}
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Details!</Text>
      </View>
    );
  }
}

class HomeScreen extends React.Component {
	static navigationOptions = ({ navigation }) => {
		const params = navigation.state.params || {};

		return {
		   	headerTitle: 'Home',
		};
	}
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details', {
          	title: 'Home Details'
          })}
        />
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
	static navigationOptions = ({ navigation }) => {

		return {
			title: 'Settings',
		}
	}
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details', {
          	title: "Settings Details"
          })}
        />
      </View>
    );
  }
}

class MessageScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Message!</Text>
      </View>
    );
  }
}

class CartScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Cart!</Text>
      </View>
    );
  }
}

const HomeStack = StackNavigator({
	Home: { screen: HomeScreen },
  	Details: { screen: DetailsScreen },
},
{
	initialRouteName: 'Home',
	navigationOptions: {
	  headerStyle: {
	    backgroundColor: '#f4511e',
	  },
	  headerTintColor: '#fff',
	  headerTitleStyle: {
	    fontWeight: 'bold',
	  },
	},
}
)

const SettingsStack = StackNavigator({
  Settings: { screen: SettingsScreen },
  Details: { screen: DetailsScreen },
},
{
	initialRouteName: 'Settings',
	navigationOptions: {
	  headerStyle: {
	    backgroundColor: '#f4511e',
	  },
	  headerTintColor: '#fff',
	  headerTitleStyle: {
	    fontWeight: 'bold',
	  },
	},
}
);



export default TabNavigator(
{
  Home: { screen: HomeStack },
  Message: { screen: MessageScreen },
  Cart: { screen: CartScreen },
  Settings: { screen: SettingsStack },
},
{
	navigationOptions: ({ navigation }) => ({
	  tabBarIcon: ({ focused, tintColor }) => {
	    const { routeName } = navigation.state;
	    let iconName;
	    if (routeName === 'Home') {
	      iconName = `ios-home${focused ? '' : '-outline'}`;
	    } else if (routeName === 'Settings') {
	      iconName = `ios-person${focused ? '' : '-outline'}`;
	    } else if ( routeName === 'Message') {
	    	iconName = `ios-chatbubbles${focused ? '' : '-outline'}`;
	    } else if ( routeName === 'Cart') {
	    	iconName = `ios-cart${focused ? '' : '-outline'}`;
	    }
	    return <Ionicons name={iconName} size={25} color={tintColor} />;
	  },
	}),
	tabBarOptions: {
	  activeTintColor: 'tomato',
	  inactiveTintColor: 'gray',
	},
	tabBarComponent: TabBarBottom,
	tabBarPosition: 'bottom',
	animationEnabled: false,
	swipeEnabled: false,
	}
);