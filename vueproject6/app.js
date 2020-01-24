let kyepress = new Vue({
  el:"#my-app",
  data:{
     character:"",
     name     :"sanjay",
     email    :"sanjay@gmail.com"
  },
  methods:{
    keypressfunction(event){
        console.log(event);
        this.character = event.key;
    },
    runme(){
      console.log("This is first method");
    }
  }
});
