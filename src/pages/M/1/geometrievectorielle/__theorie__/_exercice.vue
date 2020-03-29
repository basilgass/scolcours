<template>
    <div class="exercice">
        <h1>Exercice {{ p }}</h1>

        <div
                ref="exercicewrapper"
                v-html="contenu"
        ></div>
    </div>
</template>

<script>
    import axios from "axios";
    import renderMathInElement from "katex/dist/contrib/auto-render.min";

    export default {
        name: "index",
        data: function(){
            return {
                contenu:'Something neat'
            }
        },
        computed: {
            p: function(){
                return this.$route.params.exercice
            }
        },
        mounted() {
            let that = this,
                ex = this.$route.params.exercice;

            axios({
                method: 'post',
                url: '/crud/exercice.php',
                data: {
                    crud: 'r',
                    annee: '1M',
                    chapitre: '3 - Géométrie vectorielle',
                    exercice: ex
                }
            }).then(response => {
                if(response.data.contenu==='false' ||response.data.contenu===false){
                    console.log(response.data.contenu);
                    that.contenu = `Il n'y a aucun exercice correspondant!`
                }else {
                    that.contenu = response.data.contenu;
                }
            }).catch(() => {
                that.contenu = `Il y a un problème avec la recherche d'exercice ! \\[x-3\\]`;
            }).finally(()=>{
                renderMathInElement(that.$el);
            });
        }
    }
</script>

<style scoped>

</style>