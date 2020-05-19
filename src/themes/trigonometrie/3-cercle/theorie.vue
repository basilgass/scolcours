<template>
    <section>
        <sc-titre-section>Cercle trigonométrique</sc-titre-section>

        <v-row justify="center">
            <v-col cols="12" lg="6" md="8">
                <v-card class="" tile>
                    <trigo-cercle drag></trigo-cercle>
                </v-card>
            </v-col>
        </v-row>

        <sc-titre-partie>Relations entre les rapports trigonométriques</sc-titre-partie>

        <v-row class="mb-10 d-flex align-center" justify="space-around">
            <v-col :lg="relation.lg.svg" :md="relation.md.svg" cols="12" order="2" order-md="1">
                <v-card tile>
                    <pi-svg
                            :dimension="22"
                            :geomDraw="relation1"
                    ></pi-svg>
                </v-card>
            </v-col>
            <v-col :lg="relation.lg.prop" :md="relation.md.prop" cols="12" order="1" order-md="2">
                <sc-boite propriete>
                    <k-math>
                        \cos(-\alpha) = \cos(\alpha),
                        \sin(-\alpha) = - \sin(\alpha),
                        \tan(-\alpha) = -\tan(\alpha),
                        \cot(-\alpha) = -\cot(\alpha)
                    </k-math>
                </sc-boite>
            </v-col>
        </v-row>
        <v-divider/>
        <v-row class="my-10 d-flex align-center" justify="space-around">
            <v-col :lg="relation.lg.svg" :md="relation.md.svg" cols="12" order="2" order-md="2">
                <v-card tile>
                    <pi-svg
                            :dimension="22"
                            :geomDraw="relation2"
                    ></pi-svg>
                </v-card>
            </v-col>
            <v-col :lg="relation.lg.prop" :md="relation.md.prop" cols="12" order="1" order-md="1">
                <sc-boite propriete>
                    <k-math>
                        \cos(\pi-\alpha) = -\cos(\alpha),
                        \sin(\pi-\alpha) = \sin(\alpha),
                        \tan(\pi-\alpha) = -\tan(\alpha),
                        \cot(\pi-\alpha) = -\cot(\alpha),,
                        \cos(180-\alpha) = -\cos(\alpha),
                        \sin(180-\alpha) = \sin(\alpha),
                        \tan(180-\alpha) = -\tan(\alpha),
                        \cot(180-\alpha) = -\cot(\alpha)
                    </k-math>
                </sc-boite>
            </v-col>
        </v-row>
        <v-divider/>
        <v-row class="my-10 d-flex align-center" justify="space-around">
            <v-col :lg="relation.lg.svg" :md="relation.md.svg" cols="12" order="2" order-md="1">
                <v-card tile>
                    <pi-svg
                            :dimension="22"
                            :geomDraw="relation3"
                    ></pi-svg>
                </v-card>
            </v-col>

            <v-col :lg="relation.lg.prop" :md="relation.md.prop" cols="12" order="1" order-md="2">
                <sc-boite propriete>
                    <k-math>
                        \cos(\pi+\alpha) = -\cos(\alpha),
                        \sin(\pi+\alpha) = -\sin(\alpha),
                        \tan(\pi+\alpha) = \tan(\alpha),
                        \cot(\pi+\alpha) = \cot(\alpha),,
                        \cos(180+\alpha) = -\cos(\alpha),
                        \sin(180+\alpha) = -\sin(\alpha),
                        \tan(180+\alpha) = \tan(\alpha),
                        \cot(180+\alpha) = \cot(\alpha)
                    </k-math>
                </sc-boite>
            </v-col>
        </v-row>
        <v-divider/>
        <v-row class="my-10 d-flex align-center" justify="space-around">
            <v-col :lg="relation.lg.svg" :md="relation.md.svg" cols="12" order="2" order-md="2">
                <v-card tile>
                    <pi-svg
                            :dimension="22"
                            :geomDraw="relation4"
                    ></pi-svg>
                </v-card>
            </v-col>
            <v-col :lg="relation.lg.prop" :md="relation.md.prop" cols="12" order="1" order-md="1">
                <sc-boite propriete>
                    <k-math>
                        \cos\left(\frac{\pi}{2}-\alpha\right) = \sin(\alpha),
                        \sin\left(\frac{\pi}{2}-\alpha\right) = \cos(\alpha),
                        \tan\left(\frac{\pi}{2}-\alpha\right) = \cot(\alpha),
                        \cot\left(\frac{\pi}{2}-\alpha\right) = \tan(\alpha),,
                        \cos(90-\alpha) = \sin(\alpha),
                        \sin(90-\alpha) = \cos(\alpha),
                        \tan(90-\alpha) = \cot(\alpha),
                        \cot(90-\alpha) = \tan(\alpha)
                    </k-math>
                </sc-boite>
            </v-col>
        </v-row>
        <v-divider/>
        <v-row class="my-10 d-flex align-center" justify="space-around">
            <v-col :lg="relation.lg.svg" :md="relation.md.svg" cols="12" order="2" order-md="1">
                <v-card tile>
                    <pi-svg
                            :dimension="22"
                            :geomDraw="relation5"
                    ></pi-svg>
                </v-card>
            </v-col>
            <v-col :lg="relation.lg.prop" :md="relation.md.prop" cols="12" order="1" order-md="2">
                <sc-boite propriete>
                    <k-math>
                        \cos\left(\frac{\pi}{2}+\alpha\right) = -\sin(\alpha),
                        \sin\left(\frac{\pi}{2}+\alpha\right) = \cos(\alpha),
                        \tan\left(\frac{\pi}{2}+\alpha\right) = -\cot(\alpha),
                        \cot\left(\frac{\pi}{2}+\alpha\right) = -\tan(\alpha),,
                        \cos(90+\alpha) = -\sin(\alpha),
                        \sin(90+\alpha) = \cos(\alpha),
                        \tan(90+\alpha) = -\cot(\alpha),
                        \cot(90+\alpha) = -\tan(\alpha)
                    </k-math>
                </sc-boite>
            </v-col>
        </v-row>
    </section>
