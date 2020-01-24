let myapp1 = new Vue({
    el:"#my-app",
    data:{
        fname:"",
        lname:"",
        channelName:"OWT"
    },
    methods:{

    },
    computed:{
        fullname:{
            get(){//getter function of fullname
                return this.fname +" "+ this.lname;
            },
            set(){//setter function of fullname
                this.channelName = "Updated OWT";
            }
           
        }
    }
});