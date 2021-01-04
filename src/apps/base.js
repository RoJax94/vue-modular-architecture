import { createApp } from 'vue';

import CoreModule, { Bootstrap, router, store } from '@/core';
import SharedModule from '@/shared';

const createAppInstance = (AppModule) => {
  const app = createApp(Bootstrap);

  app.use(CoreModule);
  app.use(SharedModule);

  app.use(AppModule);

  app.use(router);
  app.use(store);

  app.mount('#app');
};

export default createAppInstance;
