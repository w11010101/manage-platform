
import routes from './router';
Vue.use(VueRouter);

export default new VueRouter({
    mode: 'history',
    // base: __dirname,
    routes
})
