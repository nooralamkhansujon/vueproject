import Home from './views/Home.vue';
import Contact from './views/Contact.vue';
import Service from './views/Service.vue';
import About from './views/About.vue';
import ShowBlog from "./components/showblog.vue";
import SingleBlog from "./components/singleblog.vue";

export default [
   {path:'/',component:Home},
   {path:'/contact',component:Contact},
   {path:'/service',component:Service},
   {path:'/about',component:About},   
   {path:'/blogs',component:ShowBlog},  
   {path:'/blogs/:id',component:SingleBlog},  
];