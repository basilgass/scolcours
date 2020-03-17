<template>
    <div class="template-wrapper">
        <div class="3M">3ème maturité</div>

        <ul v-if="posts && posts.length">
            <li v-for="post of posts" :key="post.id">
                <p><strong>{{post.fr}}</strong></p>
                <p>{{post.traduction}}</p>
            </li>
        </ul>

        <ul v-if="errors && errors.length">
            <li v-for="error of errors" :key="error.id">
                {{error.message}}
            </li>
        </ul>
    </div>
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
            axios.get('/crud/get.php?table=traductions_ang')
            .then(response=>{
                console.log(response.data)
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