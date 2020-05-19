<template>
    <section>
        <sc-titre-section>Trigonométrie dans le triangle rectangle</sc-titre-section>

        <v-row justify="center">
            <v-col cols="12" lg="4" md="6">
                <sc-boite
                        definition
                        titre="Rapports trigonométriques"
                >
                    \[
                    \begin{matrix}
                    \sin&=&\dfrac{\text{opposé}}{\text{hypothénuse}}\\[1.5em]

                    \cos&=&\dfrac{\text{adjacent}}{\text{hypothénuse}}\\[1.5em]

                    \tan&=&\dfrac{\text{opposé}}{\text{adjacent}}

                    \end{matrix}
                    \]
                </sc-boite>

            </v-col>

        </v-row>

        <p>
            Dans un triangle rectangle, les deux côtés adjacents à l'angle droit s'appellent
            les
            <sc-def>cathètes</sc-def>
            , le côté opposé l'
            <sc-def>hypothénuse</sc-def>
            .<br/>
            L'
            <sc-def>hypothénuse</sc-def>
            est forcément plus grande que chacune des
            <sc-def>cathètes</sc-def>
            .

        </p>
        <p>Pour un angle (non droit) d'un triangle rectangle, ses 3 côtés portent les noms suivants:</p>
        <v-card class="mx-auto" width="300">
            <v-btn @mouseleave="update('opp', false)" @mouseover="update('opp', true)" block color="green" large text>Opposé</v-btn>
            <v-btn @mouseleave="update('adj', false)" @mouseover="update('adj', true)" block color="red" large text>Adjacent</v-btn>
            <v-btn @mouseleave="update('hyp', false)" @mouseover="update('hyp', true)" block color="blue" large text>Hypothénuse</v-btn>
        </v-card>
        <ul>

        </ul>
        <v-row justify="center">
            <v-col cols="6">
                <sc-trigo-rectangle
                        :adj="adjHover"
                        :hyp="hypHover"
                        :opp="oppHover"
                />
            </v-col>

            <v-col cols="6">
                <sc-trigo-rectangle :A="false"
                                    :adj="adjHover"
                                    :hyp="hypHover"
                                    :opp="oppHover"/>
            </v-col>
        </v-row>

        <sc-titre-partie>Exemples de calculs</sc-titre-partie>
        <sc-boite closed collapse exemple>
            <v-row>
                <v-col cols="12" sm="8">
                    <sc-boite-titre>Calculer le côté adjacent à l'aide d'un angle et de l'hypothénuse</sc-boite-titre>
                    <div class="katex-left">
                        \[
                        \begin{aligned}
                        \cos\alpha=&\frac{\text{adjacent}}{\text{hypothénuse}} \implies \text{adj}=\text{hyp}\cdot \cos{\alpha} \\[2em]
                        c =& 7\cdot \cos(40)=5.36 \\[2em]
                        \end{aligned}
                        \]
                    </div>

                    <sc-boite titre="Calculatrice" width="fit-content">
                        <code>7</code> <code>x</code> <code>40</code> <code>COS</code> <code>=</code>
                    </sc-boite>
                </v-col>
                <v-col cols="12" sm="4">
                    <v-sheet class="mx-auto" max-width="300px">
                        <pi-triangle
                                :cote-c="{width: 5, color: 'green'}"
                                alpha="40"
                                b="7"
                                beta="90"
                                label-cote-a="a"
                                label-cote-c="c"
                        />
                    </v-sheet>
                </v-col>
            </v-row>
        </sc-boite>

        <sc-boite closed collapse exemple>
            <v-row>
                <v-col cols="12" sm="8">
                    <sc-boite-titre>Calculer l'hypothénuse à l'aide d'un angle et d'un côté</sc-boite-titre>
                    <div class="katex-left">
                        \[
                        \begin{aligned}
                        \sin\alpha=&\frac{\text{opposé}}{\text{hypothénuse}} \implies \text{hyp}=\frac{\text{opp}}{\cos{\alpha}} \\[2em]
                        b =& \frac{4}{ \sin(35)}=6.97 \\[2em]
                        \end{aligned}
                        \]
                    </div>

                    <sc-boite titre="Calculatrice" width="fit-content">
                        <code>4</code> <code>/</code> <code>35</code> <code>SIN</code> <code>=</code>
                    </sc-boite>
                </v-col>
                <v-col cols="12" sm="4">
                    <v-sheet class="mx-auto" max-width="300px">
                        <pi-triangle
                                :cote-b="{width: 5, color: 'green'}"
                                a="4"
                                alpha="35"
                                beta="90"
                                label-cote-b="b"
                                label-cote-c="c"
                        />
                    </v-sheet>
                </v-col>
            </v-row>
        </sc-boite>

        <sc-boite closed collapse exemple>
            <v-row>
                <v-col cols="12" sm="8">
                    <sc-boite-titre>Calculer un angle à l'aide d'une cathète et de l'hypothénuse</sc-boite-titre>
                    <div class="katex-left">
                        \[
                        \begin{aligned}
                        \sin\alpha=&\frac{\text{opposé}}{\text{hypothénuse}} = \frac{4}{7} = 0.571\\[2em]
                        \implies \alpha =& \sin^{-1}(0.857) = 34.85°
                        \end{aligned}
                        \]
                    </div>

                    <sc-boite titre="Calculatrice" width="fit-content">
                        <code>4</code> <code>/</code> <code>7</code> <code>=</code> <code>INV</code> <code>SIN</code>
                    </sc-boite>
                </v-col>
                <v-col cols="12" sm="4">
                    <v-sheet class="mx-auto" max-width="300px">
                        <pi-triangle
                                a="4"
                                b="7"
                                beta="90"
                                label-alpha="\\a"
                        />
                    </v-sheet>
                </v-col>
            </v-row>
        </sc-boite>

        <sc-titre-partie>Entrainement</sc-titre-partie>

        <v-row justify="center">
            <v-col cols="12" lg="4" md="6" sm="8">
                <sc-exercice-simple
                        :question="triangleRectangle"
                        donnee="Calculer, au dixième, le côté ou l'angle demandé"
                        exemple="Exemple: 34.8"
                        titre="Calculer dans un triangle rectangle"
                >
                    <template v-slot:complement>
                        <v-sheet class="mx-auto" max-width="300">
                            <pi-triangle
                                    :afficher-donnee="false"
                                    :label-alpha="labelalpha"
                                    :label-cote-a="labela"
                                    :label-cote-b="labelb"
                                    :label-cote-c="labelc"
                                    :label-gamma="labelgamma"
                                    a="3"
                                    b="5"
                                    c="4"
                            />
                        </v-sheet>
                    </template>
                </sc-exercice-simple>
            </v-col>
        </v-row>

        <sc-titre-partie>Relations fondamentales</sc-titre-partie>
        <v-row justify="center">
            <v-col cols="12" lg="4" md="6">
                <sc-boite
                        theoreme
                        titre="Relations fondamentales"
                >
                    \[
                    \begin{aligned}
                    (1) &\quad\sin^2(\alpha)+\cos^2(\alpha)=1\\[1.1em]
                    (2) &\quad\tan(\alpha)=\frac{\sin(\alpha)}{\cos(\alpha)}\\[1.1em]
                    (3) &\quad\cot(\alpha)=\frac{1}{\tan(\alpha)}=\frac{\cos(\alpha)}{\sin(\alpha)}\\[1.1em]
                    (4) &\quad\frac{1}{\cos^2(\alpha)}=1+\tan^2(\alpha)\\[1.1em]
                    (5) &\quad\frac{1}{\sin^2(\alpha)}=1+\cot^2(\alpha)
                    \end{aligned}
                    \]
                    <template v-slot:footer>\( \alpha \) est un angle aigu ( \( 0<\alpha<90 \) )</template>
                </sc-boite>
            </v-col>
        </v-row>
    </section>
