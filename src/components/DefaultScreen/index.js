// @flow

import React, { Component } from 'react';
import { Container } from 'native-base';

import { Content } from './style';
import Header from '../Header';
import pallete from '../../theme/variables/pallete';

type Props = {
  backgroundColor?: string,
  children: React.ReactNode,
};

export default class DefaultScreen extends Component<Props> {
  static defaultProps = {
    backgroundColor: 'white',
  };

  render() {
    const { children, backgroundColor } = this.props;
    return (
      <Container style={{ backgroundColor: pallete.yellow }}>
        <Header {...this.props} />
        <Content style={{ backgroundColor }}>{children}</Content>
      </Container>
    );
  }
}
