import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        count: 0,
        num:123,
        ids:"asdf",
        arr:["a","b","c","d","e","f","g"],
        obj:{
          a:11,
          b:22,
          c:33,
          d:44
        },
        todos: [
          { id: 1, text: 'id-1=true', done: true },
          { id: 2, text: 'id-2-false', done: false }
        ]
    },
    mutations: {
        increment (state) {
            state.count++
        }
    },
    getters:{
        doneTodos: state => {
            return state.todos.filter(todo => todo.id==2)
        },
        myAjax:(state) =>(option)=>{
            return function(resolve,reject){
                setTimeout(function(){
                    resolve(option);
                },option.second)
            }
        }
    }
})