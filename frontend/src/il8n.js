import Vue from 'vue'
import VueI18n from 'vue-i18n'
import tamil from './JSON/tamil.json'
import english  from './JSON/english.json'

Vue.use(VueI18n);

export const i18n = new VueI18n({
    locale: 'en', // set locale
    fallbackLocale: 'es', // set fallback locale
    messages: {
        en: english,
        tn: tamil
    } // set locale messages
});