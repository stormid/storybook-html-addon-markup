import React from 'react';
import addons, { makeDecorator } from '@storybook/addons';
import { EVENT } from './constants';

export const withMarkup = makeDecorator({
  name: 'withMarkup',
  skipIfNoParametersOrOptions: false,
  wrapper: (getStory, context, { parameters }) => {
    const channel = addons.getChannel();
    const story = getStory(context);
    channel.emit(EVENT, { markup: story });
    return getStory(context);
  }
});