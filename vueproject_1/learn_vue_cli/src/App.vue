<template>
  <div id="margin">
    <h1>Welcome to App</h1>
    <p>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
      <router-link to="/service">Service</router-link>
      <router-link to="/blogs">Blog</router-link>
    </p>
     <router-view></router-view>
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
  
}
</script>


<style scoped>
 
 
   #margin{
      margin-left:20%;
   }
  
</style>
