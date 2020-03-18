<template>
    <v-navigation-drawer
            right
            clipped
            app
    >
        <v-list dense>
            <v-list-item-group>
                <v-list-item v-for="linkItem in linkItems" :key="linkItem.id">
                    <a v-if="!linkItem.subtitle" @click="$vuetify.goTo(linkItem.id)">{{linkItem.text}}</a>
                    <a v-else class="ml-2 caption"  @click="$vuetify.goTo(linkItem.id)">{{linkItem.text}}</a>
                </v-list-item>
            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
</template>
<script>
    export default {
        name: 'sc-toc-drawer',
        data: function(){
            return {
                linkItems: {}
            }
        },
        mounted: function () {
            let links = [],n=1
            this.$parent.$el.querySelectorAll(".headline,.title").forEach(function (el) {
                el.id = `toc-${n}`;
                links.push({
                    id: '#'+el.id,
                    text: el.innerText,
                    subtitle: el.classList.contains('title')
                })
                n++;
            })

            this.linkItems = links;
        }
    }
</script>