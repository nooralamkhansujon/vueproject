
var myapp2= new Vue({
    el:"#my-app-2",
    data:{
       author:"Sanjay",
    },
    methods:{
        secondApp:function(){
            return "This is second instance";
        }
    },
    computed:{
        fullname:function(){
            return "Jakir Khan koi tui";
        }
    }
});


var myapp= new Vue({
    el:"#my-app",
    data:{
        title  : "Online Web Tutor",
        author : myapp2.author
    },
    methods:{
        secondApp:function(){
            return "This is first instance";
        },
        thirdAppFn:function(){
            return myapp2.secondApp()+" from first app";
        },
        accessComputedApp2(){
            return myapp2.fullname;
        }
    },
   
});

