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

            </v-card-title>
            <v-card-subtitle>
                {{ video.title }}
            </v-card-subtitle>
            <v-card-text class="white text--primary">
                <p>An image placeholder...</p>
                <v-btn
                        :color="btnColour()"
                        class="mx-0"
                        outlined
                >
                    Play
                </v-btn>
            </v-card-text>
        </v-card>
    </v-timeline-item>
</template>

<script>
    // import moment from "moment";
    export default {
        props: ["video"],
        methods: {
            btnColour() {
                return 'green lighten-1';
            },
        },
        computed: {
        },
    };
</script>
