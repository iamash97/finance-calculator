import { createApp,defineAsyncComponent } from 'vue';

import App from './App.vue';
import SipCalculator from './components/SipCalculator.vue';
import LumpSumCalculator from './components/LumpSumCalculator.vue';

import BaseCard from './Styles/BaseCard.vue';
// import BaseButton from './Styles/BaseButton.vue';
import AppMenu from './Styles/AppMenu.vue';

const app = createApp(App);

const BaseButton= defineAsyncComponent(() => import('./Styles/BaseButton.vue')) //lazy-loading

app.component('sip-calculator', SipCalculator);
app.component('lump-sum-calculator', LumpSumCalculator);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('app-menu', AppMenu);

app.mount('#app');
