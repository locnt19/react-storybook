import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import TodoItem from '../src/components/TodoItem/TodoItem'

storiesOf('TodoItem', module)
  .add(
    'Default',
    () => (
      <TodoItem
        key={0}
        item={{
          title: "Default style",
          isComplete: false
        }}
      />
    )
  )
  .add(
    'Complete',
    () => (
      <TodoItem
        key={0}
        item={{
          title: "Complete style",
          isComplete: true
        }}
      />
    )
  )