import React, { Component } from 'react';
import { Container } from 'native-base';

import { Content } from './style';
import Header from '../Header';

export default class DefaultScreen extends Component {
  render() {
    return (
      <Container>
        <Header {...this.props} />
        <Content>{this.props.children}</Content>
      </Container>
    );
  }
}
