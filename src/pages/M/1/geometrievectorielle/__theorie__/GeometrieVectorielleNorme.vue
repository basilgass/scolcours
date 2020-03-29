<template>
    <section>
        <div class="headline mt-10-mb-5" id="norme">Norme et produit scalaire</div>

        <div class="title mt-5 mb-5">Définitions</div>
        <sc-definitions :definitions="definitions"></sc-definitions>

        <div class="title mt-10 mb-5">Propriétés</div>
        Comme la norme est une distance, on a les propriétés suivantes:

        <sc-exemple width="600px">
            <sc-exemple-etape v-show="!vital" class="text-center">Une distance est positive</sc-exemple-etape>
            <sc-exemple-deux-colonnes>
                <template v-slot:col1>
                    \[ \delta(A;B)\geq0 \]
                </template>
                <template v-slot:col2>
                    \[ \Vert \overrightarrow{AB} \Vert \geq 0\]
                </template>
            </sc-exemple-deux-colonnes>

            <sc-exemple-etape v-show="!vital" center :mt="false">Distance nulle</sc-exemple-etape>
            <sc-exemple-deux-colonnes>
                <template v-slot:col1>
                    \[\delta(A;B)=0\Longleftrightarrow A = B\]
                </template>
                <template v-slot:col2>
                    \[ \Vert \overrightarrow{AB} \Vert = 0 \Longleftrightarrow \overrightarrow{AB} = \overrightarrow{0}\]
                </template>
            </sc-exemple-deux-colonnes>

            <sc-exemple-etape v-show="!vital" center :mt="false">Distance de A à B ou de B à A (symétrie)</sc-exemple-etape>
            <sc-exemple-deux-colonnes>
                <template v-slot:col1>
                    \[\delta(A;B)=\delta(B;A)\]
                </template>
                <template v-slot:col2>
                    \[ \Vert \overrightarrow{AB} \Vert = \Vert \overrightarrow{BA} \Vert \]
                </template>
            </sc-exemple-deux-colonnes>

            <sc-exemple-etape v-show="!vital" center :mt="false">
                Inégalité triangulaire
                <template v-slot:commentaire>Aller d'un point A à un point C en passant par un point B est forcément au moins aussi grand que d'aller directement de A à C.</template>
            </sc-exemple-etape>
            <sc-exemple-deux-colonnes>
                <template v-slot:col1>
                    \[\delta(A;C)\leq\delta(A;B)+ \delta(B;C)\]
                </template>
                <template v-slot:col2>
                    \[ \Vert \overrightarrow{AB} \Vert \leq \Vert \overrightarrow{AB} \Vert + \Vert \overrightarrow{BC} \Vert\]
                </template>
            </sc-exemple-deux-colonnes>

            <sc-exemple-etape v-show="!vital" center :mt="false">
                Norme du produit d'un vecteur par un scalaire (un nombre)
                <template v-slot:commentaire>
                    <p>Si on double la taille d'un vecteur, sa norme sera aussi doublée !<br/>
                    On peut multiplier un vecteur par un nombre négatif. Son sens change.<br/>
                        Par contre, la norme reste positive. C'est pour cela qu'il y a une <u>valeur absolue</u>.</p>
                </template>
            </sc-exemple-etape>
            <sc-exemple-texte>
                \[ \Vert k\cdot \overrightarrow{AB} \Vert = \vert k \vert \Vert \overrightarrow{AB} \Vert \]
            </sc-exemple-texte>
        </sc-exemple>

        <div class="title m-10 mb-5">Théorème</div>
        <p v-show="!vital">La norme d'une vecteur \( \begin{pmatrix}a_1 \\ a_2 \end{pmatrix} \) relativement à une base orthonormée
            vaut \( \sqrt{a_1^2+a_2^2} \)</p>
        <ScTheoreme>
            \[ \Vert \overrightarrow{a} \Vert = \sqrt{a_1^2+a_2^2} \]
        </ScTheoreme>

        <div class="title m-10 mb-5">Vecteur unitaire</div>
        <p v-show="!vital">Si un vecteur \( \overrightarrow{a} \) est non nul, on peut calculer les composantes d'un vecteur unitaire
            colinéaire.</p>
        <base-alert>
            \[ \overrightarrow{u} = \pm \frac{\overrightarrow{a}}{\Vert \overrightarrow{a} \Vert} \]
        </base-alert>

        <div class="title m-10 mb-5">Produit scalaire</div>
        A suivre...
    </section>
</template>
<script>
    import ScDefinitions from "../../../../../components/ScDefinitions";
    import ScExemple from "../../../../../components/ScExemple";
    import ScExempleEtape from "../../../../../components/ScExempleEtape";
    import ScExempleTexte from "../../../../../components/ScExempleTexte";
    import ScExempleDeuxColonnes from "../../../../../components/ScExempleTexteDeuxColonnes";
    import ScTheoreme from "../../../../../components/ScTheoreme";
    import BaseAlert from "../../../../../components/BaseAlert";

    export default {
        name: 'GeometrieVectorielleNorme',
        components: {
            BaseAlert,
            ScTheoreme,
            ScExempleTexte, ScExempleDeuxColonnes, ScExempleEtape, ScExemple, ScDefinitions},
        props: {
            vital: {type: Boolean, default: true},
        },
        data: function(){
            return {
                definitions: [
                    {
                        nom: 'Norme',
                        definition: `La norme d'un vecteur \\( \\overrightarrow{a} \\),
                            notée \\( \\Vert \\overrightarrow{a} \\Vert \\)
                            est la longueur d'un représentant du vecteur \\( \\overrightarrow{a} \\).`
                    },
                    {
                        nom: 'Unitaire',
                        definition: `Un vecteur est unitaire si sa norme vaut un.`
                    },
                    {
                        nom: 'Orthogonal',
                        definition: 'Deux vecteurs non nuls dont les directions sont perpendiculaires sont orthogonaux.'
                    },
                    {
                        nom: 'Orthonormé',
                        definition: `Une base \\(\\mathcal{B}=\\left( \\overrightarrow{e_1} ; \\overrightarrow{e_2} \\right) \\)
                            est orthonormée si les vecteurs \\(\\overrightarrow{e_1}\\) et \\(\\overrightarrow{e_2}\\) sont orthogonaux
                            et unitaires.`
                    }
                ]
            }
        }
    }
</script>