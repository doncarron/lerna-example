import * as React from 'react';
import { configure, addDecorator } from '@storybook/react';

import { I18nextProvider, translate } from 'react-i18next';
import { CssBaseline } from '@material-ui/core';
import { i18n } from '../config/i18n';

translate.setDefaults({
    wait: false,
    withRef: false,
    bindI18n: 'languageChanged loaded',
    bindStore: 'added removed',
    nsMode: 'default'
  });

const req = require.context('../packages', true, /index\.story\.tsx$/)

const i18nDecorator = (story) => (
    React.createElement(I18nextProvider, {i18n: i18n}, story())
);

const baselineDecorator = (story) => (
    React.createElement(CssBaseline, null, story())
);

function loadStories() {
  req.keys().forEach(req)
}

// Register decorators
addDecorator(i18nDecorator);
addDecorator(baselineDecorator);
configure(loadStories, module);
