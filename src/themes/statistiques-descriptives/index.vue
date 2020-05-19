<template>
    <div>
        <scolcours-theorie
                :chapitres="chapitres"
                :theme="theme"
                :titre="titre"
        ></scolcours-theorie>
    </div>
</template>

<script>
    /*import ScolcoursTheorie from "../theme";*/

    export default {
        name: "statistiques-descriptives",
        components: {
            ScolcoursTheorie: () => (import(`../theme`))
        },
        data() {
            return {
                theme: 'statistiques-descriptives',
                titre: 'Statistiques descriptives',
                chapitres: [
                    {
                        "titre": "Introduction aux statistiques",
                        "code": "1-introduction"
                    },
                    {
                        "titre": "Variable qualitative",
                        "code": "2-qualitative"
                    },
                    {
                        "titre": "Variable quantitative",
                        "code": "3-quantitative"
                    },
                    {
                        "titre": "Fréquences cumulées",
                        "code": "4-frequences-cumulees"
                    },
                    {
                        "titre": "Quelques graphiques",
                        "code": "5-graphiques"
                    }
                ]
            }
        },
    }
</script>

<style scoped>

</style>