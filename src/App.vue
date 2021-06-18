<template>


<!-- <div id="app" >
  <router-link to="/test">test</router-link>  
  <router-link to="/login">login</router-link>
    <router-link to="/register">login</router-link>  
  
  <h1></h1>

</div> -->
<div class="big">

  <div class="c-app">
  
  <!-- <webapp-sidebar /> -->
   <!-- <CWrapper> -->
     <div class="side">
          <!-- <v-flex class="mt-4 mb-4"> -->
             <webapp-sidebar />
          <!-- </v-flex> -->
     </div>

     <div class="main">

        <webapp-header />
      
        <div class="c-body">
        <main class="c-main">
          <!-- <CContainer fluid> -->
            <transition name="fade">
              <router-view></router-view>
            </transition>
          <!-- </CContainer> -->
        </main>
        </div>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id saepe sed amet distinctio ea laboriosam nam, mollitia, facilis, facere animi ipsa corrupti voluptatibus assumenda eius deleniti non atque maxime voluptas.<br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id saepe sed amet distinctio ea laboriosam nam, mollitia, facilis, facere animi ipsa corrupti voluptatibus assumenda eius deleniti non atque maxime voluptas.<br>

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id saepe sed amet distinctio ea laboriosam nam, mollitia, facilis, facere animi ipsa corrupti voluptatibus assumenda eius deleniti non atque maxime voluptas.<br>

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id saepe sed amet distinctio ea laboriosam nam, mollitia, facilis, facere animi ipsa corrupti voluptatibus assumenda eius deleniti non atque maxime voluptas.<br>

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id saepe sed amet distinctio ea laboriosam nam, mollitia, facilis, facere animi ipsa corrupti voluptatibus assumenda eius deleniti non atque maxime voluptas.<br>

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id saepe sed amet distinctio ea laboriosam nam, mollitia, facilis, facere animi ipsa corrupti voluptatibus assumenda eius deleniti non atque maxime voluptas.<br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id saepe sed amet distinctio ea laboriosam nam, mollitia, facilis, facere animi ipsa corrupti voluptatibus assumenda eius deleniti non atque maxime voluptas.<br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id saepe sed amet distinctio ea laboriosam nam, mollitia, facilis, facere animi ipsa corrupti voluptatibus assumenda eius deleniti non atque maxime voluptas.<br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id saepe sed amet distinctio ea laboriosam nam, mollitia, facilis, facere animi ipsa corrupti voluptatibus assumenda eius deleniti non atque maxime voluptas.<br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id saepe sed amet distinctio ea laboriosam nam, mollitia, facilis, facere animi ipsa corrupti voluptatibus assumenda eius deleniti non atque maxime voluptas.<br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id saepe sed amet distinctio ea laboriosam nam, mollitia, facilis, facere animi ipsa corrupti voluptatibus assumenda eius deleniti non atque maxime voluptas.<br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id saepe sed amet distinctio ea laboriosam nam, mollitia, facilis, facere animi ipsa corrupti voluptatibus assumenda eius deleniti non atque maxime voluptas.<br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id saepe sed amet distinctio ea laboriosam nam, mollitia, facilis, facere animi ipsa corrupti voluptatibus assumenda eius deleniti non atque maxime voluptas.<br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id saepe sed amet distinctio ea laboriosam nam, mollitia, facilis, facere animi ipsa corrupti voluptatibus assumenda eius deleniti non atque maxime voluptas.<br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id saepe sed amet distinctio ea laboriosam nam, mollitia, facilis, facere animi ipsa corrupti voluptatibus assumenda eius deleniti non atque maxime voluptas.<br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id saepe sed amet distinctio ea laboriosam nam, mollitia, facilis, facere animi ipsa corrupti voluptatibus assumenda eius deleniti non atque maxime voluptas.<br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id saepe sed amet distinctio ea laboriosam nam, mollitia, facilis, facere animi ipsa corrupti voluptatibus assumenda eius deleniti non atque maxime voluptas.<br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id saepe sed amet distinctio ea laboriosam nam, mollitia, facilis, facere animi ipsa corrupti voluptatibus assumenda eius deleniti non atque maxime voluptas.<br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id saepe sed amet distinctio ea laboriosam nam, mollitia, facilis, facere animi ipsa corrupti voluptatibus assumenda eius deleniti non atque maxime voluptas.<br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id saepe sed amet distinctio ea laboriosam nam, mollitia, facilis, facere animi ipsa corrupti voluptatibus assumenda eius deleniti non atque maxime voluptas.<br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id saepe sed amet distinctio ea laboriosam nam, mollitia, facilis, facere animi ipsa corrupti voluptatibus assumenda eius deleniti non atque maxime voluptas.<br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id saepe sed amet distinctio ea laboriosam nam, mollitia, facilis, facere animi ipsa corrupti voluptatibus assumenda eius deleniti non atque maxime voluptas.<br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id saepe sed amet distinctio ea laboriosam nam, mollitia, facilis, facere animi ipsa corrupti voluptatibus assumenda eius deleniti non atque maxime voluptas.<br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id saepe sed amet distinctio ea laboriosam nam, mollitia, facilis, facere animi ipsa corrupti voluptatibus assumenda eius deleniti non atque maxime voluptas.<br>

        </div>
        <webapp-footer />

     </div>
     
   
    
   <!-- </CWrapper> -->
</div>

</div>



</template>


<script>

import axios from "axios"
import appSidebar from "./components/appSidebar.vue";
import appFooter from "./components/appFooter.vue";
import appHeader from "./components/appHeader.vue";
// import test from "./components/test.vue";


export default {
name:"app", 

components:{
  'webapp-sidebar':appSidebar,
    'webapp-footer':appFooter,
    'webapp-header':appHeader,

},
data(){
  return {
    name:"",
    email:"",
  }
},

async created(){
    const response = await axios.get('user-profile');
    this.name=response.data.name;
    this.email=response.data.email;
    console.log(response);
    

  },

}
</script>



<style scoped>
.c-app{
  display: grid;
  grid-template-columns: 20% 80%;
}

.side{
 grid-row: 100%;
}

/* .big{
    display: grid;
    grid-template-rows: 100%;

} */

</style>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
