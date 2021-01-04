import routes from './routes';
import { registerRoutes } from './plugins/router';

export { default as Bootstrap } from './Bootstrap.vue';
export { default as router, registerRoutes } from './plugins/router';
export { default as store, registerStore } from './plugins/store';
export { default as http, cancelToken } from './utils/http.utils';

const CoreModule = {
  install: () => {
    registerRoutes(routes);
  },
};

export default CoreModule;
