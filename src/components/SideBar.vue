<template>

    <v-card>
        <!--<v-toolbar color="cyan" dark>-->
        <!--<v-toolbar-side-icon></v-toolbar-side-icon>-->

        <!--<v-toolbar-title>Inbox</v-toolbar-title>-->

        <!--<v-spacer></v-spacer>-->

        <!--<v-btn icon>-->
        <!--<v-icon>search</v-icon>-->
        <!--</v-btn>-->
        <!--</v-toolbar>-->

        <v-list >
            <v-subheader
                    :key="item.header"
            >
                {{ item.header }}
            </v-subheader>
            <template v-for="(item, index) in items">


                <v-divider
                        v-else-if="item.divider"
                        :key="index"
                ></v-divider>

                <v-list-tile
                        v-else
                        :key="item.title"
                        avatar
                        @click=""
                >

                    <v-list-tile-content>
                        <v-list-tile-title v-html="item.title"></v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </template>
        </v-list>
    </v-card>

</template>
<script>
    export default {
        data() {
            return {
                items: [
                    {header: '图书分类'},
                    {
                        title: '教育',
                    },
                    {divider: true, inset: true},
                    {
                        title: '小说 ',
                    },
                    {divider: true, inset: true},
                    {
                        title: 'Oui oui',
                    }
                ]
            }
        }
    }
</script>