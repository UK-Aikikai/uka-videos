import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    search: "",
    videos: [],
    filtered: []
  },
  // todo - add videos found in search in `filtered`
  mutations: {
    addVideo(state, video) {
      state.videos.push(video);
    },
    reverseVideoOrder() {
      this.state.videos.reverse();
    },
    resetFilter() {
      this.state.filtered = [];
    },
    filteredList() {
      return this.video.filter(video => {
        return video.search.toLowerCase().includes(this.search.toLowerCase())
      })
    }
  },
  getters: {
    getVideos: state => {
      return state.videos;
      // return state.filtered.length > 0 ? state.filtered : state.videos
    }
  },
  actions: {},
  modules: {}
});
