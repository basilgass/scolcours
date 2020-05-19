<template>
    <div>
        <p>Une <u>base</u> est formée de deux vecteurs non colinéaires \( e_1 \) et \( e_2 \).</p>
        \[
        \mathcal{B}(\overrightarrow{e_1};\overrightarrow{e_2})
        \]

        <p>Une <u>combinaison linéaire</u> de vecteurs \( \overrightarrow{e_1} \) et \( \overrightarrow{e_2} \) peut s'écrire sous la
            forme d'un vecteur de <u>deux composantes</u>.</p>
        \[a\cdot \overrightarrow{e_1} +b\cdot \overrightarrow{e_2}
        \Longleftrightarrow
        \begin{pmatrix} a \\ b \end{pmatrix} \]

        \[
        \overrightarrow{a}\text{ et }\overrightarrow{b}\text{ colinéaire}\Longleftrightarrow \overrightarrow{a}=\lambda\cdot \overrightarrow{b},\,\lambda\in\mathbb{R}
        \]

    </div>
</template>
<script>
    export default {
        name: 'gv-02-base',
    }
</script>