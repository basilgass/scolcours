<template>
    <section>
        <div class="headline mt-10-mb-5" id="bases">Bases</div>
        <p>
            Une base est un couple de vecteur non colinéaires, notée \( \mathcal{B} = \left(
            \overrightarrow{e_1};\,\overrightarrow{e_2} \right) \)
        </p>
        <p v-show="!vital">
            Un vecteur dans une base se note \(\overrightarrow{v}=\begin{pmatrix}a_1\\a_2\end{pmatrix}\).
            \(a_1\) et \(a_2\) sont appelés des composantes et correspondent aux coefficients de la combinaison linéaire
            \(\overrightarrow{v} = a_1 \cdot \overrightarrow{e_1} + a_2 \cdot \overrightarrow{e_2}\).
        </p>

        <BaseAlert>
            \[\overrightarrow{v}=\begin{pmatrix}a_1\\a_2\end{pmatrix} \Longleftrightarrow \overrightarrow{v} = a_1 \cdot
            \overrightarrow{e_1} + a_2 \cdot \overrightarrow{e_2}\]
        </BaseAlert>

        <div class="title mt-10 mb-5 colinearite-vecteurs">Colinéarité de deux vecteurs</div>

        <p v-show="!vital">
            Deux vecteurs \( \overrightarrow{v} \) et \( \overrightarrow{w} \) sont colinéaires
            s'il existe un nombre \( \lambda \) tel que \( \overrightarrow{v} = \lambda \cdot \overrightarrow{w} \)
        </p>
        <BaseAlert class="text-center">
            \[ \overrightarrow{v} \text{ et } \overrightarrow{w} \text{ colinéaires } \Longleftrightarrow \overrightarrow{v} = \lambda \cdot  \overrightarrow{w} \]
        </BaseAlert>

        <sc-exemple v-show="!vital">
            \[ \overrightarrow{u}=\begin{pmatrix}4\\-1\end{pmatrix}
            \qquad
            \overrightarrow{v}=\begin{pmatrix}12\\-3\end{pmatrix}
            \qquad
            \overrightarrow{w}=\begin{pmatrix}-8\\3\end{pmatrix}\]

            <ScExempleEtape>1ère méthode: recherche d'un facteur</ScExempleEtape>

            <v-row>
                <v-col cols="12" md="6">
                    <ScExempleTexte>\( \overrightarrow{u} \) et \( \overrightarrow{v}\) sont-ils colinéaires ?</ScExempleTexte>
                    \[\Downarrow\]
                    \[ \frac{12}{4} \stackrel{?}{=} \frac{-3}{-1} \implies 3 \stackrel{?}{=} 3\]
                    \[\Downarrow\]
                    <ScExempleTexte>Les deux valeurs sont égales</ScExempleTexte>
                    \[\Downarrow\]
                    <sc-exemple-texte>\( \overrightarrow{u} \) et \( \overrightarrow{v} \) sont colinéaires</sc-exemple-texte>
                </v-col>
                <v-col cols="12" md="6">
                    <ScExempleTexte>\( \overrightarrow{u} \) et \( \overrightarrow{w}\) sont-ils colinéaires ?</ScExempleTexte>
                    \[\Downarrow\]
                    \[ \frac{-8}{4} \stackrel{?}{=} \frac{3}{-1} \implies -2 \stackrel{?}{=} -3\]
                    \[\Downarrow\]
                    <ScExempleTexte>Les deux valeurs ne sont pas égales</ScExempleTexte>
                    \[\Downarrow\]
                    <sc-exemple-texte>\( \overrightarrow{u} \) et \( \overrightarrow{v} \) ne sont pas colinéaires</sc-exemple-texte>
                </v-col>
            </v-row>

            <sc-exemple-etape>2ème méthode: déterminant</sc-exemple-etape>
            <v-row>
                <v-col cols="12" md="6">
                    <ScExempleTexte>\( \overrightarrow{u} \) et \( \overrightarrow{v}\) sont-ils colinéaires ?</ScExempleTexte>
                    \[\Downarrow\]
                    \[ \begin{vmatrix}4 & 12 \\ -1 & -3\end{vmatrix} = 4\cdot (-3) - (-1)\cdot 12 = 0\]
                    \[\Downarrow\]
                    <ScExempleTexte>Le déterminant est nul</ScExempleTexte>
                    \[\Downarrow\]
                    <sc-exemple-texte>\( \overrightarrow{u} \) et \( \overrightarrow{v} \) sont colinéaires</sc-exemple-texte>
                </v-col>
                <v-col cols="12" md="6">
                    <ScExempleTexte>\( \overrightarrow{u} \) et \( \overrightarrow{w}\) sont-ils colinéaires ?</ScExempleTexte>
                    \[\Downarrow\]
                    \[ \begin{vmatrix}4 & -8 \\ -1 & 3\end{vmatrix} = 4\cdot 3 - (-1)\cdot(-8) = 4\]
                    \[\Downarrow\]
                    <ScExempleTexte>Le déterminant est non nul</ScExempleTexte>
                    \[\Downarrow\]
                    <sc-exemple-texte>\( \overrightarrow{u} \) et \( \overrightarrow{v} \) ne sont pas colinéaires</sc-exemple-texte>
                </v-col>
            </v-row>


        </sc-exemple>

    </section>
</template>
<script>

    import BaseAlert from "../../../../../components/BaseAlert"
    import ScExemple from "../../../../../components/ScExemple";
    import ScExempleEtape from "../../../../../components/ScExempleEtape";
    import ScExempleTexte from "../../../../../components/ScExempleTexte";

    export default {
        name: 'GeometrieVectorielleBase',
        components: {ScExempleTexte, ScExempleEtape, ScExemple, BaseAlert},
        props: {
            chaslesCheck: {},
            chaslesNouveau: {},
            vital: {type: Boolean, default: true}
        }
    }
</script>