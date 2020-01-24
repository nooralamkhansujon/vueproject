<template>
  <div >
  <h1>Employee Form</h1>
    <form action="">
          <p>
             <label for="">Name: </label>
             <input type="text" name="StudentName">
          </p>
           <p>
              <label for="">Class: </label>
              <input type="text" name="Designation">
           </p>
           <p>
              <label for="">Mobile No: </label>
              <input type="text" name="Mobile">
           </p>
         <p>
           <button>Submit</button>
         </p>
    </form>
  </div>
</template>



<script>

export default {
 
 
  data () {
    return {
        message:"Hi I am Employee component"
    }
  },
  methods:{
   
  },

}
</script>


<style scoped>
 
  
</style>
