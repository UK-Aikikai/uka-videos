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
    sortOrderByDate() {
      this.state.videos.sort(function(video1, video2) {
        return video2.date - video1.date;
      });
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
      return state.videos.filter(video => {
        return video.search.toLowerCase().includes(this.search.toLowerCase());
      });
    }
  },
  actions: {},
  modules: {}
});
