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
        name: "trigonometrie",
        components: {
            ScolcoursTheorie: () => (import(`../theme`))
        },
        data() {
            return {
                theme: 'trigonometrie',
                titre: 'Trigonométrie',
                chapitres: [
                    {
                        "titre": "Mesure des angles",
                        "code": "1-mesure"
                    },
                    {
                        "titre": "Triangle rectangle",
                        "code": "2-rectangle"
                    },
                    {
                        "titre": "Cercle trigonométrique",
                        "code": "3-cercle"
                    },
                    {
                        "titre": "Triangle quelconque",
                        "code": "4-quelconque"
                    }
                ],
                exercices: [
                    '1.1', '1.2', '1.3'
                ]
            }
        },
    }
</script>

<style scoped>

</style>