<template>
  <v-timeline-item>
    <template v-slot:icon>
      <v-avatar>
        <span></span>
      </v-avatar>
    </template>
    <template v-slot:opposite>
      <span>{{ video.date }}</span>
    </template>
    <v-card class="elevation-2">
      <v-card-title class="headline">
        {{ video.title }}
      </v-card-title>
      <v-card-subtitle> </v-card-subtitle>
      <v-card-text class="white text--primary">
        <p>{{ video.description }}</p>

        <v-row justify="center">
          <v-dialog
            v-model="dialog"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                block
                class="mt-3 mb-3"
                large
                color="primary"
                outlined
                rounded
                dark
                v-bind="attrs"
                v-on="on"
              >
                Play
              </v-btn>
            </template>
            <v-card>
              <v-toolbar dark color="primary">
                <v-btn icon dark @click="dialog = false">
                  <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-toolbar-title>UK Aikikai {{ video.date }}</v-toolbar-title>
              </v-toolbar>
              <v-list three-line subheader>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>{{ video.title }}</v-list-item-title>
                    <v-list-item-subtitle>{{
                      video.description
                    }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
              <v-divider></v-divider>
              <v-list three-line subheader>
                <div
                  v-if="isVimeo"
                  class="d-flex fill-height justify-center mt-5"
                >
                  <iframe
                    v-if="dialog"
                    :src="video.player"
                    width="640"
                    height="359"
                    frameborder="0"
                    allow="autoplay; fullscreen"
                    allowfullscreen
                  ></iframe>
                </div>
                <div
                  v-if="isYouTube"
                  class="d-flex fill-height justify-center mt-5"
                >
                  <iframe
                    width="560"
                    height="315"
                    :src="video.player"
                    frameborder="0"
                    allow="autoplay; encrypted-media"
                    allowfullscreen
                  ></iframe>
                </div>
              </v-list>
            </v-card>
          </v-dialog>
        </v-row>
      </v-card-text>
    </v-card>
  </v-timeline-item>
</template>

<script>
export default {
  props: ["video"],
  data() {
    return {
      dialog: false
    };
  },
  computed: {
    isVimeo() {
      return this.video.player_type === "vimeo";
    },
    isYouTube() {
      return this.video.player_type === "youtube";
    }
  }
};
</script>
