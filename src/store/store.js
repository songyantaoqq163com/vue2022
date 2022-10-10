import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store=new Vuex.Store({
    state:{
        name:'小明',
        age:'19'
    },
    mutations:{
        showPeople(state,msg){
            state.name=msg
        }
    }
})
export default store