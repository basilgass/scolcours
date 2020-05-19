<template>
    <section id="admin-index">
        <v-container>
            <v-row>
                <v-col>
                    <v-textarea outlined v-model="exercice"></v-textarea>
                </v-col>
                <v-col ref="exerciceOutput">
                    {{exercice}}
                </v-col>
            </v-row>
        </v-container>
    </section>
</template>

<script>
    import axios from 'axios'
    import renderMathInElement from "katex/dist/contrib/auto-render.min";

    axios({
        method: 'post',
        url: 'crud/themes.php',
        crossOrigin: true,
        data: {
            'crud': 'r'
        }
    }).then(response => {
        console.log(response.data);
        /*

            let myRoutes = [];
            for(let r of response.data.result){
                myRoutes.push({
                    name: r.code,
                    shortcut: r.raccourci
                })
            }

            for (let r of myRoutes) {
                if (r.shortcut !== '') {
                    routes.push(
                        {
                            name: `${r.name}-shortcut`,
                            path: `/${r.shortcut}`,
                            redirect: `/${r.name}`
                        }
                    );
                }
                routes.push(
                    {
                        name: `${r.name}`,
                        path: `/${r.name}/:code?`,
                        component: () => import(`@/themes/${r.name}/index.vue`),
                    }
                );
            }
            routes.push({
                name: 'page-erreur',
                path: '*',
                component: () => import('@/pages/oups.vue')
            })
        */
    }).catch(e => {
        console.log(e);
    });

    export default {
        name: "admin-page",
        data() {
            return {
                exercice: ''
            }
        },
        watch: {
            exercice(value) {
                this.$refs['exerciceOutput'].innerHTML = value;
                renderMathInElement(this.$refs['exerciceOutput']);
            }
        },
    }
</script>

<style scoped>

</style>