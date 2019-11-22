import React, { useState, useEffect } from 'react';
import addons from '@storybook/addons';
import { AddonPanel } from '@storybook/components';
import styles from './style';
import { EVENT } from './constants';

const Markup = ({ api }) => {
  const [ markup, setMarkup ] = useState(false);
  useEffect(() => {
    api.on(EVENT, story => {
      setMarkup(story.markup);
    });
  }, []);

  return <div style={styles.container}>          
    {
        markup
        ? <div>
            <h1 style={styles.header}>Example</h1>
            <div style={styles.codeContainer}>
                <pre style={styles.pre}>
                    <code style={styles.code}>{ markup }</code>
                </pre>
            </div>
        </div>
        : null
    }
    </div>;
};

export default Markup;

addons.register('storybook/markup', api => {
  addons.addPanel('storybook/markup/panel', {
    title: 'HTML',
    render: ({ active, key }) => (
      <AddonPanel key={key} active={active}>
        <Markup api={api} />
      </AddonPanel>
    ),
  });
});