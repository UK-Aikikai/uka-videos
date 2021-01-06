<template>
    <v-timeline-item>
        <template v-slot:icon>
            <v-avatar>
                <span>{{ video.date }}</span>
            </v-avatar>
        </template>
        <template v-slot:opposite>
            <span>{{ video.title }}</span>
        </template>
        <v-card class="elevation-2">
            <v-card-title class="headline">

            </v-card-title>
            <v-card-subtitle>
                Title
            </v-card-subtitle>
            <v-card-text>
                Description
            </v-card-text>
        </v-card>
    </v-timeline-item>
</template>

<script>
    // import moment from "moment";
    export default {
        props: ["video"],
        methods: {
          logs() {
              console.log(this.video);
              return 'stuff';
          }
        },
        computed: {
            launchDate() {
                return 'n/a';
            },
        },
    };
</script>
