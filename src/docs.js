import Vue from 'vue'
import App from './app'
import i18next from 'i18next'
import VueI18Next from '@panter/vue-i18next'

Vue.use(VueI18Next)

Vue.config.productionTip = false
const locales = {
  en: {
    'This month': 'This month',
    'This year': 'This year',
    'Last week': 'Last week',
    'Last month': 'Last month',
  },
  ru: {
    'This month': 'Этот месяц',
    'This year': 'Этот год',
    'Last week': 'Последняя неделя',
    'Last month': 'Последний месяц',
}
};

i18next.init({
  lng: '',
  resources: {
    resources: {
      en: { translation: locales.en },
      ru: { translation: locales.ru },
    },
  }
});

const i18n = new VueI18Next(i18next);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n: i18n,
  render: h => h(App)
})
