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

            >
                图书分类
            </v-subheader>
            <template v-for="(item, index) in items">


                <v-divider
                        :key="index"
                ></v-divider>

                <v-list-tile
                        :key="item.title"
                        @click=""
                >

                    <v-list-tile-content >
                        <v-list-tile-title v-html="item.title" ></v-list-tile-title>
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
                    {
                        title: '教育',
                    },
                    {
                        title: '小说 ',
                    },
                    {
                        title: '文艺',
                    },
                    {
                        title: '青春文学',
                    },
                    {
                        title: '童书',
                    },
                    {
                        title: '人文社科',
                    },
                    {
                        title: '经管',
                    },
                    {
                        title: '励志',
                    },
                    {
                        title: '生活',
                    },
                    {
                        title: '英文原版',
                    },
                    {
                        title: '科幻',
                    },
                    {
                        title: '期刊影像',
                    },
                    {
                        title: 'duangduang出品',
                    },
                    {
                        title: '创意文具',
                    },
                ],
            }
        }
    }
</script>