// @flow

import * as React from 'react';
import { Text, View } from 'react-native';

export default class List extends React.Component<{}, {}> {
  static navigationOptions = {
    title: 'List',
  };

  render() {
    return (
      <View>
        <Text>List</Text>
      </View>
    );
  }
}
