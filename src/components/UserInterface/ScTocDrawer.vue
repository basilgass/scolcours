<template>
    <div>
        <v-navigation-drawer
                right
                clipped
                app
                v-model="menuVisible"
        >

            <v-list nav>
                <v-list-item>
                    <v-list-item-content>
                        <v-list-item-title class="title">
                            {{ this.pageTitle }}
                        </v-list-item-title>
                        <v-list-item-subtitle>
                            {{ this.pageSubtitle }}
                        </v-list-item-subtitle>
                    </v-list-item-content>
                </v-list-item>
                <v-divider></v-divider>

                <v-list-item-group>
                    <v-list-item
                            v-for="linkItem in linkItems"
                            :key="linkItem.id"
                            v-bind:class="{'mt-5':!linkItem.subtitle}"
                            style="min-height: 20px">
                        <span v-if="!linkItem.subtitle" @click="goto(linkItem.id, $event)">{{linkItem.text}}</span>
                        <span v-else class="ml-4 caption" @click="goto(linkItem.id, $event)">{{linkItem.text}}</span>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
        <v-btn color="light-green"
               absolute
               small
               bottom
               right
               fab
               fixed
               style="bottom: 30px;"
               v-show="!menuVisible"
               @click="menuVisible=!menuVisible"
        >
            <v-icon>mdi-menu</v-icon>
        </v-btn>
    </div>
</template>
<script>
    // <!--mobile-break-point="300px"-->
    export default {
        name: 'sc-toc-drawer',
        data: function () {
            return {
                pageTitle: 'ScolCours',
                pageSubtitle: 'Site de mathématiques',
                linkItems: {},
                menuVisible: null,
            }
        },
        methods: {
            update: function () {
                // Title
                let navTitle = this.$parent.$el.querySelector('.nav-toc-page'),
                    navSubTitle = this.$parent.$el.querySelector('.nav-toc-page-subtitle');

                this.pageTitle = navTitle===null?'':navTitle.innerText;
                this.pageSubtitle = navSubTitle===null?'':navSubTitle.innerText;

                // Links in the page
                let links = [], n = 1;
                this.$parent.$el.querySelectorAll(".nav-toc-1,.nav-toc-2").forEach(function (el) {
                    if (!el.classList.contains('no-toc')) {
                        el.id = el.id === '' ? `toc-${n}` : el.id;
                        links.push({
                            id: '#' + el.id,
                            text: el.innerText,
                            subtitle: el.classList.contains('nav-toc-2')
                        });
                        n++;
                    }
                });
                this.linkItems = links;
            },
            goto: function(link, event){
                // Do not apply the active state to the button
                event.stopPropagation();
                // Scroll to the end
                this.$vuetify.goTo(link);
                // Hide the menu
                this.menuVisible = null;
            }
        },
        mounted: function () {
            this.update();
        }
    }
</script>
