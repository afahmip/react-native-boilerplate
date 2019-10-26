import * as React from 'react';
import {View, Text, Button} from 'react-native';

export default class Sample extends React.Component {
  render() {
    return (
      <View>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Text>Hello</Text>
        <Button
          title="Click here to go to back to first screen"
          onPress={() => this.props.navigation.goBack(null)}
        />
      </View>
    );
  }
}
