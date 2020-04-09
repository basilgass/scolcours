<template>
    <section>
        <ScTitrePartie id="produitscalaire">Produit scalaire</ScTitrePartie>

        <p v-if="!vital">
            Le produit scalaire de deux vecteurs \(\overrightarrow{a}\) et \(\overrightarrow{b}\) est
            le nombre réél donné par \( a_1\cdot a_2 + b_1\cdot b_2 \)
        </p>

        <sc-theoreme>
            \[
            \overrightarrow{a}\cdot \overrightarrow{b} = \begin{pmatrix} a_1 \\ a_2 \end{pmatrix}\cdot \begin{pmatrix} b_1 \\ b_2 \end{pmatrix} = a_1\cdot b_1 + a_2\cdot b_2
            \]
        </sc-theoreme>

        <sc-exemple>
            <sc-boite-titre>Exemples</sc-boite-titre>
            \[
            \begin{pmatrix} \textcolor{orange}{2} \\ \textcolor{#00a000}{4} \end{pmatrix} \cdot \begin{pmatrix} \textcolor{orange}{-3} \\ \textcolor{#00a000}{5} \end{pmatrix}
            = \textcolor{orange}{2}\cdot (\textcolor{orange}{-3}) + \textcolor{#00a000}{4} \cdot \textcolor{#00a000}{5} = 14
            \]

            <div class="mt-10"></div>
            \[
            \begin{pmatrix} \textcolor{orange}{8} \\ \textcolor{#00a000}{-5} \end{pmatrix} \cdot \begin{pmatrix} \textcolor{orange}{15} \\ \textcolor{#00a000}{24} \end{pmatrix}
            = \textcolor{orange}{8}\cdot \textcolor{orange}{15} + (\textcolor{#00a000}{-5}) \cdot \textcolor{#00a000}{24} = 0
            \]
        </sc-exemple>

        <sc-titre-partie>Perpendicularité</sc-titre-partie>
        <p v-if="!vital">
            Deux vecteurs \( \overrightarrow{a} \) et \( \overrightarrow{b} \) sont perpendiculaires si leur
            produit scalaire est nul
        </p>

        <sc-theoreme>
            \[ \overrightarrow{a} \perp \overrightarrow{b} \Longleftrightarrow \overrightarrow{a}\cdot \overrightarrow{b} = 0 \]
        </sc-theoreme>
        
        <sc-processus v-if="!vital">
            <sc-boite-titre>
                Déterminer un vecteur perpendiculaire à un autre
                <template v-slot:commentaire>
                    On inverse les composantes et on change de signe <u>une</u> des deux composantes.
                </template>
            </sc-boite-titre>
            
            \[
            \overrightarrow{a} = \begin{pmatrix} a_1 \\ a_2 \end{pmatrix} \implies \overrightarrow{a_{\perp}} = \begin{pmatrix} a_2 \\ -a_1 \end{pmatrix}
            \] 
        </sc-processus>
        
        <sc-exemple v-if="!vital">
            <sc-boite-titre>Recherche d'un vecteur perependiculaire</sc-boite-titre>

            <sc-boite-etape>
                Les deux composantes sont non nulles et de même signe
                <template v-slot:commentaire>
                    La 1ère composante devient la deuxième et inversément. On change de signe une des deux composantes.
                </template>
            </sc-boite-etape>
            \[
            \overrightarrow{a} = \begin{pmatrix} 3 \\ 4 \end{pmatrix} \implies \overrightarrow{a_\perp}=\begin{pmatrix} 4 \\ -3 \end{pmatrix}
            \]

            \[
            \overrightarrow{b} = \begin{pmatrix} -2 \\ -4 \end{pmatrix} \implies \overrightarrow{b_\perp}=\begin{pmatrix} 4 \\ -2 \end{pmatrix}
            \]

            <sc-boite-etape>
                Les deux composantes sont non nulles, mais de signe opposé.
                <template v-slot:commentaire>
                    On peut s'arranger pour faire disparaître le signe moins: le changement de signe a été fait sur le nombre négatif!
                </template>
            </sc-boite-etape>
            \[
            \overrightarrow{c} = \begin{pmatrix} -3 \\ 5 \end{pmatrix} \implies \overrightarrow{c_\perp}=\begin{pmatrix} 5 \\ 3 \end{pmatrix}
            \]

            <sc-boite-etape>
                Une des deux composantes est nulle
                <template v-slot:commentaire>
                    Le changement de signe a été fait sur le zéro!
                </template>
            </sc-boite-etape>
            \[
            \overrightarrow{d} = \begin{pmatrix} 0 \\ 3 \end{pmatrix} \implies \overrightarrow{d_\perp}=\begin{pmatrix} 3 \\ 0 \end{pmatrix}
            \]
        </sc-exemple>

        <sc-proprietes>
            <sc-boite-titre>Propriétés algébriques</sc-boite-titre>
            <sc-boite-texte>On donne les vecteurs \(\overrightarrow{a},\,\overrightarrow{b}\) et \(\overrightarrow{c}\) et un nombre réel \(k\)</sc-boite-texte>

            <sc-boite-etape>Commutativité</sc-boite-etape>
            \[
            \overrightarrow{a}\cdot \overrightarrow{b} = \overrightarrow{b}\cdot \overrightarrow{a}
            \]

            <sc-boite-etape>Distributivité</sc-boite-etape>
            \[
            \overrightarrow{a}\cdot (\overrightarrow{b}+\overrightarrow{c})=\overrightarrow{a}\cdot \overrightarrow{b}+ \overrightarrow{a}\cdot \overrightarrow{c}
            \]

            <sc-boite-etape>Associativité avec un scalaire</sc-boite-etape>
            \[
                (k\cdot \overrightarrow{a})\cdot \overrightarrow{b} = \overrightarrow{a}\cdot (k\cdot \overrightarrow{b})=k\cdot (\overrightarrow{a}\cdot \overrightarrow{b})
            \]

            <sc-boite-etape>Vecteur nul</sc-boite-etape>
            \[
            \overrightarrow{a}\cdot \overrightarrow{a}=0 \Longleftrightarrow \overrightarrow{a}=\overrightarrow{0}
            \]

            <sc-boite-etape>Produit scalaire et norme</sc-boite-etape>
            \[
            \Vert \overrightarrow{a} \Vert^2=\overrightarrow{a}\cdot \overrightarrow{a}
            \text{ ou }
            \Vert \overrightarrow{a} \Vert = \sqrt{\overrightarrow{a}\cdot \overrightarrow{a}}
            \]
            
            <sc-boite-etape>Inégalité de Cauchy-Schwartz</sc-boite-etape>
            \[ 
                \vert \overrightarrow{a}\cdot \overrightarrow{b}\vert \leq \Vert \overrightarrow{a} \Vert \cdot \Vert \overrightarrow{b} \Vert
            \]

            <sc-boite-etape>Inégalité triangulaire</sc-boite-etape>
            \[
            \Vert \overrightarrow{\overrightarrow{a} + \overrightarrow{b}} \Vert \leq \Vert \overrightarrow{a} \Vert+\Vert \overrightarrow{b} \Vert
            \]

            <sc-boite-etape>Lien entre produit scalaire et norme</sc-boite-etape>
            \[
            \overrightarrow{a}\cdot \overrightarrow{b} =
            \frac{1}{2}\left(
            \Vert \overrightarrow{a} + \overrightarrow{b} \Vert^2
            - \Vert \overrightarrow{a} \Vert ^2
            - \Vert \overrightarrow{b} \Vert ^2
            \right)
            \]
        </sc-proprietes>

        <sc-titre-partie>Expression trigonométrique</sc-titre-partie>
        <sc-theoreme>
            \[
            \overrightarrow{a}\cdot \overrightarrow{b} =
            \Vert \overrightarrow{a} \Vert \cdot \Vert \overrightarrow{b} \Vert \cdot \cos(\angle(\overrightarrow{a};\overrightarrow{b}))
            \]
        </sc-theoreme>

        <sc-titre-partie>Propriétés du produit scalaire</sc-titre-partie>
        <sc-proprietes>
            <p>L'orientation de l'angle n'est pas défini par le produit scalaire.</p>

            <sc-boite-etape v-if="!vital">L'angle entre deux vecteurs est aigu si le produit scalaire est positif</sc-boite-etape>
            \[
                \angle(\overrightarrow{a};\overrightarrow{b})&lt;90 \Longleftrightarrow \overrightarrow{a}\cdot \overrightarrow{b} > 0
            \]

            <sc-boite-etape v-if="!vital">L'angle entre deux vecteurs est droit si le produit scalaire est nul</sc-boite-etape>
            \[
            \angle(\overrightarrow{a};\overrightarrow{b})=90 \Longleftrightarrow \overrightarrow{a}\cdot \overrightarrow{b} = 0
            \]

            <sc-boite-etape v-if="!vital">L'angle entre deux vecteurs est obtu si le produit scalaire est nögatif</sc-boite-etape>
            \[
            \angle(\overrightarrow{a};\overrightarrow{b})>90 \Longleftrightarrow \overrightarrow{a}\cdot \overrightarrow{b} &lt; 0
            \]

        </sc-proprietes>
    </section>
</template>
<script>
    import ScTheoreme from "../../../../../components/Boxes/ScBaseAlertTheoreme";
    import ScTitrePartie from "../../../../../components/Titles/ScTitre2Partie";
    import ScProprietes from "../../../../../components/Boxes/ScBaseAlertProprietes";
    import ScBoiteEtape from "../../../../../components/Boxes/ScBoiteEtape";
    import ScProcessus from "../../../../../components/Boxes/ScBaseAlertProcessus";
    import ScBoiteTitre from "../../../../../components/Boxes/ScBoiteTitre";
    import ScExemple from "../../../../../components/Boxes/ScBaseExemple";
    import ScBoiteTexte from "../../../../../components/Boxes/ScBoiteTexte";

    export default {
        name: 'GeometrieVectorielleScalaire',
        components: {ScBoiteTexte, ScExemple, ScBoiteTitre, ScProcessus, ScBoiteEtape, ScProprietes, ScTitrePartie, ScTheoreme},
        props: {
            vital: {type: Boolean, default: true},
        },
        data: function () {
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