<template>
  <h1>OpenQuiz</h1>
  <p>Fun and engaging classroom activities, open to all educators.</p>
  <p>We are still in development. Try some of our current options below.
    10 randomly selected questions each.
  </p>
  <button @click="initQuiz('science')">Science</button>
  <button @click="initQuiz('geography')">Geography</button>
  <button @click="initQuiz('history')">History</button>
</template>

<script>
  //import Quiz from "./components/Quiz.vue";

  export default {
    name: "App",
    //components: { Quiz },
    props: { },
    data() {
      return {
        url: '',
        questions: []
      }
    },
    mounted() {

    }
  };
  
  initQuiz();
  function initQuiz(category) {
    switch(category) {
      case 'science':
        this.url="https://opentdb.com/api.php?amount=10&category=17&difficulty=medium&type=multiple";
        break;
      case 'geography':
        this.url="https://opentdb.com/api.php?amount=10&category=22&difficulty=medium&type=multiple";
        break;
      case 'history':
        this.url="https://opentdb.com/api.php?amount=10&category=23&difficulty=medium&type=multiple";
        break;
      default:
        this.url;
        break;
    }
    
    fetch(this.url).then((response) => {
        return response.json()
      }).then((questionData) => {
        this.questions = questionData.response
      }).catch((error) => {
        console.log(error)
    });
    
  }
  
</script>

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
}
</style>
