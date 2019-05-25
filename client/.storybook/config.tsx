import { setOptions } from '@storybook/addon-options';
import { addDecorator, configure } from '@storybook/react';
import themeDecorator from './theme-decorator';

setOptions({
  addonPanelInRight: true,
  name: 'Filo_RE Components',
});

const req = require.context('../internals/stories', true, /.stories.tsx$/);
function loadStories() {
  req.keys().forEach((filename: string) => req(filename));
}

addDecorator(themeDecorator);

configure(loadStories, module);
