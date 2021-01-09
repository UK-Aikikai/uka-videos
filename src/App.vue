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

      <v-footer
              color="primary lighten-1"
              padless
      >
          <v-row
                  justify="center"
                  no-gutters
          >
              <v-btn
                      v-for="(link, index) in links.site"
                      :key="index"
                      color="white"
                      text
                      rounded
                      class="my-2"
                      :href="link.href"
                      target="_blank"
              >
                  {{ link.title }}
              </v-btn>

              <v-col
                      class="primary lighten-2 py-4 text-center white--text"
                      cols="12"
              >
                  <v-btn
                          v-for="(social, index) in links.social"
                          :key="index"
                          class="mx-4 white--text"
                          icon
                          :href="social.href"
                          target="_blank"
                  >
                      <v-icon size="24px">
                          {{ social.icon }}
                      </v-icon>
                  </v-btn>
              </v-col>

              <v-col
                      class="primary lighten-2 py-4 text-center white--text"
                      cols="12"
              >
                  {{ new Date().getFullYear() }} — <strong>United Kingdom Aikikai</strong>
              </v-col>
          </v-row>
      </v-footer>
  </v-app>
</template>

<script>
import axios from "axios";
import VideoTimeLineItem from "@/components/VideoTimeLineItem";
import Searchbar from "@/components/Searchbar";

export default {
  name: "App",

    data() {
        return {
            links: {
                site: [
                    { title: "UKA Home", href: "https://ukaikikai.org.uk/"},
                    { title: "About Aikido", href: "https://ukaikikai.org.uk/about-aikido"},
                    { title: "Courses and Events", href: "https://ukaikikai.org.uk/courses-and-events"},
                    { title: "Member Resources", href: "https://ukaikikai.org.uk/member-resources"},
                ],
                social: [
                    {icon: 'mdi-facebook', href: 'https://www.facebook.com/UKAikikai'},
                    {icon: 'mdi-twitter', href: 'https://twitter.com/ukaikikai'},
                    {icon: 'mdi-instagram', href: 'https://www.instagram.com/ukaikikai/'},
                ]
            }
        };
    },
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
