<template>
    <v-breadcrumbs :items="itemsArray" class="ml-0 pl-0">
        <template v-slot:item = "{ item }">
            <v-breadcrumbs-item
                :href="item.href"
                :disabled="item.disabled"
            >
                <span v-html="item.text"></span>
            </v-breadcrumbs-item>
        </template>
    </v-breadcrumbs>
</template>
<script>
    export default {
        name: 'sc-breadcrumbs',
        props: {
            items: {type: String, default: ''}
        },
        computed: {
            itemsArray: function(){
                let pages;
                if(this.items===''){
                    pages = window.location.pathname.slice(1).split('/')
                }else{
                    pages = this.items.split(',')
                }

                let arr = [{
                        text: 'Accueil',
                        disable: false,
                        href:'/'
                    }],
                    page = [],
                    href = [''],
                    name = '';

                for(let i=0; i<pages.length; i++){
                    page = pages[i].split('@');
                    name = page[0];
                    if(name==='1' || name==='2' || name==='3'){
                        name = (name==='1')?'1ère année':`${name}<sup>ème</sup> année`;
                    }
                    href.push(page.length===2?page[1]:page[0]);
                    arr.push({
                        text: name,
                        disabled: i===(pages.length-1),
                        href: href.join('/')
                    });

                }

                return arr;
            }
        }
    }
</script>