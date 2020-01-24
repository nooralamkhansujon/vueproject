<template>
  <div>
     <h2>All Blogs</h2>
     <div v-for="blog in blogs">
      <router-link v-bind:to="'/blogs/'+blog.id"><h3>{{blog.title}}</h3></router-link>
       <p>{{blog.body}}</p>
        
     </div>

  </div>
</template>



<script>

export default {
  
  
  data () {
    return {
         blogs:[]
    }
  },
  methods:{
     
  },
   created(){
     this.$http.get("http://jsonplaceholder.typicode.com/posts/").then((response)=>{
         
         this.blogs = response.data.slice(0,10);
       
  
     });
   }

}
</script>


<style scoped>
 
  
</style>
