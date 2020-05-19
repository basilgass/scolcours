<template>
    <section>
        <sc-titre-section>Mesure des angles</sc-titre-section>

        <v-row justify="center">
            <v-col cols="12" sm="5">
                <sc-boite definition>
                    L'angle au centre qui intercepte <span class="green--text">un arc de cercle</span> de longueur égale au <span class="red--text">rayon</span> mesure <strong>1 radian</strong>
                </sc-boite>

            </v-col>
            <v-col cols="12" sm="7">
                <v-sheet class="mx-auto" max-width="350">
                    <pi-trigo-radian/>
                </v-sheet>
            </v-col>
        </v-row>

        <sc-titre-partie>Conversion degrés - radians</sc-titre-partie>

        <v-row justify="center">
            <v-col cols="12" sm="5">
                <p style="height: 50px">Angle en degré: <span v-html="kDegree"></span></p>
                <p style="height:50px">Angle en radians: <span v-html="kRadian"></span></p>

                <p>Conversion de degrés à radians</p>
                <p v-html="kDegreeARadian"></p>

                <p>Conversion de radians à degrés</p>
                <p v-html="kRadianADegree"></p>
            </v-col>
            <v-col cols="12" sm="7">
                <v-card tile>
                    <sc-trigo-angle v-on:angleUpdated="mesureAngle=$event"/>
                </v-card>
            </v-col>
        </v-row>

        <sc-titre-partie>Exercices</sc-titre-partie>

        <v-row justify="space-around">
            <v-col cols="12" lg="4" md="6">
                <sc-exercice-simple
                        :question="degreARadians"
                        donnee="Calculer la valeur exacte de l'angle en radians"
                        exemple="Exemple: 4p/9"
                        formatage
                        titre="Convertir des degrés en radians"
                />
            </v-col>
            <v-col cols="12" lg="4" md="6">
                <sc-exercice-simple
                        :question="radiansADegre"
                        donnee="Calculer la valeur exacte de l'angle en degrés"
                        exemple="Exemple: 55"
                        formatage
                        titre="Convertir des radians en degrés"
                />
            </v-col>
        </v-row>

        <sc-titre-partie>Système sexagésimal</sc-titre-partie>
        <v-row justify="space-between">
            <v-col cols="12" lg="5" md="6">
                <p>Un degré se subdivise en
                    60 minutes \( \left(\,'\,\right) \), chaque minute en
                    60 secondes \( \left(\,''\,\right) \).</p>

                <p>Le système sexagésimal est souvent utilisé dans les GPS ou la cartographie.
                    Par exemple, le gymnase d'Yverdon se trouve aux coordonnées:


                </p>
                <v-simple-table>
                    <tr>
                        <td>Latitude</td>
                        <td>\( 46°46'48.3''\text{N} = 46.780093 \)</td>
                    </tr>
                    <tr>
                        <td>Longitude</td>
                        <td>\( 6°40'03.2''\text{E} = 6.667556 \)</td>
                    </tr>
                </v-simple-table>

            </v-col>

            <v-col cols="12" lg="5" md="6">
                <sc-boite>
                    <sc-boite-titre>Utilisation de la calculatrice</sc-boite-titre>
                    <div>\( 46.39 \) <code>DD->DMS</code> donne le résultat \( 46°23'24'' \)</div>
                </sc-boite>

            </v-col>
            <v-col cols="12" lg="5" md="6">

                <sc-titre-sous-titre>Sexagésimal à décimal</sc-titre-sous-titre>
                <v-text-field label="Angle en sexagésimal" outlined v-model="anglePourDegres"></v-text-field>
                <p>
                    <k-math display>
                        {{anglePourDegresCalculs}}
                    </k-math>
                </p>
            </v-col>
            <v-col cols="12" lg="5" md="6">
                <sc-titre-sous-titre>Décimal à sexagésimal</sc-titre-sous-titre>
                <v-text-field label="Angle en degré" outlined v-model="anglePourDMS"></v-text-field>
                <h4>Calculs détaillés</h4>
                <p>
                    <k-math>
                        {{anglePourDMSCalculs}}
                    </k-math>
                </p>
            </v-col>
        </v-row>

        <sc-titre-partie>Longueur d'un arc de cercle, aire d'un secteur circulaire</sc-titre-partie>

        <v-row justify="space-between">
            <v-col cols="12" lg="5" md="7">
                <sc-boite theoreme>
                    <v-simple-table>
                        <thead>
                        <tr>
                            <th>Unité</th>
                            <th class="text-center">
                                <v-chip color="green">Arc de cercle</v-chip>
                            </th>
                            <th class="text-center">
                                <v-chip color="rgba(186,34,178,0.2)">Secteur circulaire</v-chip>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <th>Radian</th>
                            <th>\[ l=r\alpha \]</th>
                            <th>\[ \sigma = \dfrac{1}{2}r^2\alpha \]</th>
                        </tr>
                        <tr>
                            <th>Degré</th>
                            <th>\[ l = \dfrac{2\pi \cdot r \cdot \alpha}{360} \]</th>
                            <th>\[ \sigma = \dfrac{\pi \cdot r^2 \cdot \alpha}{360} \]</th>
                        </tr>
                        </tbody>
                    </v-simple-table>
                </sc-boite>
            </v-col>
            <v-col cols="12" lg="5" md="5">
                <v-sheet class="mx-auto" max-width="350">
                    <pi-trigo-secteur></pi-trigo-secteur>
                </v-sheet>
            </v-col>
        </v-row>

    </section>
</template>
<script>
    import ScTitreSection from "../../../components/Titles/ScTitre1Section"
    import ScTrigoAngle from "../../../components/Pi/pi-trigo-mesure-conversion"
    import {Pi} from "../../../../public/js/pi";
    import katex from "katex";
    import ScTitrePartie from "../../../components/Titles/ScTitre2Partie";
    import scBoite from "../../../components/Boxes/ScBoite";
    import PiTrigoRadian from "../../../components/Pi/pi-trigo-radian";
    import ScExerciceSimple from "../../../components/Exercices/ScExerciceSimple";
    import ScBoiteTitre from "../../../components/Boxes/ScBoiteTitre";
    import ScTitreSousTitre from "../../../components/Titles/ScTitre3SousTitre";
    import PiTrigoSecteur from "../../../components/Pi/pi-trigo-secteur";
    import KMath from "../../../components/Pi/k-math";

    export default {
        name: 'trigo-mesure-conversion',
        components: {KMath, PiTrigoSecteur, ScTitreSousTitre, ScBoiteTitre, ScExerciceSimple, PiTrigoRadian, scBoite, ScTitrePartie, ScTitreSection, ScTrigoAngle},
        data: function () {
            return {
                mesureAngle: 30,
                anglePourDegres: "46°46'48.3''",
                anglePourDMS: 3.141593
            }
        },
        computed: {
            kAnglePi: function () {
                return new Pi.Fraction().parseByInteger(this.mesureAngle, 180).reduce();
            },
            kRadian: function () {
                if (this.mesureAngle === 0) {
                    return katex.renderToString('0');
                } else {
                    let F = this.kAnglePi;

                    if (F.denominator !== 1) {

                        return katex.renderToString(
                            `\\dfrac{
                        ${F.numerator === 1 ? '' : F.numerator}\\pi
                    }{
                        ${F.denominator}
                    }`
                        );
                    } else {
                        return katex.renderToString(`${F.numerator === 1 ? '' : F.numerator}\\pi`)
                    }
                }
            },
            kDegree: function () {
                return katex.renderToString(this.mesureAngle + '°');
            },
            kDegreeARadian: function () {
                return katex.renderToString(
                    `${this.mesureAngle} \\cdot \\textcolor{red}{\\dfrac{\\pi}{180}} = \\dfrac{{${this.mesureAngle}}\\cdot \\pi }{180} =`
                ) + this.kRadian
            },
            kRadianADegree: function () {
                let F = this.kAnglePi;

                return this.kRadian + katex.renderToString(
                    ` \\cdot \\textcolor{red}{\\dfrac{180}{\\pi}} = \\dfrac{${F.numerator}\\cdot 180}{${F.denominator}} = ${this.mesureAngle}`
                );
            },
            anglePourDegresCalculs: function () {
                return this.calculsSexagesimalADegre(this.anglePourDegres);
            },
            anglePourDMSCalculs: function () {
                return this.calculsDegresASexagesimal(this.anglePourDMS);
            }
        },
        methods: {
            degreARadians() {
                let A = Pi.Numeric.randomInt(1, 72) * 5,
                    F = new Pi.Fraction().parseByInteger(A, 180).reduce();

                return {
                    question: `${A}=`,
                    reponse: `${F.numerator}p/${F.denominator}`
                }
            },
            radiansADegre() {
                let A = Pi.Numeric.randomInt(1, 72) * 5,
                    F = new Pi.Fraction().parseByInteger(A, 180).reduce();

                return {
                    question: `\\dfrac{${F.numerator}\\pi}{${F.denominator}}=`,
                    reponse: `${A}`
                }
            },
            calculsSexagesimalADegre(deg) {
                // Accepter deux formes d'écritures:
                // Avec les symboles courants °, ', " ou ''
                // Avec des espaces.
                let d, m, s;
                if (deg.indexOf('°') !== -1) {
                    let matches = [...deg.matchAll(/(\d+)°(\d+)'(\d+.?\d+)"?'{0,2}/g)]
                    if (matches.length > 0) {
                        if (matches[0].length === 4) {
                            d = +matches[0][1];
                            m = +matches[0][2];
                            s = +matches[0][3];
                        }
                    }
                } else if (deg.indexOf(" ") !== -1) {
                    let matches = deg.split(' ');
                    if (matches.length === 3) {
                        d = +matches[0];
                        m = +matches[1];
                        s = +matches[2];
                    }
                }

                if (d === undefined) {
                    return '\\text{Le nombre sexagésimal n\'est pas conforme.}'
                } else {
                    return `${deg} = ${d}+\\frac{${m}}{60}+\\frac{${s}}{3600}=${(d + m / 60 + s / 3600).toFixed(5)}`
                }
            },
            calculsDegresASexagesimal(deg) {
                if (isNaN(deg)) {
                    return ''
                } else {
                    let d, m, s;
                    d = Math.trunc(deg);
                    m = Math.trunc((deg - d) * 60);
                    s = Math.round(((deg - d) * 60 - m) * 60 * 10) / 10
                    return `
                    ${deg} = ${d} + ${(deg - d).toFixed(4)},
                    = ${d} + \\frac{${((deg - d) * 60).toFixed(4)}}{60},
                    = ${d} + \\frac{${m}}{60} + \\frac{${((deg - d) * 60 - m).toFixed(4)}}{60},
                    = ${d} + \\frac{${m}}{60} + \\frac{${s}}{3600},,
                    \\implies \\underline{\\underline{${d}°${m}'${s}''}}`;
                }
            }
        },
    }
</script>
<style scoped>
    th, td {
        font-size: 100%;
    }

    tbody tr {
        height: 75px
    }
</style>