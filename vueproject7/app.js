let kyepress = new Vue({
  el  :"#my-app",
  data:{
     firstname: "",
     lastname : "san",
     meter    : "",
     maths    : 0,
     science  : 0,
     english  : 0
  },
  methods:{
    keypressfunction(event){
        console.log(event);
        this.character = event.key;
    },
    runme(){
      console.log("This is first method");
      return "I am a method";
    }
  },
  computed:{
    getFullName()
    {
        return this.firstname + " " + this.lastname;
    },
    convertToCentimeter()
    {
       return this.meter*100; //1m = 100cm
    },
    totalSubjectMarks(){
       return Number.parseInt(this.maths ) + Number.parseInt(this.english)+ Number.parseInt(this.science) ;
    }
  }
});
