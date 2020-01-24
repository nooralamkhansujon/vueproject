<template>
  <div>
     <h2>Single Blog</h2>
     <div>
        <h3>{{blog.title}}</h3>
        <p>{{blog.body}}</p> 
     </div>

  </div>
</template>



<script>

export default {
  
  
  data () {
    return {
      id:this.$route.params.id,
      blog:{}
    }
  },
  methods:{
   
  },
   created(){
     this.$http.get("http://jsonplaceholder.typicode.com/posts/"+this.id).then((response)=>{
           this.blog = response.data;
           console.log(response.data);
        
     });
   }

}
</script>


<style scoped>
 
  
</style>
