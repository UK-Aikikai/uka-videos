<template>
    <nav>
        <v-app-bar flat app>
            <v-toolbar flat>
                <v-toolbar-title>
                    <span>UK Aikikai </span>
                    <span class="font-weight-light">Videos</span>
                </v-toolbar-title>

                <v-spacer></v-spacer>

                <v-text-field
                        hide-details
                        prepend-icon="mdi-magnify"
                        single-line
                ></v-text-field>

                <v-btn text>
                    Filter
                </v-btn>
                <v-btn text>
                    Reset
                </v-btn>

            </v-toolbar>
        </v-app-bar>

    </nav>
</template>

<script>
    // v-on:keyup="model.filterTimeline"
    export default {

    }
</script>
