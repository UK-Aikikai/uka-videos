<template>
  <v-app class="grey lighten-4">
    <Searchbar />

    <v-main>
      <v-container>
        <v-timeline
          v-if="this.$store.getters.getVideos.length > 0"
          :dense="$vuetify.breakpoint.smAndDown"
        >
          <VideoTimeLineItem
            v-for="video in this.$store.getters.getVideos"
            :key="video.date"
            :video="video"
          />
        </v-timeline>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";
import VideoTimeLineItem from "@/components/VideoTimeLineItem";
import Searchbar from "@/components/Searchbar";

export default {
  name: "App",

  components: {
    VideoTimeLineItem,
    Searchbar
  },

  created() {
    axios
      .get(
        "https://raw.githubusercontent.com/pavlakis/api-ukaikikai/master/videos.json"
      )
      .then(response => {
        for (const [key, object] of Object.entries(response.data)) {
          let video = object[0];
          video.date = `${key}`;
          video.player_type = "vimeo";
          video.search =
            "" + video.date + ", " + video.title + ", " + video.description;
          // todo - create object manually with Japan YouTube video. (after initial deployment, change the payload in GitHub to have that too)
          this.$store.commit("addVideo", video);
        }

          let video = {};
          video.date = 2019;
          video.title = "57th All Japan Aikido";
          video.description = "Demonstration by the  United Kingdom Aikikai Delegation. Including Gordon Jones shihan, Philip Smith Shihan, Alan Smith, Guy Needler, Neil Mould";
          video.player_type = "youtube";
          video.player = "https://www.youtube.com/embed/68s7VOswctU"

          video.search =
              "" + video.date + ", " + video.title + ", " + video.description;

          this.$store.commit("addVideo", video);
          this.$store.commit("sortOrderByDate");
      });
  },
  mounted() {}
};
</script>
