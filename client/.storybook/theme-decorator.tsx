import { RenderFunction } from '@storybook/react';
import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../src/app/shared/styles';

export default (storyFn: RenderFunction) => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);
