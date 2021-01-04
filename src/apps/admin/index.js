import createAppInstance from '@/apps/base';
import { registerRoutes, registerStore } from '@/core';

import store from './store';
import routes from './routes';

const AdminModule = {
  install: () => {
    registerRoutes(routes);
    registerStore('admin', store);
  },
};

createAppInstance(AdminModule);
