import Vue from 'vue'
import Router from 'vue-router'
import routes from 'vue-auto-routing'
import {createRouterLayout} from 'vue-router-layout'

Vue.use(Router);

const RouterLayout = createRouterLayout(layout => {
    return import('@/layouts/' + layout + '.vue')
});

// Add custom routes.
let myRoutes = [
    {
        name: 'geometrie-vectorielle',
        shortcut: 'gv'
    },
    {
        name: 'trigonometrie',
        shortcut: 'trigo'
    },
    {
        name: 'equations-2eme-degre',
        shortcut: 'equ2'
    },
    {
        name: 'statistiques-descriptives',
        shortcut: 'stats'
    }
]

for (let r of myRoutes) {
    if (r.shortcut !== '') {
        routes.push(
            {
                name: `${r.name}-shortcut`,
                path: `/${r.shortcut}`,
                redirect: `/${r.name}`
            }
        );
    }
    routes.push(
        {
            name: `${r.name}`,
            path: `/${r.name}/:code?`,
            component: () => import(/* webpackChunkName: "theme" */`@/themes/${r.name}/index.vue`),
        }
    );
}

routes.push({
    name: 'page-erreur',
    path: '*',
    component: () => import('@/pages/oups.vue')
})

const scRouter = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: RouterLayout,
            children: routes
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                selector: to.hash,
                offset: {x: 0, y: 80}
                // , offset: { x: 0, y: 10 }
            }
        }

        if (savedPosition) {
            return savedPosition
        } else {
            return {x: 0, y: 0}
        }
    }
});

export default scRouter;