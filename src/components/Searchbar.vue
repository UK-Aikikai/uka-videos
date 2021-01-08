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
                        v-model="search"
                ></v-text-field>

            </v-toolbar>
        </v-app-bar>

    </nav>
</template>

<script>
    export default {
        computed: {
            search: {
                get () {
                    return this.$store.state.search
                },
                set (search) {
                    this.$store.commit('updateSearchKeyword', search)
                }
            }
        }
    }
</script>
