import { action } from '@storybook/addon-actions';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { MusterForm } from '~/app/shared/components';

const stories = storiesOf('MusterForm', module);
stories.addDecorator(withKnobs);

stories.add('default', () => (
  <MusterForm disabled={boolean('Disabled', false)} onClick={action('onClick')}>
    {text('Label', 'Default')}
  </MusterForm>
));
