<template>
    <section>
        <sc-titre-partie>Théorème du sinus</sc-titre-partie>
        <sc-boite class="mx-auto" max-width="600px" min-width="350px" theoreme width="auto">
            \[
            \frac{a}{\sin(\alpha)}
            =\frac{b}{\sin(\beta)}
            =\frac{c}{\sin(\gamma)}
            =2\cdot r
            \]

            <template v-slot:footer>\( r \) est le rayon du cercle circonscrit</template>
        </sc-boite>

        <sc-boite closed collapse exemple titre="Un côté et deux angles connus">
            <v-row>
                <v-col cols="12" md="6">
                    <v-sheet class="mx-auto" max-width="300px">
                        <pi-triangle alpha="34" beta="82" c="11" label-alpha="\\a=34°" label-beta="\\b=82°"/>
                    </v-sheet>
                </v-col>
                <v-col cols="12" md="6">
                    <h4>Calcul du troisième angle
                        <br/><span class="caption">La somme des angles d'un triangle vaut 180°</span>
                    </h4>
                    <p class="katex-left ml-5">
                        \[
                        \begin{aligned}
                        \gamma &= 180 - \alpha - \beta\\
                        &= 180 - 34 - 82 \\
                        &= 64°
                        \end{aligned}
                        \]
                    </p>

                    <h4>On cherche un côté manquant (\( a \)) </h4>
                    <p class="katex-left ml-5">
                        \[
                        \frac{a}{\textcolor{green}{\sin{\alpha}}}=\textcolor{lightgrey}{\frac{b}{\sin{\beta}}}=\textcolor{green}{\frac{c}{\sin{\gamma}}}=\textcolor{lightgrey}{2\cdot r}
                        \]
                        \[
                        \implies \frac{a}{\textcolor{green}{\sin{\alpha}}}=\textcolor{green}{\frac{c}{\sin{\gamma}}}
                        \]
                        \[
                        \begin{aligned}
                        a &= \frac{c\cdot \sin\alpha}{\sin\gamma}\\
                        &= \frac{11\cdot \sin(34)}{\sin{64}}\\
                        &\approx 6.84
                        \end{aligned}
                        \]
                    </p>

                    <h4>On cherche le dernier côté manquant (\( b \)) </h4>
                    <p class="katex-left ml-5">
                        \[
                        \textcolor{lightgrey}{\frac{a}{\sin{\alpha}}}=\frac{b}{\textcolor{green}{\sin{\beta}}}=\textcolor{green}{\frac{c}{\sin{\gamma}}}=\textcolor{lightgrey}{2\cdot r}
                        \]
                        \[
                        \implies \frac{b}{\textcolor{green}{\sin{\beta}}}=\textcolor{green}{\frac{c}{\sin{\gamma}}}
                        \]
                        \[
                        \begin{aligned}
                        b &= \frac{c\cdot \sin\beta}{\sin\gamma}\\
                        &= \frac{11\cdot \sin(82)}{\sin{64}}\\
                        &\approx 12.12
                        \end{aligned}
                        \]
                    </p>

                </v-col>
            </v-row>
        </sc-boite>

        <sc-boite closed collapse exemple titre="Un angle, un côté adjacent et l'opposé sont connus">
            <v-row>
                <v-col cols="12" md="6">
                    <v-sheet class="mx-auto" max-width="300px">
                        <pi-triangle a="6" alpha="27" c="8" label-a="a=6" label-alpha="\\a=27°" label-c="c=8"/>
                    </v-sheet>
                </v-col>
                <v-col cols="12" md="6">
                    <h4>Calcul d'un angle (\( \gamma \))
                    </h4>
                    <v-alert border="left" color="red" elevation="3" text type="warning">
                        L'utilisation du théorème du sinus pour calculer un angle implique deux solutions !
                    </v-alert>

                    <p class="katex-left ml-5">
                        \[
                        \textcolor{green}{\frac{a}{\sin{\alpha}}}=\textcolor{lightgrey}{\frac{b}{\sin{\beta}}}=\frac{\textcolor{green}{c}}{\sin{\gamma}}=\textcolor{lightgrey}{2\cdot r}
                        \]
                        \[
                        \implies \textcolor{green}{\frac{a}{\sin{\alpha}}}=\frac{\textcolor{green}{c}}{\sin{\gamma}}
                        \]

                        \[
                        \begin{aligned}
                        \sin\gamma &= \frac{c\cdot \sin\alpha}{a}\\
                        &= \frac{8\cdot \sin(27)}{6}\\
                        &\approx 0.605\\[1.4em]
                        \gamma &= \sin^{-1}(0.605)\\
                        &\approx 37.25°
                        \end{aligned}
                        \]

                        \[
                        \implies \gamma_1=37.25
                        \]
                        \[
                        \implies \gamma_2=180-37.25 = 142.75°
                        \]
                    </p>
                </v-col>

                <v-col cols="12">
                    <v-alert border="left" class="text-center" color="red" text type="warning">On a deux solutions, qu'il faut traiter séparément</v-alert>

                    <v-row>
                        <v-col cols="12" md="6">
                            <p class="title">1<sup>ère</sup> solution: \( \gamma = 37.25° \) </p>

                            <h4>Calcul du dernier angle</h4>
                            <p class="katex-left ml-5">
                                \[
                                \begin{aligned}
                                \beta_1 &= 180 - \alpha - \gamma_1\\
                                &= 180 - 27 - 37.25 \\
                                &= 115.75
                                \end{aligned}
                                \]
                            </p>

                            <h4>Calcul du dernier côté (\( b \))</h4>
                            <p class="katex-left ml-5">
                                \[
                                \textcolor{lightgrey}{\frac{a}{\sin{\alpha}}}=\frac{b}{\textcolor{green}{\sin{\beta}}}=\textcolor{green}{\frac{c}{\sin{\gamma}}}=\textcolor{lightgrey}{2\cdot r}
                                \]
                                \[
                                \implies \frac{b}{\textcolor{green}{\sin{\beta}}}=\textcolor{green}{\frac{c}{\sin{\gamma}}}
                                \]
                                \[
                                \begin{aligned}
                                b_1 &= \frac{c\cdot \sin\beta_1}{\sin\gamma_1}\\
                                &= \frac{8\cdot \sin(115.75)}{\sin{37.25}}\\
                                &\approx 11.9
                                \end{aligned}
                                \]
                            </p>
                        </v-col>

                        <v-col cols="12" md="6">
                            <p class="title">2<sup>ème</sup> solution: \( \gamma = 142.75° \) </p>

                            <h4>Calcul du dernier angle</h4>
                            <p class="katex-left ml-5">
                                \[
                                \begin{aligned}
                                \beta_2 &= 180 - \alpha - \gamma_1\\
                                &= 180 - 27 - 142.25 \\
                                &= 10.75
                                \end{aligned}
                                \]
                            </p>

                            <h4>Calcul du dernier côté (\( b \))</h4>
                            <p class="katex-left ml-5">
                                \[
                                \textcolor{lightgrey}{\frac{a}{\sin{\alpha}}}=\frac{b}{\textcolor{green}{\sin{\beta}}}=\textcolor{green}{\frac{c}{\sin{\gamma}}}=\textcolor{lightgrey}{2\cdot r}
                                \]
                                \[
                                \implies \frac{b}{\textcolor{green}{\sin{\beta}}}=\textcolor{green}{\frac{c}{\sin{\gamma}}}
                                \]
                                \[
                                \begin{aligned}
                                b_2 &= \frac{c\cdot \sin\beta_2}{\sin\gamma_2}\\
                                &= \frac{8\cdot \sin(10.75)}{\sin{142.25}}\\
                                &\approx 2.4
                                \end{aligned}
                                \]
                            </p>
                        </v-col>
                    </v-row>
                </v-col>

            </v-row>
        </sc-boite>
    </section>
</template>
<script>
    import PiTriangle from "../../../components/Pi/pi-triangle"
    import ScBoite from "../../../components/Boxes/ScBoite"
    import ScBoiteTitre from "../../../components/Boxes/ScBoiteTitre"
    import ScTitreSection from "../../../components/Titles/ScTitre1Section";
    import ScTitrePartie from "../../../components/Titles/ScTitre2Partie";

    export default {
        name: 'sc-trigo-11-sinus',
        components: {ScTitrePartie, ScTitreSection, PiTriangle, ScBoite, ScBoiteTitre}
    }
</script>