<script>
var url = '';
//import Quiz from "./components/Quiz.vue";
//import LandingPage from './components/LandingPage.vue'
//import QuizQs from './components/QuizQs.vue'

export default {
  name: "App",
  data: function () {
    return {
      questions: null,
      index: 0,
      newQuiz: true
    }
  },
  methods: {
    async fetchData(url) {
      this.questions = await (await fetch(url)).json();
    },
    initQuiz(category) {
      this.newQuiz = false;

      switch (category) {
        case 'science':
          url = 'https://opentdb.com/api.php?amount=1&category=17&difficulty=medium&type=multiple';
          break;
        case 'geography':
          url = 'https://opentdb.com/api.php?amount=1&category=22&difficulty=medium&type=multiple';
          break;
        case 'history':
          url = 'https://opentdb.com/api.php?amount=1&category=23&difficulty=medium&type=multiple';
          break;
        default:
          url;
          break;
      }

      this.fetchData(url);
    }
  }
};

</script>

<template>
  <div v-if="newQuiz">
        <h1>OpenQuiz</h1>
        <p>Fun and engaging classroom activities, open to all educators.</p>
        <p>We are still in development. Try some of our current options below.
            10 randomly selected questions each.
        </p>
        <button @click="initQuiz('science')"><img src="./assets/flask.png"/> Science</button>
        <button @click="initQuiz('geography')"><img src="./assets/globe.png"/> Geography</button>
        <button @click="initQuiz('history')"><img src="./assets/parchment.png"/> History</button>
  </div>

  <div id="quiz">
    <div>
    {{ questions }}
    </div>
    
  </div>
</template>

<style>
body {
  background-color: #211f94;
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
  color: #ffffff;
  margin: 10px;
  padding: 10px 15px;
  background-color: transparent;
  font-size: 20px;
  text-decoration: none;
  transition-duration: 0.3s;
}

button:hover {
  background-color: #02013b8e;
  cursor: pointer;
}

button img {
  width: 20px;
  display: inline;
  padding-right: 10px;
}
</style>
