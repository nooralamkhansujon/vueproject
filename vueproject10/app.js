let data = {
    name    : "Online web tutor",
    author  : "Sanjay"
};

Vue.component("owt",{
    template:"<div><p>This is called  markup channel name: {{name}}, Author: {{author}}, {{method1()}}</p><button @click='fireMe'>Click me</button></div>",
    data(){
        return data;
    },
    methods:{
        method1(){
            return "This is vue component";
        },
        fireMe(){
             this.author = "nooralam";
        }
    },
    computed:{
        computed1(){
            return "Simple message";
        }
    }
});

var myapp1 = new Vue({
    el  :"#my-app-1",
    data:{
          
    },
    methods:{

    }
});

var myapp2 = new Vue({
    el  :"#my-app-2",
    data:{
         
    },
    methods:{

    }
});