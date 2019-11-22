# @stormid/storybook-html-addon-markup

This storybook addon adds a panel showing the rendered static HTML markup of a story.

## Usage

Install

```sh
$ npm i @stormid/storybook-html-addon-markup --dev
```

Add this line to your `addons.js` file (create this file inside your storybook config directory if needed).

```js
import '@stormid/storybook-html-addon-markup';
```

import the `withMarkup` decorator to add static markup to your stories.

For all stories:

```js
import React from 'react';
import { storiesOf, addDecorator } from '@storybook/html';
import { withMarkup } from '@storybook/addon-a11y';

// should only be added once
// best place is in config.js
addDecorator(withMarkup);
configure(require.context('../src', true, /\.stories\.js$/), module);
```

Or per story:

```js
import { h, Fragment } from 'preact';
import render from 'preact-render-to-string/jsx';
import MyComponent from '../../src/templates/components/my-component';
import { withMarkup } from '@storybook/addon-a11y';

export default { 
    title: 'My component',
    decorators: [withMarkup]
};

export const Default = () => render(<MyComponent />);

```