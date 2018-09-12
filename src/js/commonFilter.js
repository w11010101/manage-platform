var filter1 = Vue.filter('filter1',function(){
    console.log('this is filter1')
    console.log(arguments)
})
export default {
    filter1,
}