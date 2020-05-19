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
        name: "equations-2eme-degre",
        components: {
            ScolcoursTheorie: () => (import(`../theme`))
        },
        data() {
            return {
                theme: 'equations-2eme-degre',
                titre: 'Equations du 2ème degré',
                chapitres: [
                    {
                        "titre": "Factorisation",
                        "code": "1-factorisation"
                    },
                    {
                        "titre": "Résolution sans la formule",
                        "code": "2-sans-formule"
                    },
                    {
                        "titre": "Résolution avec la formule",
                        "code": "3-avec-formule"
                    }
                ]
            }
        },
    }
</script>

<style scoped>

</style>