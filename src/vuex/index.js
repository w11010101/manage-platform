import navData from '@/js/navData';
console.log(navData)
Vue.use(Vuex);
export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state: {
        navData,
        count: 0,
        num:123,
        // ids:"asdf",
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
        ],
        // inputVal:"表单处理12",
        pageTabsList:[{
            name:'layoutView',
            id:0,
            router:"/",
            props:null
        }],
        // pageTabsList:[{
        //     text:"标签1",
        //     id:991,
        //     href:""
        // },{
        //     text:"标签2",
        //     id:992,
        //     href:""
        // },{
        //     text:"标签3",
        //     id:993,
        //     href:""
        // },{
        //     text:"标签4",
        //     id:994,
        //     href:""
        // }]            //     [{ title:"标签一", router:"", id:"" }]
    },
    mutations: {
        setPageTabsList(state,objs){
            var repeat = false;
            if(!state.pageTabsList.length){
                state.pageTabsList.push(objs);
            }else{
                // var i = 0;
                for(var i = 0;i < state.pageTabsList.length;i++){
                    var event = state.pageTabsList[i];
                    if(event.id === objs.id){
                        repeat = true;
                    }
                    event = null;
                }
                // console.log('i = ',i);
                // console.log(state.pageTabsList.length);
                console.log(objs); 
                if(i == state.pageTabsList.length && !repeat){
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
        removeALLPageTabsList(state){
            state.pageTabsList = [];
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
            // option={
            //     url:'',
            //     callback:function(){

            //     }
            // }
            // $.ajax({
            //     url,
            //     callback,
            // })
            return function(resolve,reject){
                setTimeout(function(){
                    resolve(option);
                },option.second)
            }
        }
    }
})