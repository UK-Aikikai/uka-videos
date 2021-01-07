import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    videos: [],
    filtered: []
  },
  mutations: {
    addVideo(video) {
      this.state.videos.push(video);
    },
    reverseVideoOrder() {
      this.state.videos.reverse();
    }
  },
  getters: {
    getVideos: state => {
      return state.videos
    }
  },
  actions: {},
  modules: {}
});
