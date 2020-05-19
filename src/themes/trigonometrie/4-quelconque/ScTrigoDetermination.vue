<template>
    <sc-boite processus style="min-height:600px" titre>
        <v-row>
            <v-col class="text-center" cols="12" md="6">
                <sc-boite-titre>Nombre de côté connus</sc-boite-titre>

                <v-btn-toggle
                        color="primary"
                        v-model="nombre_de_cotes"
                >
                    <v-btn @click="nombre_d_angles=null">0</v-btn>
                    <v-btn @click="nombre_d_angles=null">1</v-btn>
                    <v-btn @click="nombre_d_angles=null">2</v-btn>
                    <v-btn @click="nombre_d_angles=null">3</v-btn>
                </v-btn-toggle>
            </v-col>

            <v-col class="text-center" cols="12" md="6">
                <sc-boite-titre>Nombre d'angles connus</sc-boite-titre>

                <v-btn-toggle
                        color="primary"
                        v-model="nombre_d_angles"
                >
                    <v-btn>0</v-btn>
                    <v-btn @click="cotes_adjacents=null">1</v-btn>
                    <v-btn>2</v-btn>
                    <v-btn>3</v-btn>
                </v-btn-toggle>
            </v-col>

            <v-expand-transition>
                <v-col class="text-center" cols="12" v-show="nombre_de_cotes===2&&nombre_d_angles===1">
                    <sc-boite-titre>Les côtés connus sont-ils les deux adjacents à l'angle connu ?</sc-boite-titre>
                    <v-btn-toggle v-model="cotes_adjacents">
                        <v-btn>Oui</v-btn>
                        <v-btn>NOn</v-btn>
                    </v-btn-toggle>
                </v-col>
            </v-expand-transition>
        </v-row>

        <v-divider></v-divider>
        <!-- 0 côtés connus -->
        <v-expand-transition>
            <div v-show="nombre_de_cotes===0">
                Il n'est pas possible de calculer les dimensions d'un triangle
                sans connaître au moins la longueur d'un côté !
            </div>
        </v-expand-transition>

        <!-- 1 côté et 0 angle -->
        <v-expand-transition>
            <div v-show="nombre_de_cotes===1&&nombre_d_angles===0">
                Il n'est pas possible de calculer les dimensions d'un triangle
                en ne connaissant qu'un côté !
            </div>
        </v-expand-transition>

        <!-- 1 côté et 1 angle -->
        <v-expand-transition>
            <div v-show="nombre_de_cotes===1&&nombre_d_angles===1">
                Il n'est pas possible de calculer les dimensions d'un triangle
                en ne connaissant qu'un côté et un angle !
            </div>
        </v-expand-transition>

        <!-- 1 côté et deux angles -->
        <v-expand-transition>
            <div v-show="nombre_de_cotes===1&&nombre_d_angles===2">
                <sc-boite-etape>1. Calculer le troisième angle</sc-boite-etape>
                <k-math class="ml-5" display left>180 - 1^\text{er}\text{angle} - 2^\text{ème}\text{angle}</k-math>

                <sc-boite-etape>2. Utiliser le théorème du sinus</sc-boite-etape>
                <k-math class="ml-5" left>\frac{a}{sin\alpha}=\frac{b}{\sin\beta}=\frac{c}{\sin\gamma}</k-math>
                <k-math class="ml-5" left>\implies a = \frac{b\cdot \sin\alpha}{\sin\beta} = \frac{c\cdot \sin\alpha}{\sin\gamma}</k-math>
                <k-math class="ml-5" left>\implies b = \frac{a\cdot \sin\beta}{\sin\alpha} = \frac{c\cdot \sin\beta}{\sin\gamma}</k-math>
                <k-math class="ml-5" left>\implies c = \frac{a\cdot \sin\gamma}{\sin\alpha} = \frac{b\cdot \sin\gamma}{\sin\beta}</k-math>
            </div>
        </v-expand-transition>


        <!-- Tous les cas potentiellement impossible -->
        <!-- 1 côté et 3 angles -->
        <!-- 2 côtés et deux ou trois angles -->
        <!-- 3 côtés et 1 ou plusieurs angles -->
        <v-expand-transition>
            <div v-show="(nombre_de_cotes===1&&nombre_d_angles===3)||
            (nombre_de_cotes===3&&nombre_d_angles>0)||
            (nombre_de_cotes===2&&nombre_d_angles>=2)">
                <v-icon color="red" large>mdi-alert</v-icon>
                Il y a trop d'informations! Il est possible que le triangle ne soit pas constructible.

                <p class="mt-5">Vérifier que</p>

                <ul class="mt-5" v-show="nombre_de_cotes===1||nombre_de_cotes===2">
                    <li>la somme des angles vaut 180°</li>
                    <li>
                        <k-math left>\frac{a}{\sin\alpha}=\frac{b}{\sin\beta}=\frac{c}{\sin\gamma}</k-math>
                    </li>
                </ul>

                <ul class="mt-5" v-show="nombre_de_cotes===3">
                    <li>la somme des angles vaut 180°</li>
                    <li>
                        <k-math left>\frac{a}{\sin\alpha}=\frac{b}{\sin\beta}=\frac{c}{\sin\gamma}</k-math>
                    </li>
                </ul>

                <p class="mt-5">Continuer avec
                    <v-btn @click="nombre_d_angles=(nombre_de_cotes===1)?2:(nombre_de_cotes===3)?0:1"
                           v-html="(nombre_de_cotes===1)?'deux angles':(nombre_de_cotes===3)?'zéro angle':'un angle'"
                    ></v-btn>
                </p>
            </div>
        </v-expand-transition>

        <!-- 2 côtés et zéro angle -->
        <v-expand-transition>
            <div v-show="nombre_de_cotes===2&&nombre_d_angles===0">
                Il n'est pas possible de calculer les dimensions d'un triangle
                en ne connaissant que deux côtés !
            </div>
        </v-expand-transition>

        <!-- 2 côtés et un angle - cas compliqué -->
        <v-expand-transition>
            <!-- Les côtés sont adjacents -->
            <div v-show="nombre_de_cotes===2&&nombre_d_angles===1&&cotes_adjacents===0">
                <sc-boite-titre>1. Calculer le troisième côté avec le théorème du cosinus</sc-boite-titre>
                <k-math class="ml-5" left>a^2 = b^2 + c^2 -2\cdot b\cdot c \cdot \cos\alpha</k-math>
                <k-math class="ml-5" left>b^2 = c^2 + a^2 -2\cdot c\cdot a \cdot \cos\beta</k-math>
                <k-math class="ml-5" left>c^2 = a^2 + b^2 -2*\cdot a\cdot b \cdot \cos\gamma</k-math>

                <sc-boite-titre>2. Calculer un deuxième angle avec le théorème du cosinus (version modifiée)</sc-boite-titre>
                <k-math class="ml-5" display left>\cos(\alpha)=\frac{b^2+c^2-a^2}{2bc}</k-math>
                <k-math class="ml-5" display left>\cos(\beta)=\frac{c^2+a^2-b^2}{2ca}</k-math>
                <k-math class="ml-5" display left>\cos(\gamma)=\frac{a^2+b^2-c^2}{2ab}</k-math>

                <sc-boite-titre>3. Calculer le troisième angle</sc-boite-titre>
                <k-math class="ml-5" display left>180 - 1^\text{er}\text{angle} - 2^\text{ème}\text{angle}</k-math>
            </div>
        </v-expand-transition>
        <v-expand-transition>
            <div v-show="nombre_de_cotes===2&&nombre_d_angles===1&&cotes_adjacents===1">
                <sc-boite-titre>1. Calculer un deuxième angle avec le théorème du sinus</sc-boite-titre>
                <k-math class="mt-5" left>\sin(\alpha_1)=\frac{a \cdot \sin\beta}{b} = \frac{a\cdot \sin\gamma}{c}\implies \alpha_1 = \sin^{-1}(\dots)</k-math>
                <k-math class="mt-5" left>\sin(\beta_1)=\frac{b \cdot \sin\alpha}{a} = \frac{b\cdot \sin\gamma}{c}\implies \beta_1 = \sin^{-1}(\dots)</k-math>
                <k-math class="mt-5" left>\sin(\gamma_1)=\frac{c \cdot \sin\alpha}{a} = \frac{c\cdot \sin\beta}{b}\implies \gamma_1 = \sin^{-1}(\dots)</k-math>

                <sc-boite-titre>2. Calculer la deuxième solution</sc-boite-titre>
                <k-math class="ml-5" left>180-1^\text{ère}\text{solution}</k-math>

                <sc-boite-titre>3. Calculer le troisième angle</sc-boite-titre>
                <v-icon class="ml-5 mr-2" color="red" dense>mdi-alert</v-icon>
                A faire pour chaque solution !
                <k-math class="ml-5" left>180 - 1^\text{er}\text{angle} - 2^\text{ème}\text{angle}</k-math>

                <sc-boite-titre>4. Calculer le troisième côté</sc-boite-titre>
                <v-icon class="ml-5 mr-2" color="red" dense>mdi-alert</v-icon>
                A faire pour chaque solution !
                <k-math class="ml-5" left>\frac{a}{sin\alpha}=\frac{b}{\sin\beta}=\frac{c}{\sin\gamma}</k-math>
                <k-math class="ml-5" left>\implies a = \frac{b\cdot \sin\alpha}{\sin\beta} = \frac{c\cdot \sin\alpha}{\sin\gamma}</k-math>
                <k-math class="ml-5" left>\implies b = \frac{a\cdot \sin\beta}{\sin\alpha} = \frac{c\cdot \sin\beta}{\sin\gamma}</k-math>
                <k-math class="ml-5" left>\implies c = \frac{a\cdot \sin\gamma}{\sin\alpha} = \frac{b\cdot \sin\gamma}{\sin\beta}</k-math>
            </div>
        </v-expand-transition>


        <!-- 3 côtés -->
        <v-expand-transition>
            <div v-show="nombre_de_cotes===3&&nombre_d_angles===0">
                <sc-boite-etape>1. Calculer \(\alpha\)</sc-boite-etape>
                <k-math class="ml-5" display left>\cos(\alpha)=\frac{b^2+c^2-a^2}{2bc}</k-math>

                <sc-boite-etape>2. Calculer \(\beta\)</sc-boite-etape>
                <k-math class="ml-5" display left>\cos(\beta)=\frac{c^2+a^2-b^2}{2ca}</k-math>

                <sc-boite-etape>3. Calculer \(\gamma\)</sc-boite-etape>
                <k-math class="ml-5" left>\gamma = 180 - \alpha - \beta</k-math>

            </div>
        </v-expand-transition>

    </sc-boite>
</template>
<script>
    import ScBoite from "../../../components/Boxes/ScBoite"
    import ScBoiteTitre from "../../../components/Boxes/ScBoiteTitre";
    import ScBoiteEtape from "../../../components/Boxes/ScBoiteEtape";
    import renderMathInElement from "katex/dist/contrib/auto-render.min";
    import KMath from "../../../components/Pi/k-math";


    export default {
        name: 'sc-trigo-determination',
        components: {KMath, ScBoiteEtape, ScBoiteTitre, ScBoite},
        data() {
            return {
                nombre_de_cotes: null,
                nombre_d_angles: null,
                cotes_adjacents: null
            }
        },
        methods: {},
        mounted() {
            renderMathInElement(this.$el)
        }
    }
</script>