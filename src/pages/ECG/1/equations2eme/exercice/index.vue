<template>
    <section>
        <h1 class="display-1">Exercices</h1>

        <div class="mb-10" v-for="(ex, idx) of exercices" :key="idx">
            <h1 class="title">{{ex.no}}</h1>

            <div class="ml-5">
                <p class="subtitle-2">Inconnues</p>
                <v-simple-table>
                    <tr class="ml-10" v-for="(inc, key, idx2) of ex.inconnues" :key="idx2" v-html="inconnue(key, inc)"></tr>
                </v-simple-table>

                <p class="subtitle-2">Equation </p>
                <p class="katex-left ml-10" v-html="katex(ex.equation)"></p>
            </div>

        </div>
    </section>
</template>

<script>
    import katex from "katex";

    export default {
        name: "index",
        data: function(){
            return {
                exercices: [
                    {
                        no: '6.7',
                        inconnues: {
                                x: 'nombre de jours',
                            },
                        equation: '(30x)^2+(40x)^2=250^2'

                    },
                    {
                        no: '6.9',
                        inconnues: {
                            '2x': 'Premier nombre pair',
                            '2x+2': 'Deuxième nombre pair',
                            '2x+4': 'Troisième nombre pair'
                        },
                        equation: '(2x)^2+(2x+2)^2+(2x+4)^2=776'
                    },
                    {
                        no:'6.10',
                        inconnues: {
                            x: 'Nombre d\'objets',
                            '\\dfrac{672}{x}': 'Prix d\'un objet'
                        },
                        equation: '\\left(\\frac{672}{x}-4\\right)\\cdot\\left(x+3\\right)=672'
                    },
                    {
                        no: '6.11',
                        inconnues: {
                            x: 'nombre de noix',
                            'x-2': 'nombre d\'enfants'
                        },
                        equation: 'x\\cdot(x-2)=840'
                    },
                    {
                        no: '6.12',
                        inconnues: {
                            x: 'nombre de garçons',
                            '7-x': 'nombre de filles',
                            '\\dfrac{72}{x}': 'Nombre de noix par garçon',
                            '\\dfrac{72}{7-x}': 'Nombre de noix par fille',
                        },
                        equation: '\\frac{72}{x}+6=\\frac{72}{7-x}'
                    },
                    {
                        no: '6.14',
                        inconnues: {
                            x: 'nombre de pommes achetées',
                            'x-5': 'nombre de pommes vendues',
                            '\\dfrac{756}{x}': 'prix d\'achat d\'une pomme'
                        },
                        equation: '\\left(\\frac{756}{x}+4\\right)\\cdot\\left(x-5\\right)=756+58'
                    },
                    {
                        no: '6.15',
                        inconnues: {
                            x: 'nombre de personnes',
                            '\\dfrac{400}{x}': 'Montant par personne',
                            '\\dfrac{400}{x-4}': 'Montant par personne après les 4 départs.'
                        },
                        equation: '\\frac{400}{x-4}=\\frac{400}{x}+5'
                    },
                    {
                        no: '6.16',
                        inconnues: {
                            x: 'Nombre de lapins achetés',
                            'x-5': 'Nombre de lapins vendus',
                            '\\dfrac{750}{x}': 'Prix d\'achat par lapin'
                        },
                        equation: '\\left(x-5\\right)\\left(\\frac{750}{x}+6\\right)=750-30'
                    }
                ]
            }
        },
        methods: {
            katex: function(str, display=true){
                return katex.renderToString(str, {displayMode: display});
            },
            inconnue: function(inc, descr){
                return `<td style="width: 100px">${this.katex(inc, false)}</td><td style="width: 30px">${this.katex('=', false)}</td><td>${descr}</td>`;
            }
        },
        mounted() {
        }
    }
</script>

<style scoped>

</style>