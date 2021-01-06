<template>
    <v-app>
        <v-app-bar app color="primary" dark>
            <div class="d-flex align-center">
                <h2> UKA Videos </h2>
            </div>

            <v-spacer></v-spacer>

        </v-app-bar>

        <v-main>
            <v-container>
                <v-timeline v-if="videos.length > 0">
                    <VideoTimeLineItem
                            v-for="video in videos"
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
    // import LaunchTimelineItem from "./components/LaunchTimeLineItem.vue"
    import VideoTimeLineItem from "./components/VideoTimeLineItem.vue"

    export default {
        name: "App",

        components: {
            VideoTimeLineItem
        },

        data: () => ({
            videos: [],
        }),

        created() {
            axios.get('https://raw.githubusercontent.com/pavlakis/api-ukaikikai/master/videos.json')
                .then(response => {

                    for (const [key, object] of Object.entries(response.data)) {
                        let video = object[0];
                        video.date = `${key}`;
                        // console.log(video);
                        this.videos.push(video);
                    }
                });
        },
        mounted() {

        }
    };
</script>
