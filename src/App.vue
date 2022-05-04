<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <button @click="initQuiz('science')"></button>
  <button @click="initQuiz('geography')"></button>
  <button @click="initQuiz('history')"></button>
</template>

<script>
  export default {
    name: "App",
    props: { }
  };
  
  initQuiz();
  function initQuiz(category) {
    var url="";

    switch(category) {
      case 'science':
        url="https://opentdb.com/api.php?amount=10&category=17&difficulty=medium&type=multiple";
        break;
      case 'geography':
        url="https://opentdb.com/api.php?amount=10&category=22&difficulty=medium&type=multiple";
        break;
      case 'history':
        url="https://opentdb.com/api.php?amount=10&category=23&difficulty=medium&type=multiple";
        break;
      default:
        url;
        break;
    }
    
    fetch(url).then(function(response) {
        return response.json();
      }).then(function(json) {
      
      }).catch(function(error) {
        console.log(error);
      });

    
  }
  
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
