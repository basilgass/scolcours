<template>
    <div>
        <h1>3.12</h1>

        <div class="text-center">
            <p>On donne </p>
            <div class="katex-left">\[ A(3;4)\qquad B(-3;-3) \]</div>

            <p>On pose \( L(x;y) \)</p>

            <p>On calcule les vecteurs \( \overrightarrow{AL} \) et \( \overrightarrow{BL }\)</p>

            <p>\[ \overrightarrow{AL} = \begin{pmatrix} x-3 \\ y-4 \end{pmatrix}\qquad \overrightarrow{BL} =
                \begin{pmatrix}
                x+3 \\ y+3 \end{pmatrix} \]</p>

            <p>On calcule alors le rapport de section \( (AB;L) = \dfrac{AL}{BL} \)</p>

            <v-row>
                <v-col>
                    Pour les 1ères coordonnées
                    \[
                    \begin{aligned}
                    \dfrac{x-3}{x+3} &= \dfrac{5}{3} \\
                    3(x-3)&=5(x+3) \\
                    3x-9 &= 5x+15\\
                    2x &= -24 \\
                    x &= -12
                    \end{aligned}
                    \]
                </v-col>
                <v-col>
                    Pour les 2èmes coordonnées
                    \[
                    \begin{aligned}
                    \dfrac{y-4}{y+3} &= \dfrac{5}{3} \\
                    3(y-4) &= 5(y+3) \\
                    3y-12 &= 5y+15 \\
                    2y &= -27 \\
                    x &= -\frac{27}{2}
                    \end{aligned}
                    \]
                </v-col>
            </v-row>
        </div>

    </div>
</template>

<script>
    export default {
        name: "ex3_12",

        mounted(){
        }
    }
</script>
