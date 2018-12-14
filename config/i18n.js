import * as i18next from 'i18next';
import Backend from 'i18next-xhr-backend';
import { reactI18nextModule } from 'react-i18next';

const overrideLanguageCode = 'fr'; // set to 'en', 'fr', or whatever for testing. set to null to allow normal browser detection.
const languages = ['en', 'fr']; // set to any languages you want to support AND have translation files for.

const i18nconfig = {
    ns: ['translations'],
    defaultNS: 'translations',
    fallbackLng: 'en',
    backend: {
        loadPath: '/{{lng}}/{{lng}}.json',
        addPath: '{{lng}}/{{lng}}',
    },
    debug: true,
    react: {
        wait: false,
        withRef: false,
        interpolation: {
            escapeValue: false, // not needed for react!
        },
        bindI18n: 'languageChanged',
        bindStore: false,
        nsMode: 'default'
    }
}

if(overrideLanguageCode) i18nconfig.lng = overrideLanguageCode;

let i18n = i18next
    .use(Backend)
    .use(reactI18nextModule)
    .init(i18nconfig);

export { i18n, languages };