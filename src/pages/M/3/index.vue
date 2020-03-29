<template>
        <v-container>
            <sc-annee-titre annee="3"></sc-annee-titre>
        </v-container>

</template>

<script>
    import axios from 'axios';
    import ScAnneeTitre from "../../../components/ScAnneeTitre";

    export default {
        name: "m-3",
        components: {ScAnneeTitre},
        data: function() {
            return {
                posts: [],
                errors: []
            }
        },
        created: function(){
            axios.get('/crud/get.php?table=users')
            .then(response=>{
                alert('SUCCESS');
                console.log(response.data);
                this.posts = response.data.results;
            })
            .catch(e => {
                this.errors.push(e)
            })
        }
    }
</script>

<style scoped>

</style>