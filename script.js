
const app = new Vue({

  el:"#app",

  data: {
    
    listaIndirizzi:[],
    loaded:true,
  },


  methods: {
    
  listaIndirizziFunction(){
    for (let i = 0; i < 10; i++) {
    axios.get("https://flynn.boolean.careers/exercises/api/random/mail").
    then((res) => {
          this.listaIndirizzi.push(res.data.response)
        })
    }
    console.log(this.listaIndirizzi);
    return this.listaIndirizzi
  },

    loadedFunction(){
      this.loaded = false;
    }

  },

  mounted() {
    this.listaIndirizziFunction()

    setTimeout(() => {
      this.loadedFunction()
    }, 2000);
  },

})