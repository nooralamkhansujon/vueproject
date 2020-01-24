export default{

    filters:{
        makeUpperCase(value){
          return value.toUpperCase()
        },
        contentSnippet(value){

            return value.slice(0,70)+"....";
        }
      }
}





