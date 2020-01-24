let myapp = new Vue({
      el   : "#our-app",
      data : {
          name       : "Online Web Tutor",
          playlist   : "VueJs",
          title      : "This is channel link",
          imageLink  : "user-1.jpg",
          isActive   : true,
          ulink      : "https://www.youtube.com/watch?v=VuTjWcrFJTg",
          txtName    : "Sanjay Kumar",
          txtEmail   : "Sanjaykumer@gmail.com",
          htmlContent:"<p>This is my paragraph set from JS FILE</p>"
        },
      methods:{
        run(message){
          return "I am running "+message;
        },
        welcome(daytime){
           return "Good Evening "+daytime;
        },
        valueaccess(){
            return this.name + "  " + this.playlist;
        }
      }
    });

console.log(myapp.name)
