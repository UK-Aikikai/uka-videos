<template>
    <v-app class="grey lighten-4">

        <Searchbar />

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
    // import VideoTimeLineItem from "./components/VideoTimeLineItem.vue"
    import VideoTimeLineItem from "@/components/VideoTimeLineItem";
    import Searchbar from "@/components/Searchbar";

    export default {
        name: "App",

        components: {
            VideoTimeLineItem,
            Searchbar
        },

        data: () => ({
            videos: [],
            filtered: [],
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

                    this.videos.reverse();
                });
        },
        mounted() {

        }
    };
</script>
