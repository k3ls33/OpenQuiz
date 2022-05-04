<script>
  //import Quiz from "./components/Quiz.vue";
  import LandingPage from './components/LandingPage.vue'
  
  export default {
    //name: "App",
    components: { LandingPage },
    props: { },
    data() {
      return {
        url: '',
        questions: []
      }
    },
    mounted() {

    },
    methods: {
    }
  };

</script>

<template>

  <LandingPage></LandingPage>

</template>

<style>
body {
  background-color:#211f94;
  color: #cacaca;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 50px;
}
button {
  border: 2px solid #02013b;
  border-radius: 15px;
  color:#ffffff;
  margin: 10px;
  padding: 5px 15px;
  background-color: transparent;
  font-size: 17px;
  text-decoration: none;
  transition-duration: 0.3s;
}
button:hover {
  background-color: #02013b8e;
  cursor: pointer;
}
</style>
