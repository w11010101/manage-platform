import routes from './router.js';
Vue.use(VueRouter);

export default new VueRouter({
    // mode: 'history',
    // base: '../../dist/',
    mode: process.env.NODE_ENV === 'production'?'hash':'history',
    routes
})
