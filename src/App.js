import React from 'react';
import { Root, StyleProvider, getTheme } from 'native-base';
import { ThemeProvider } from 'styled-components';

import variables from './theme/variables/commonColor';
import pallete from './theme/variables/pallete';

import { AppNavigator } from './routes';

export default () => (
  <StyleProvider style={getTheme(variables)}>
    <Root>
      <ThemeProvider theme={pallete}>
        <AppNavigator />
      </ThemeProvider>
    </Root>
  </StyleProvider>
);
