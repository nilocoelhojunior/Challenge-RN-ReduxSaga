// @flow

import * as React from 'react';
import { Text, View } from 'react-native';
import { Container } from 'native-base';

import pallete from '../../theme/variables/pallete';
import { DefaultScreen } from '../../components';

export default class Home extends React.Component<{}, {}> {
  render() {
    return (
      <DefaultScreen title="Saga Books" backgroundColor={pallete.yellow}>
        <Text>Home</Text>
      </DefaultScreen>
    );
  }
}
