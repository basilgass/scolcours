<template>
    <div :class="{'d-inline':!(display||left),'d-block':display||left}">
        <span class="raw-math d-none">
            <slot></slot>
        </span>
        <span :class="{'katex-left':left}" ref="math" v-html="parsedMath"></span>
    </div>
</template>

<script>
    /*import katex from "katex";*/
    import renderMathInElement from "katex/dist/contrib/auto-render.min";

    export default {
        name: "k-math",
        props: {
            inline: {
                type: Boolean,
                default: false,
            },
            display: {
                type: Boolean,
                default: false
            },
            left: {
                type: Boolean,
                default: false
            },
            asRaw: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                parsedMath: ''
            }
        },
        methods: {
            wrapMath(m, disp) {
                if ((this.display || this.left || disp === true) && this.inline === false) {
                    return `\\[${m}\\]`;
                } else {
                    return `\\(${m}\\)`;
                }
            },
            updateMath() {
                // Parse the maths.
                if (this.$slots.default === undefined) {
                    this.parsedMath = '';
                    renderMathInElement(this.$refs['math']);
                    return;
                }
                let m = this.$slots.default[0].text;

                // No formating when doing inline !
                if (this.inline) {
                    this.parsedMath = this.wrapMath(m);
                    renderMathInElement(this.$refs['math']);
                    return;
                }


                if (this.asRaw || (m.indexOf('=') === -1 && m.indexOf('implies'))) {
                    this.parsedMath = this.wrapMath(m);
                } else {
                    m = m.split(/\\{2}|,/);
                    // Multi line equation.
                    let mequ = [];
                    for (let line of m) {
                        if (line.indexOf('&') === -1) {
                            if (line.indexOf('\\implies') !== -1) {
                                mequ.push(line.replace('\\implies', '&\\implies'));
                            } else if (line.indexOf('=') !== -1) {
                                mequ.push(line.replace('=', '&='));
                            } else {
                                mequ.push(line);
                            }
                        } else {
                            mequ.push(line);
                        }
                    }

                    this.parsedMath = this.wrapMath(`
                    \\begin{aligned}
                    ${mequ.join('\\\\')}
                    \\end{aligned}
                    `, true)
                }

                renderMathInElement(this.$refs['math']);
            }
        },
        mounted() {
            this.updateMath();
        },
        updated() {
            this.updateMath();
        }
    }
</script>

<style scoped>
    .katex-left .katex {
        text-align: left !important;
    }
</style>