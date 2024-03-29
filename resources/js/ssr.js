import { createInertiaApp,Link,Head } from '@inertiajs/vue3';
import createServer from '@inertiajs/vue3/server'
import { renderToString } from '@vue/server-renderer'
import { createSSRApp, h } from 'vue'
import { ZiggyVue } from '../../vendor/tightenco/ziggy/dist/vue.m';
import PrimaryButton from '@/Components/Base/PrimaryButton.vue'
import { VueReCaptcha, useReCaptcha } from 'vue-recaptcha-v3'

createServer(page =>
  createInertiaApp({
    page,
    render: renderToString,
    resolve: name => {
      const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
      return pages[`./Pages/${name}.vue`]
    },
    setup({ App, props, plugin }) {
      return createSSRApp({
        render: () => h(App, props),
      }) .use(plugin)
      .use(ZiggyVue)
      .component("Link",Link,)
      .component("Head",Head)
      .use(VueReCaptcha, { siteKey: captcheKey } )
      .component("PrimaryButton",PrimaryButton)
    },
  }),
)