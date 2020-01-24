let keypress = new Vue({
  el  :"#my-app",
  data:{
     isActive:true,
     count:3,
     
  },
  methods:{
       toggleClass()
       {
         this.isActive = !this.isActive;
       },
       number()
       {
         console.log("this is my first tutorial");
       },
       parent(){
          console.log("This is my parent tutorial");
       }
  }
});
