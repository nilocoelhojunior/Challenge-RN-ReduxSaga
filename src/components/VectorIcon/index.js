// @flow

import * as React from 'react';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import styled from 'styled-components';

import icoMoonConfig from '../../../assets/fonts/sagabooks/selection.json';

const IcoMoon = createIconSetFromIcoMoon(icoMoonConfig, 'sagabooks', 'sagabooks.ttf');

type Props = {
  name: string,
  color: string,
  size?: number,
};

class VectorIcon extends React.PureComponent<Props> {
  static defaultProps = {
    size: 16,
  };

  render() {
    return <IcoMoon {...this.props} />;
  }
}

export default VectorIcon;
