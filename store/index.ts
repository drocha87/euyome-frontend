import { ActionTree } from 'vuex';

function initialState() {
  return {
    users: [],
  };
}

export const state = initialState;

export type RootState = ReturnType<typeof state>;

export const mutations = {
  SET_SHOWCASES(state: Record<string, any>, payload: any) {
    state.users = payload;
  },
};

export const actions: ActionTree<RootState, RootState> = {
  async fetchShowcasesUsers({ commit }): Promise<void> {
    try {
      const users = await this.$axios.$get('/profiles/showcases');
      commit('SET_SHOWCASES', users);
    } catch (error) {
      commit('SET_SHOWCASES', []);
    }
  },
};

export const getters = {};
