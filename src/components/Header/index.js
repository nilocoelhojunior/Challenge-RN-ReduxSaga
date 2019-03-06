import React, { Component } from 'react';
import { Header as NBHeader, Button } from 'native-base';

import VectorIcon from '../VectorIcon';
import { Title, Left, Right, Body, Border } from './style';

type Props = {
  title: string,
};

export default class Header extends Component<Props> {
  render() {
    const { title } = this.props;
    return (
      <React.Fragment>
        <NBHeader noShadow transparent>
          <Left>
            <Button transparent>
              <VectorIcon name="sg-menu" size={22} />
            </Button>
          </Left>
          <Body>
            <Title>{title}</Title>
          </Body>
          <Right>
            <Button transparent>
              <VectorIcon name="sg-search" size={25} />
            </Button>
          </Right>
        </NBHeader>
        <Border />
      </React.Fragment>
    );
  }
}