</template>
<script>
    import ScTitreSection from "../../../components/Titles/ScTitre1Section";
    import TrigoCercle from "../../../components/Pi/pi-trigo-cercle";
    import ScTitrePartie from "../../../components/Titles/ScTitre2Partie";
    import KMath from "../../../components/Pi/k-math";
    import PiSvg from "../../../components/Pi/pi-svg";
    import ScBoite from "../../../components/Boxes/ScBoite";

    export default {
        name: 'sc-trigo-cercle',
        components: {ScBoite, PiSvg, KMath, ScTitrePartie, TrigoCercle, ScTitreSection},
        data() {
            return {
                relation: {
                    md: {
                        svg: 6,
                        prop: 6
                    },
                    lg: {
                        svg: 5,
                        prop: 5
                    }
                }
            }
        },
        methods: {
            relation1(geom) {
                let r = 250 / 11 * 10, angle = 120
                geom.mainGrid.setOrigin(11, 11).showAxis();
                geom.addPoint(0, 0, 'O')
                geom.circle('O', r);

                geom.addPoint(
                    10 * Math.cos(angle * Math.PI / 180),
                    10 * Math.sin(angle * Math.PI / 180),
                    'M_1').showLabel();
                geom.addPoint('sin_1').projectionY('M_1').hideShape()
                geom.addPoint('cos_1').projectionX('M_1').hideShape()
                geom.arc('O', 60, ['OxMax', 'O', 'M_1'], 'alpha').marker()

                geom.addPoint('M_2').polar('O', (geom) => {
                    return -geom.getFigure('alpha').angle
                }, r).showLabel();
                geom.addPoint('sin_2').projectionY('M_2').hideShape()
                geom.addPoint('cos_2').projectionX('M_2').hideShape()
                geom.arc('O', 50, ['M_2', 'O', 'OxMax'], 'beta').marker('start').color('blue')

                geom.segment('M_1', 'O').width(2);
                geom.segment('M_2', 'O').width(2).color('blue');
                geom.segment('M_1', 'sin_1').dash(8).color('orange')
                geom.segment('M_2', 'sin_2').dash(8).color('orange')
                geom.segment('M_1', 'cos_1').dash(8).color('green')
                geom.segment('M_2', 'cos_2').dash(8).color('green')

                geom.segment('cos_1', 'O').color('orange').width(6)
                geom.segment('sin_1', 'O').color('green').width(6)
                geom.segment('sin_2', 'O').color('green').width(6).dash('8 2')

                geom.getPoint('M_1').makeDraggable().setDistanceTo(geom.getPoint('O'))

            },
            relation2(geom) {
                this.relationGen(geom, (geom) => {
                    return 180 - geom.getFigure('alpha').angle
                });
            },
            relation3(geom) {
                this.relationGen(geom, (geom) => {
                    return 180 + geom.getFigure('alpha').angle
                });
            },
            relation4(geom) {
                this.relationGen(geom, (geom) => {
                    return 90 - geom.getFigure('alpha').angle
                });
            },
            relation5(geom) {
                this.relationGen(geom, (geom) => {
                    return 90 + geom.getFigure('alpha').angle
                });
            },
            relationGen(geom, fn) {
                let r = 250 / 11 * 10, angle = 40
                geom.mainGrid.setOrigin(11, 11).showAxis();
                geom.addPoint(0, 0, 'O')
                geom.circle('O', r);

                geom.addPoint(
                    10 * Math.cos(angle * Math.PI / 180),
                    10 * Math.sin(angle * Math.PI / 180),
                    'M_1').showLabel();
                geom.addPoint('cos_1').projectionX('M_1').hideShape()
                geom.addPoint('sin_1').projectionY('M_1').hideShape()
                geom.arc('O', 60, ['OxMax', 'O', 'M_1'], 'alpha').marker()

                geom.addPoint('M_2').polar('O', fn, r).showLabel();
                geom.addPoint('cos_2').projectionX('M_2').hideShape()
                geom.addPoint('sin_2').projectionY('M_2').hideShape()
                geom.arc('O', 50, ['OxMax', 'O', 'M_2'], 'beta').marker().color('blue')

                geom.segment('M_1', 'O').width(2);
                geom.segment('M_2', 'O').width(2).color('blue');
                geom.segment('M_1', 'sin_1').dash(8).color('orange')
                geom.segment('M_2', 'sin_2').dash(8).color('orange')
                geom.segment('M_1', 'cos_1').dash(8).color('green')
                geom.segment('M_2', 'cos_2').dash(8).color('green')

                geom.segment('cos_1', 'O').color('orange').width(6)
                geom.segment('cos_2', 'O').color('orange').width(6).dash('8 2')
                geom.segment('sin_1', 'O').color('green').width(6)
                geom.segment('sin_2', 'O').color('green').width(6).dash(8)

                geom.getPoint('M_1').makeDraggable().setDistanceTo(geom.getPoint('O'))
            }
        },
    }
</script>