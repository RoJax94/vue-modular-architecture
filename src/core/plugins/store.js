import { createStore, createLogger } from 'vuex';
import config from '@/config.json';
import coreStore from '../store';

const plugins = [];

const consoleLogger = createLogger({
  ...config.store.logger,
  logger: console,
});

if (process.env.NODE_ENV !== 'production') {
  plugins.push(consoleLogger);
}

const store = createStore({
  ...coreStore,
  plugins,
});

export const registerStore = (name, moduleStore) => {
  store.registerModule(name, moduleStore);
};

export default store;
