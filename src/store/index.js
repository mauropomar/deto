import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'

// import example from './module-example'
import toolbar from './store-toolbar';
import animation from './store-animation';
import button from './store-button';

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      button,
      toolbar,
      animation
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })

  return Store
})
