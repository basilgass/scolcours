<template>
    <section>
        <sc-titre-section id="norme">Norme et produit scalaire</sc-titre-section>

        <sc-titre-partie>Définitions</sc-titre-partie>
        <sc-definitions :definitions="definitions"></sc-definitions>

        <sc-titre-partie divider>Propriétés de la norme</sc-titre-partie>
        Comme la norme est une distance, on a les propriétés suivantes:

        <sc-boite propriete width="100%">
            <sc-boite-etape class="text-center">Une distance est positive</sc-boite-etape>
            <sc-boite-deux-colonnes>
                <template v-slot:col1>
                    \[ \delta(A;B)\geq0 \]
                </template>
                <template v-slot:col2>
                    \[ \Vert \overrightarrow{AB} \Vert \geq 0\]
                </template>
            </sc-boite-deux-colonnes>

            <sc-boite-etape :mt="false" center>Distance nulle</sc-boite-etape>
            <sc-boite-deux-colonnes>
                <template v-slot:col1>
                    \[\delta(A;B)=0\Longleftrightarrow A = B\]
                </template>
                <template v-slot:col2>
                    \[ \Vert \overrightarrow{AB} \Vert = 0 \Longleftrightarrow \overrightarrow{AB} = \overrightarrow{0}\]
                </template>
            </sc-boite-deux-colonnes>

            <sc-boite-etape :mt="false" center>Distance de A à B ou de B à A (symétrie)</sc-boite-etape>
            <sc-boite-deux-colonnes>
                <template v-slot:col1>
                    \[\delta(A;B)=\delta(B;A)\]
                </template>
                <template v-slot:col2>
                    \[ \Vert \overrightarrow{AB} \Vert = \Vert \overrightarrow{BA} \Vert \]
                </template>
            </sc-boite-deux-colonnes>

            <sc-boite-etape :mt="false" center>
                Inégalité triangulaire
                <template v-slot:commentaire>Aller d'un point A à un point C en passant par un point B est forcément au moins aussi grand que d'aller directement de A à C.</template>
            </sc-boite-etape>
            <sc-boite-deux-colonnes>
                <template v-slot:col1>
                    \[\delta(A;C)\leq\delta(A;B)+ \delta(B;C)\]
                </template>
                <template v-slot:col2>
                    \[ \Vert \overrightarrow{AB} \Vert \leq \Vert \overrightarrow{AB} \Vert + \Vert \overrightarrow{BC} \Vert\]
                </template>
            </sc-boite-deux-colonnes>

            <sc-boite-etape :mt="false" center>
                Norme du produit d'un vecteur par un scalaire (un nombre)
                <template v-slot:commentaire>
                    <p>Si on double la taille d'un vecteur, sa norme sera aussi doublée !<br/>
                    On peut multiplier un vecteur par un nombre négatif. Son sens change.<br/>
                        Par contre, la norme reste positive. C'est pour cela qu'il y a une <u>valeur absolue</u>.</p>
                </template>
            </sc-boite-etape>
            <sc-boite-texte>
                \[ \Vert k\cdot \overrightarrow{AB} \Vert = \vert k \vert \Vert \overrightarrow{AB} \Vert \]
            </sc-boite-texte>
        </sc-boite>

        <sc-titre-partie divider>Calculs de la norme</sc-titre-partie>
        <p>La norme d'une vecteur \( \begin{pmatrix}a_1 \\ a_2 \end{pmatrix} \) relativement à une base orthonormée
            vaut \( \sqrt{a_1^2+a_2^2} \)</p>
        <sc-boite theoreme>
            \[ \Vert \overrightarrow{a} \Vert = \sqrt{a_1^2+a_2^2} \]
        </sc-boite>

        <sc-titre-partie divider>Vecteur unitaire</sc-titre-partie>
        <p>Si un vecteur \( \overrightarrow{a} \) est non nul, on peut calculer les composantes d'un vecteur unitaire
            colinéaire.</p>
        <sc-boite theoreme>
            \[ \overrightarrow{u} = \pm \frac{1}{\Vert \overrightarrow{a} \Vert}\cdot \overrightarrow{a} \]
        </sc-boite>
        <p>
            Par convention, on s'arrange pour qu'il n'y ait pas de racine carrée au dénominateur.
            Voir
            <ScBtnGoto
                    goto="#convention-racine-carree">exemple</ScBtnGoto>
            </p>

        <sc-boite exemple>
            <sc-boite-titre>Calculer un vecteur unitaire colinéaire à \( \overrightarrow{a} \) </sc-boite-titre>
            
            \[
            \overrightarrow{a} = \begin{pmatrix} 6 \\ -8 \end{pmatrix}
            \]
            
            <sc-boite-etape mb>Calculer la norme du vecteur</sc-boite-etape>
            \[
            \Vert \overrightarrow{a} \Vert = \sqrt{6^2+(-8)^2}=\sqrt{36+64}=\sqrt{100}= \textcolor{orange}{10}
            \] 
            
            <sc-boite-etape mb>
                Calculer le vecteur unitaire
                <template v-slot:commentaire>
                    Noter que la deuxième version du vecteur unitaire a un coefficient <u>négatif</u>.
                </template>
            </sc-boite-etape>
            \[
            \overrightarrow{u_a}=\frac{1}{\textcolor{orange}{10}}\cdot \begin{pmatrix} 6 \\ -8 \end{pmatrix}
            \qquad\text{ ou }\qquad
            \overrightarrow{u_a}=-\frac{1}{\textcolor{orange}{10}}\cdot \begin{pmatrix} 6 \\ -8 \end{pmatrix}
            \]

            <v-divider></v-divider>
            <sc-boite-etape mb>
                Cas de la racine carrée

            </sc-boite-etape>
            \[
            \overrightarrow{b}=\begin{pmatrix} 3 \\ -5 \end{pmatrix} \implies \Vert \overrightarrow{b} \Vert = \sqrt{3^2+(-5)^2}=\sqrt{34} \implies \overrightarrow{u_b} = \frac{1}{\sqrt{34}} \begin{pmatrix} 3 \\ -5 \end{pmatrix}
            \]
            
            <sc-boite-etape mb id="convention-racine-carree">
                Modification du coefficient avec racine carrée
                <template v-slot:commentaire>
                    Par convention, on modifie la fraction pour ne pas avoir de racine carrée au dénominateur.
                </template>
            </sc-boite-etape>
            \[
            \frac{1}{\sqrt{34}}
            =\frac{1}{\sqrt{34}}\cdot \underbrace{\frac{\sqrt{34}}{\sqrt{34}}}_{=1}
            = \frac{1\cdot \sqrt{34}}{\sqrt{34} \cdot \sqrt{34}}
            = \frac{\sqrt{34}}{34}
            \]
            <sc-boite-etape>Résultat final</sc-boite-etape>
            \[
            \overrightarrow{b}=\begin{pmatrix} 3 \\ -5 \end{pmatrix} \implies \overrightarrow{u_b} = \frac{\sqrt{34}}{34} \begin{pmatrix} 3 \\ -5 \end{pmatrix}
            \]
        </sc-boite>



        <sc-boite exemple>
            <sc-boite-titre>Montrer qu'un vecteur est unitaire</sc-boite-titre>

            <sc-boite-etape mb>Exemple 1: \( \overrightarrow{v}=\dfrac{1}{5}\begin{pmatrix} 4 \\ -3 \end{pmatrix} \) </sc-boite-etape>
            \[
            \left\Vert \overrightarrow{v} \right\Vert
            = \left\vert \frac{1}{5} \right\vert \cdot \left\Vert \begin{pmatrix} 4 \\ -3 \end{pmatrix} \right\Vert
            = \frac{1}{5} \cdot \sqrt{4^2+(-3)^2}
            = \frac{1}{5} \cdot \sqrt{25}
            = \frac{1}{5} \cdot 5
            = 1
            \]

            <sc-boite-etape mb>Exemple 2: \( \overrightarrow{w}=\dfrac{\sqrt{13}}{13}\begin{pmatrix} 2 \\ 3 \end{pmatrix} \) </sc-boite-etape>
            \[
            \left\Vert \overrightarrow{w} \right\Vert
            = \left\vert \frac{\sqrt{13}}{13} \right\vert \cdot \left\Vert \begin{pmatrix} 2 \\ 3 \end{pmatrix} \right\Vert
            = \frac{\sqrt{13}}{13} \cdot \sqrt{2^2+3^2}
            = \frac{\sqrt{13}}{13} \cdot \sqrt{13} = \frac{13}{13}
            = 1
            \]

            <sc-boite-etape mb mt>
                Exemple 3: \( \overrightarrow{u}=-\dfrac{\sqrt{5}}{5}\begin{pmatrix} -1 \\ 2 \end{pmatrix} \)
                <template v-slot:commentaire>
                    Remarquer l'utilisation de la valeur absolue qui retourne un nombre positif: \( \left\vert -\dfrac{\sqrt{5}}{5} \right\vert = \dfrac{\sqrt{5}}{5} \)
                </template>
            </sc-boite-etape>
            \[
            \left\Vert \overrightarrow{u} \right\Vert
            = \left\vert -\frac{\sqrt{5}}{5} \right\vert \cdot \left\Vert \begin{pmatrix} -1 \\ 2 \end{pmatrix} \right\Vert
            = \frac{\sqrt{5}}{5} \cdot \sqrt{(-1)^2+2^2}
            = \frac{\sqrt{5}}{5} \cdot \sqrt{5} = \frac{5}{5}
            = 1
            \]
        </sc-boite>
    </section>
</template>
<script>
    import ScDefinitions from "../../../components/ScDefinitions";
    import ScBoiteEtape from "../../../components/Boxes/ScBoiteEtape";
    import ScBoiteTexte from "../../../components/Boxes/ScBoiteTexte";
    import ScBoiteDeuxColonnes from "../../../components/Boxes/ScBoiteTexteDeuxColonnes";
    import ScTitreSection from "../../../components/Titles/ScTitre1Section";
    import ScTitrePartie from "../../../components/Titles/ScTitre2Partie";
    import ScBoiteTitre from "../../../components/Boxes/ScBoiteTitre";
    import ScBtnGoto from "../../../components/ScBtnGoto";
    import scBoite from "../../../components/Boxes/ScBoite";

    export default {
        name: 'GeometrieVectorielleNorme',
        components: {
            scBoite,
            ScBtnGoto,
            ScBoiteTitre,
            ScTitrePartie,
            ScTitreSection,
            ScBoiteTexte, ScBoiteDeuxColonnes, ScBoiteEtape, ScDefinitions},
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