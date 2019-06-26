import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const vueRouter = new Router({
    $breadCrumbs: ['main'],
    mode: "hash",
    routes: [
        {
            path: "/login",
            name: "login",
            component: () => import("@/components/ViewLogin"),
        }
        ,
        {
            path: "/",
            name: "main",
            meta: {
                title: "Home"
            },

            component: () => import("@/components/Main"),
            //redirect: {name: 'sshList'},
            children: [
                {
                    path: "sftp/:ID/:name/:user",
                    name: "sftp",
                    props: true,
                    meta: {
                        breads: [{name: 'main', title: 'Home'}, {name: 'ssh', title: 'Ssh'}, {
                            name: 'sftp',
                            title: 'Sftp'
                        }],
                        title: "Sftp"
                    },
                    component: () => import("@/components/ViewSftp")
                },
                {
                    path: "ssh",
                    name: "ssh",
                    meta: {
                        breads: [{name: 'main', title: 'Home'}, {name: 'ssh', title: 'Ssh/Sftp'}],
                        title: "Ssh/Sftp"
                    },
                    component: () => import("@/components/ViewSsh")
                },
                {
                    path: "term-log",
                    name: "termLog",
                    meta: {
                        breads: [{name: 'main', title: 'Home'}, {name: 'termLog', title: 'SshReplay'}],
                        title: "SshReplay"
                    },
                    component: () => import("@/components/ViewTermLog")
                },
                {
                    path: "user",
                    name: "user",
                    meta: {
                        breads: [{name: 'main', title: 'Home'}, {name: 'user', title: 'User'}],
                        title: "Users"
                    },
                    component: () => import("@/components/ViewUser")
                },
                {
                    path: "ginbro",
                    name: "ginbro",
                    meta: {
                        breads: [{name: 'main', title: 'Home'}, {name: 'ginbro', title: 'Ginbro'}],
                        title: "Ginbro"
                    },
                    component: () => import("@/components/ViewGinbro")
                },
                {
                    path: "nes",
                    name: "nes",
                    meta: {
                        breads: [{name: 'main', title: 'Home'}, {name: 'nes', title: 'Nes'}],
                        title: "NES"
                    },
                    component: () => import("@/components/ViewNes")
                },
                {
                    path: "slog",
                    name: "slog",
                    meta: {
                        breads: [{name: 'main', title: 'Home'}, {name: 'slog', title: 'slog'}],
                        title: "Term Slack Log"
                    },
                    component: () => import("@/components/ViewSlackLog")
                }
            ]
        }
    ]
});


export default vueRouter;
