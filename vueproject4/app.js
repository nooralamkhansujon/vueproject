let myapp = new Vue({
      el   : "#our-app",
      data : {
            counter: 0,
        },
      methods:{
         increment(count){
               this.counter  += count;
         },
         decrement(count){
               this.counter -= count;
         },
         incre5(count){
               this.counter += count;
         },
         decre5(count){
               this.counter -= count;
         }
      }
    });

// console.log(myapp.name)
