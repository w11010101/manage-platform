import data from '../../src/js/data';
console.log(data)
Vue.use(Vuex);
export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state: {
        navData:data,
        // count: 0,
        // num:123,
        // ids:"asdf",
        // arr:["a","b","c","d","e","f","g"],
        // obj:{
        //   a:11,
        //   b:22,
        //   c:33,
        //   d:44
        // },
        // todos: [
        //   { id: 1, text: 'id-1=true', done: true },
        //   { id: 2, text: 'id-2-false', done: false }
        // ],
        // inputVal:"表单处理12",
        pageTabsList:[{
            text:"标签1",
            id:991,
            router:""
        },{
            text:"标签2",
            id:992,
            router:""
        },{
            text:"标签3",
            id:993,
            router:""
        },{
            text:"标签4",
            id:994,
            router:""
        },{
            text:"标签5",
            id:995,
            router:""
        },{
            text:"标签6",
            id:996,
            router:""
        },{
            text:"标签7",
            id:997,
            router:""
        },{
            text:"标签9",
            id:998,
            router:""
        },]            //     [{ title:"标签一", router:"", id:"" }]
    },
    mutations: {
        setPageTabsList(state,objs){
            var repeat = false;
            if(!state.pageTabsList.length){
                state.pageTabsList.push(objs);
            }else{
                var i = 0;
                for(;i <= state.pageTabsList;i++){
                    var event = state.pageTabsList[i];
                    if(event.id === objs.id){
                        repeat = true;
                    }
                    event = null;
                }
                if(i+1 == state.pageTabsList.length && !repeat){
                    state.pageTabsList.push(objs);
                }
            }            
        },
        removePageTabsList(state,id){
            for(var i in state.pageTabsList){
                if(state.pageTabsList[i].id == id){
                    state.pageTabsList.splice(i,1);
                }
            };
        },
        increment (state) {
            state.count++;
        },
        incrementPayload (state,payload){
            state.count += payload.amount;  
        },
        updateInputVal(state,val){
            // state.inputVal = val
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