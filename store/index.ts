import { ActionTree } from 'vuex';
import { Style } from '~/types';

function initialState() {
  const defStyle: Style = {
    tileAvatar: false,
    border: false,
    borderColor: '#7ebc89',
    background: '#ffffff',
    backgroundImage: '',
    color: '#191919',
    buttonColor: '#ffffff',
    buttonBackground: '#7ebc89',
    buttonStyle: 'rounded',
  };

  return {
    users: [],
    defStyle,

    medias: [
      {
        media: 'website',
        icon: ['fas', 'globe'],
        site: 'https://',
      },
      {
        media: 'instagram',
        icon: ['fab', 'instagram'],
        site: 'https://instagram.com/',
      },
      {
        media: 'facebook',
        icon: ['fab', 'facebook'],
        site: 'https://facebook.com/',
      },
      {
        media: 'linkedin',
        icon: ['fab', 'linkedin'],
        site: 'https://linkedin.com/in/',
      },
      {
        media: 'tiktok',
        icon: ['fab', 'tiktok'],
        site: 'https://tiktok.com/@',
      },
      {
        media: 'whatsapp',
        icon: ['fab', 'whatsapp'],
        site: 'https://api.whatsapp.com/send?phone=',
      },
      {
        media: 'youtube',
        icon: ['fab', 'youtube'],
        site: 'https://youtube.com/',
      },
      {
        media: 'telegram',
        icon: ['fab', 'telegram'],
        site: 'https://telegram.me/',
      },
      {
        media: 'email',
        icon: ['fas', 'at'],
        site: 'mailto:',
      },
      {
        media: 'phone',
        icon: ['fas', 'phone'],
        site: 'tel:+',
      },
    ],
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
      const users = await this.$axios.$get('/showcases');
      commit('SET_SHOWCASES', users);
    } catch (error) {
      commit('SET_SHOWCASES', []);
    }
  },
};

export const getters = {
  getMedias(state: RootState) {
    return state.medias;
  },

  defaultStyle(state: RootState): Style {
    return state.defStyle;
  },
};
