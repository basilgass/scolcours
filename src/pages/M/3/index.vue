<template>
        <v-container>
            <v-row>
                <v-col><h2 class="display-1">Ecole de maturité, 3ème année</h2></v-col>
            </v-row>
        </v-container>

</template>

<script>
    import axios from 'axios';

    export default {
        name: "m-3",
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