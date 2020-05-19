<template>
    <div>
        <scolcours-theorie
                :chapitres="chapitres"
                :exercices="exercices"
                :theme="theme"
                :titre="titre"
        ></scolcours-theorie>
    </div>
</template>

<script>
    /*import ScolcoursTheorie from "../theme";*/

    export default {
        name: "geometrie-vectorielle",
        components: {
            ScolcoursTheorie: () => (import(`../theme`))
        },
        data() {
            return {
                theme: 'geometrie-vectorielle',
                titre: 'Géométrie vectorielle',
                chapitres: [
                    {
                        "titre": "Vecteurs",
                        "code": "1-vecteurs"
                    },
                    {
                        "titre": "Base de vecteurs",
                        "code": "2-base"
                    },
                    {
                        "titre": "Repères",
                        "code": "3-reperes"
                    },
                    {
                        "titre": "Norme",
                        "code": "4-norme"
                    },
                    {
                        "titre": "Produit scalaire",
                        "code": "5-scalaire"
                    }
                ],
                exercices: [
                    '3.12', '4.07', '4.10', '4.18'
                ]
            }
        }
    }
</script>

<style scoped>

</style>