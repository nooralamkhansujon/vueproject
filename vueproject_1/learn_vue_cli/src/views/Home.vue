<template>
  <div id="margin">
    <h1>Welcome to Home Page</h1>
     
  </div>
</template>



<script>



export default {

  components:{
   
  },
  data () {
    return {
        
    }
  },
  methods:{
      
  },
  mounted(){
    this.$axios.post("http://localhost/vueapis/api.php",{
      name:"Nooralam khan",
      email:"noor@gmail.com",
      phone_no:"018723434",
      action:"insert"
    })
    .then((response)=>{
      console.log(response);
           
    }).catch((error)=>{
          console.log(error);
    });  
  }
  
}
</script>


<style scoped>
 
 
  
</style>
