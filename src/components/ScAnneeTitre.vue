<template>
    <div>
        <div class="display-3 mt-10">
            <span v-if="ecg">Ecole de culture générale</span>
            <span v-else>Ecole de maturité</span>
            <br/>
            {{annee}}<sup v-if="annee===1">ère</sup><sup v-else>ème</sup> année
            <div>
                <slot></slot>
            </div>
        </div>
        <sc-breadcrumbs></sc-breadcrumbs>
    </div>
</template>
<script>
    import ScBreadcrumbs from "./UserInterface/ScBreadcrumbs"

    export default {
        name: 'ScAnneeTitre',
        components: {ScBreadcrumbs},
        props: {
            annee: {type: Number, default: 1},
            ecg: {type: Boolean, default: false}
        }
    }
</script>
