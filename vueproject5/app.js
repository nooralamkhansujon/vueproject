let myapp = new Vue({
      el   : "#our-app",
      data : {
            counter: 0,
        },
      methods:{

          incrementby1(event){
              this.counter++;
          },
          Keypressfunction(event)
          {
            console.log(event);
            console.log(event.key);
            console.log(event.charCode);
          },
          keydownfunction(event){
              console.log()
          },
          submitClick(event){
            console.log("clicking");
          },
          submitbutton(event){
            console.log("submit button");
          },
          btnClick(event){
            console.log("button click");
          },
          parentClass(event){
            console.log("Parent class has been called");
          }
      }
    });
