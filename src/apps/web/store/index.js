import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const defaultState = () => ({
  isLoaded: false,
});

export default {
  namespaced: true,
  state: defaultState,
  actions,
  getters,
  mutations,
};
