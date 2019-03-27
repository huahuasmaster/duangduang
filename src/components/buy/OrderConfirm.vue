<template>
    <v-item-group>
        <v-container grid-list-md>
            <v-layout wrap>
                <v-flex
                        v-for="n in 3"
                        :key="n"
                        xs12
                        md2
                >
                    <v-item>
                        <!--<v-card-->
                                <!--slot-scope="{ active, toggle }"-->
                                <!--:color="active ? 'primary' : ''"-->
                                <!--class="d-flex align-center"-->
                                <!--dark-->
                                <!--height="200"-->
                                <!--@click="toggle"-->
                        <!--&gt;-->
                            <!--<v-scroll-y-transition>-->
                                <!--<div-->
                                        <!--v-if="active"-->
                                        <!--class="display-3 text-xs-center"-->
                                <!--&gt;-->
                                    <!--Active-->
                                <!--</div>-->
                            <!--</v-scroll-y-transition>-->
                        <!--</v-card>-->
                        <AddressCard></AddressCard>
                    </v-item>
                </v-flex>
            </v-layout>
        </v-container>
    </v-item-group>
</template>
<script>
    import AddressCard from "./AddressCard";
    export default {
        components: {AddressCard}
    }
</script>