import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    search: "",
    videos: []
  },

  mutations: {
    addVideo(state, video) {
      state.videos.push(video);
    },
    reverseVideoOrder() {
      this.state.videos.reverse();
    },
    updateSearchKeyword(state, search) {
      state.search = search;
    }
  },
  getters: {
    getVideos(state) {
      let filteredList = state.videos.filter(video => {
        return video.search.toLowerCase().includes(state.search.toLowerCase());
      });

      if (filteredList.length > 0) {
        return filteredList;
      }

      return state.videos;
    },
    filteredList(state) {
      console.log(state);
      return state.videos.filter(video => {
        return video.search.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  },
  actions: {},
  modules: {}
});
