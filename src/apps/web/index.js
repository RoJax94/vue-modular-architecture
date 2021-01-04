import createAppInstance from '@/apps/base';
import { registerRoutes, registerStore } from '@/core';

import routes from './routes';
import store from './store';
import registerComponents from './components/shared';

const WebModule = {
  install: (app) => {
    registerRoutes(routes);
    registerStore('web', store);
    registerComponents(app);
  },
};

createAppInstance(WebModule);
