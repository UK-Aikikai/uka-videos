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
          // todo - add player_type e.g. youtube or vimeo with a component to decide on the correct one
          // todo - create object manually with Japan YouTube video. (after initial deployment, change the payload in GitHub to have that too)
          // console.log(video);
          this.$store.commit("addVideo", video);
          this.$store.commit("reverseVideoOrder");
        }
      });
  },
  mounted() {}
};
</script>
