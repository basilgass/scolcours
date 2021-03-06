<template>
    <section>
        <sc-titre-section id="base">Base</sc-titre-section>
        <p>
            Une base est un couple de vecteurs non colinéaires, notée \( \mathcal{B} = \left(
            \overrightarrow{e_1};\,\overrightarrow{e_2} \right) \)
        </p>
        <p>
            Un vecteur dans une base se note \(\overrightarrow{v}=\begin{pmatrix}a_1\\a_2\end{pmatrix}\).
            \(a_1\) et \(a_2\) sont appelés des composantes et correspondent aux coefficients de la combinaison linéaire
            \(\overrightarrow{v} = a_1 \cdot \overrightarrow{e_1} + a_2 \cdot \overrightarrow{e_2}\).
        </p>

        <sc-boite theoreme>
            \[\overrightarrow{v}=\begin{pmatrix}a_1\\a_2\end{pmatrix} \Longleftrightarrow \overrightarrow{v} = a_1 \cdot
            \overrightarrow{e_1} + a_2 \cdot \overrightarrow{e_2}\]
        </sc-boite>

        <sc-titre-partie divider id="colinearite-vecteurs">Colinéarité de deux vecteurs</sc-titre-partie>
        <p>
            Deux vecteurs \( \overrightarrow{v} \) et \( \overrightarrow{w} \) sont colinéaires
            s'il existe un nombre \( \lambda \) tel que \( \overrightarrow{v} = \lambda \cdot \overrightarrow{w} \)
        </p>
        <sc-boite class="text-center" theoreme>
            \[ \overrightarrow{v} \text{ et } \overrightarrow{w} \text{ colinéaires } \Longleftrightarrow \overrightarrow{v} = \lambda \cdot  \overrightarrow{w} \]
        </sc-boite>

        <sc-boite processus>
            <sc-boite-titre center>Montrer que des vecteurs sont colinéaires</sc-boite-titre>
            \[ \overrightarrow{u}=\begin{pmatrix}4\\-1\end{pmatrix}
            \qquad
            \overrightarrow{v}=\begin{pmatrix}12\\-3\end{pmatrix}
            \qquad
            \overrightarrow{w}=\begin{pmatrix}-8\\3\end{pmatrix}\]

            <ScBoiteEtape>1ère méthode: recherche d'un facteur</ScBoiteEtape>

            <v-row>
                <v-col cols="12" md="6">
                    <ScBoiteTexte>\( \overrightarrow{u} \) et \( \overrightarrow{v}\) sont-ils colinéaires ?</ScBoiteTexte>
                    \[\Downarrow\]
                    \[ \frac{12}{4} \stackrel{?}{=} \frac{-3}{-1} \implies 3 \stackrel{?}{=} 3\]
                    \[\Downarrow\]
                    <ScBoiteTexte>Les deux valeurs sont égales</ScBoiteTexte>
                    \[\Downarrow\]
                    <sc-boite-texte>\( \overrightarrow{u} \) et \( \overrightarrow{v} \) sont colinéaires</sc-boite-texte>
                </v-col>
                <v-col cols="12" md="6">
                    <ScBoiteTexte>\( \overrightarrow{u} \) et \( \overrightarrow{w}\) sont-ils colinéaires ?</ScBoiteTexte>
                    \[\Downarrow\]
                    \[ \frac{-8}{4} \stackrel{?}{=} \frac{3}{-1} \implies -2 \stackrel{?}{=} -3\]
                    \[\Downarrow\]
                    <ScBoiteTexte>Les deux valeurs ne sont pas égales</ScBoiteTexte>
                    \[\Downarrow\]
                    <sc-boite-texte>\( \overrightarrow{u} \) et \( \overrightarrow{v} \) ne sont pas colinéaires</sc-boite-texte>
                </v-col>
            </v-row>

            <sc-boite-etape>2ème méthode: déterminant</sc-boite-etape>
            <v-row>
                <v-col cols="12" md="6">
                    <ScBoiteTexte>\( \overrightarrow{u} \) et \( \overrightarrow{v}\) sont-ils colinéaires ?</ScBoiteTexte>
                    \[\Downarrow\]
                    \[ \begin{vmatrix}4 & 12 \\ -1 & -3\end{vmatrix} = 4\cdot (-3) - (-1)\cdot 12 = 0\]
                    \[\Downarrow\]
                    <ScBoiteTexte>Le déterminant est nul</ScBoiteTexte>
                    \[\Downarrow\]
                    <sc-boite-texte>\( \overrightarrow{u} \) et \( \overrightarrow{v} \) sont colinéaires</sc-boite-texte>
                </v-col>
                <v-col cols="12" md="6">
                    <ScBoiteTexte>\( \overrightarrow{u} \) et \( \overrightarrow{w}\) sont-ils colinéaires ?</ScBoiteTexte>
                    \[\Downarrow\]
                    \[ \begin{vmatrix}4 & -8 \\ -1 & 3\end{vmatrix} = 4\cdot 3 - (-1)\cdot(-8) = 4\]
                    \[\Downarrow\]
                    <ScBoiteTexte>Le déterminant est non nul</ScBoiteTexte>
                    \[\Downarrow\]
                    <sc-boite-texte>\( \overrightarrow{u} \) et \( \overrightarrow{v} \) ne sont pas colinéaires</sc-boite-texte>
                </v-col>
            </v-row>


        </sc-boite>

    </section>
</template>
<script>

    import scBoite from "../../../components/Boxes/ScBoite"
    import ScBoiteEtape from "../../../components/Boxes/ScBoiteEtape";
    import ScBoiteTexte from "../../../components/Boxes/ScBoiteTexte";
    import ScTitreSection from "../../../components/Titles/ScTitre1Section";
    import ScTitrePartie from "../../../components/Titles/ScTitre2Partie";
    import ScBoiteTitre from "../../../components/Boxes/ScBoiteTitre";

    export default {
        name: 'GeometrieVectorielleBase',
        components: {ScBoiteTitre, ScTitrePartie, ScTitreSection, ScBoiteTexte, ScBoiteEtape,scBoite},
    }
</script>