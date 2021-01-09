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

        <VideoModal play-btn="Play Video" :video="video" />
      </v-card-text>
    </v-card>
  </v-timeline-item>
</template>

<script>
import VideoModal from "@/components/VideoModal";

export default {
  props: {
    video: Object
  },
  computed: {
    getModalButtonName: function() {
      return "Play";
    }
  },
  components: {
    VideoModal
  }
};
</script>
