import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { StackNavigator } from 'react-navigation';

class LogoTitle extends React.Component {
  render() {
    return (
      <Image
        source={require('./logo.jpg')}
        style={{ width: 30, height: 30 }}
      />
    );
  }
}

class HomeScreen extends React.Component {
	static navigationOptions = ({ navigation }) => {
		const params = navigation.state.params || {};

		return {
		   	headerTitle: 'Home',
		   	headerRight: (
		      <Button onPress={ params.sayHello } title="say" color="#ccc" />
		    ),
		};
	}
	componentWillMount() {
	    this.props.navigation.setParams({ sayHello: this._sayHello });
	  }

	  state = {
	    count: 0,
	  };

	  _sayHello = () => {
	  	alert('hello');
	  }
	  _increaseCount = () => {

	    this.setState({ count: this.state.count + 1 });
	  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'red', }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Profile', {
          	itemId: 86,
          	description: 'my face is red',
          	title: 'Profile Update'
          })}
        />
      </View>
    );
  }
}

class ProfileScreen extends React.Component {
	static navigationOptions = ({navigation, navigationOptions}) => {
		const { params } = navigation.state;

		return {
			title: params ? params.title : 'cannot page',
		}
	} 
  render() {

  	const {params} = this.props.navigation.state;
  	const itemId = params ? params.itemId : null;
  	const description = params ? params.description : null;

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'blue', }}>
        <Text>Profile Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(description)}</Text>
        <Button
          title="Go to Home... again"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}



const StackNav = StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Profile: {
  	screen: ProfileScreen,
  }
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
  });
export default StackNav;