</template>
<script>
    import ScBoite from "../../../components/Boxes/ScBoite";
    import ScTrigoRectangle from "../../../components/Pi/pi-triangle-rectangle";
    import ScTitrePartie from "../../../components/Titles/ScTitre2Partie";
    import ScTitreSection from "../../../components/Titles/ScTitre1Section";
    import ScDef from "../../../components/scDef";
    import PiTriangle from "../../../components/Pi/pi-triangle";
    import ScBoiteTitre from "../../../components/Boxes/ScBoiteTitre";
    import ScExerciceSimple from "../../../components/Exercices/ScExerciceSimple";
    import {Pi} from "../../../../public/js/pi";

    export default {
        name: 'trigo-triangle-rectangle',
        components: {ScExerciceSimple, ScBoiteTitre, PiTriangle, ScDef, ScTitreSection, ScTitrePartie, ScTrigoRectangle, ScBoite},
        data: function () {
            return {
                oppHover: false,
                adjHover: false,
                hypHover: false,
                coteListe: [0, 1, 2],
                labela: 'a',
                labelb: 'b',
                labelc: 'c',
                labelalpha: '\\a',
                labelgamma: '\\c'
            }
        },
        methods: {
            update: function (cote, value) {
                if (cote === 'opp') {
                    this.oppHover = value;
                } else if (cote === 'adj') {
                    this.adjHover = value;
                } else if (cote === 'hyp') {
                    this.hypHover = value;
                }
            },
            triangleRectangle: function () {
                // Un côté, un angle
                // Deux côtés.

                let questions = [], reponses = [];

                let a, b, c, alpha, gamma;
                // On part d'un triangle classique, rectangle en B.
                if (Pi.Numeric.randomBool()) {
                    // Un angle un côté

                    // Calcul de l'angle
                    if (Pi.Numeric.randomBool()) {
                        alpha = Pi.Numeric.randomInt(10, 80);
                        gamma = 90 - alpha;
                        questions.push('\\gamma')
                        reponses.push(gamma)
                    } else {
                        gamma = Pi.Numeric.randomInt(10, 80);
                        alpha = 90 - gamma;
                        questions.push('\\alpha')
                        reponses.push(alpha)
                    }

                    // Calcul des côtés.
                    let cote = ['a', 'b', 'c'][Pi.Numeric.randomInt(0, 2)];
                    if (cote === 'b') {
                        // Hypothénuse
                        b = Pi.Numeric.randomInt(10, 100) / 10;
                        a = b * Math.sin(alpha * Math.PI / 180);
                        c = b * Math.cos(alpha * Math.PI / 180);
                        questions.push('a');
                        questions.push('c');
                        reponses.push(a);
                        reponses.push(c);
                    } else if (cote === 'a') {
                        a = Pi.Numeric.randomInt(10, 100) / 10;
                        b = a / Math.sin(alpha * Math.PI / 180);
                        c = a / Math.tan(alpha * Math.PI / 180);
                        questions.push('b');
                        questions.push('c');
                        reponses.push(b);
                        reponses.push(c);
                    } else if (cote === 'c') {
                        c = Pi.Numeric.randomInt(10, 100) / 10;
                        b = c / Math.cos(alpha * Math.PI / 180);
                        a = c * Math.tan(alpha * Math.PI / 180);
                        questions.push('a');
                        questions.push('b');
                        reponses.push(a);
                        reponses.push(b);
                    }
                } else {
                    // Deux côtés.

                    // Cote est le cote inconnus.
                    let cote = ['a', 'b', 'c'][Pi.Numeric.randomInt(0, 2)];
                    if (cote === 'a') {
                        c = Pi.Numeric.randomInt(10, 100) / 10;
                        b = c + Pi.Numeric.randomInt(40) / 10;
                        a = Math.sqrt(b * b - c * c);
                        questions.push('a');
                        reponses.push(a);
                    } else if (cote === 'b') {
                        a = Pi.Numeric.randomInt(10, 100) / 10;
                        c = Pi.Numeric.randomInt(10, 100) / 10;
                        b = Math.sqrt(a * a + c * c);
                        questions.push('b');
                        reponses.push(b);
                    } else if (cote === 'c') {
                        a = Pi.Numeric.randomInt(10, 100) / 10;
                        b = a + Pi.Numeric.randomInt(40) / 10;
                        c = Math.sqrt(b * b - a * a);
                        questions.push('c');
                        reponses.push(c);
                    }

                    alpha = Math.asin(a / b) * 180 / Math.PI;
                    gamma = Math.acos(a / b) * 180 / Math.PI;

                    questions.push('\\alpha');
                    reponses.push(alpha);
                    questions.push('\\gamma');
                    reponses.push(gamma);
                }

                // Mise à jour des grandeurs.
                console.log(questions);
                this.labela = (questions.indexOf('a') === -1) ? a.toString() : 'a';
                this.labelb = (questions.indexOf('b') === -1) ? b.toString() : 'b';
                this.labelc = (questions.indexOf('c') === -1) ? c.toString() : 'c';
                this.labelalpha = (questions.indexOf('\\alpha') === -1) ? alpha.toString() : '\\a';
                this.labelgamma = (questions.indexOf('\\gamma') === -1) ? gamma.toString() : '\\c';

                //Choix de la réponse
                let n = Pi.Numeric.randomInt(0, questions.length - 1);

                console.log({
                    question: questions[n] + '=',
                    reponse: Math.round(reponses[n] * 10) / 10
                })
                return {
                    question: questions[n] + '=',
                    reponse: Math.round(reponses[n] * 10) / 10
                }
            }
        },
    }
</script>
