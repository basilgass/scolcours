<template>
    <v-timeline
            :dense=$vuetify.breakpoint.smAndDown
    >
        <v-timeline-item
                v-for="(T,id) in timeline" :key="id"
                :icon="`mdi-${T.icon}`"
                :color=T.color
        >
            <template v-slot:opposite>
                <span :class="`headline font-weight-bold`" v-text="T.delai"></span>
            </template>

            <v-card class="elevation-2">
                <v-card-title>
                    <h2 class="headline">{{T.titre}}</h2>
                </v-card-title>
                <v-card-subtitle>
                    <div class="overline">Délai: {{T.delai}}</div>
                </v-card-subtitle>
                <v-card-text v-html="T.texte"></v-card-text>
                <v-card-actions v-if="T.actions">
                    <v-btn :to="T.actions.to" append>{{T.actions.label}}</v-btn>
                </v-card-actions>
            </v-card>
        </v-timeline-item>
    </v-timeline>
</template>
<script>
    import renderMathInElement from "katex/dist/contrib/auto-render.min";
    export default {
        name: 'ScPlanningTimeLine',
        props: {
            timeline: {}
        },
        mounted() {
            console.log(this.$el);
            renderMathInElement(this.$el);
        }
    }
</script>
