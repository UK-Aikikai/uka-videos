<template>
    <v-app class="grey lighten-4">

        <Searchbar />

        <v-main>
            <v-container>
                <v-timeline v-if="this.$store.getters.getVideos.length > 0">
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
            axios.get('https://raw.githubusercontent.com/pavlakis/api-ukaikikai/master/videos.json')
                .then(response => {

                    for (const [key, object] of Object.entries(response.data)) {
                        let video = object[0];
                        video.date = `${key}`;
                        video.search = video.date + ', ' + video.title + ', ' + video.description;
                        // console.log(video);
                        this.$store.commit('addVideo', video);
                        this.$store.commit('reverseVideoOrder');
                    }


                });
        },
        mounted() {

        }
    };
</script>
