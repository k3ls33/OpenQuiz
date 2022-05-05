<script>
var url = 'https://opentdb.com/api.php?amount=10';
import QuizQs from "./components/QuizQs.vue";
//import LandingPage from './components/LandingPage.vue'

export default {
  name: "App",
  data: function () {
    return {
      questions: [],
      category: '',
      index: 0,
      newQuiz: true,
      showHome: 'inline-block',
      start: false
    }
  },
  components: {
    QuizQs
  },
  watch: {
    category:function(val) {
      this.start = true;
      this.newQuiz = false;
      
      this.category = val;

      switch (this.category) {
        case 'science':
          url = 'https://opentdb.com/api.php?amount=10&category=17&difficulty=medium&type=multiple';
          break;
        case 'geography':
          url = 'https://opentdb.com/api.php?amount=10&category=22&difficulty=medium&type=multiple';
          break;
        case 'history':
          url = 'https://opentdb.com/api.php?amount=10&category=23&difficulty=medium&type=multiple';
          break;
        default:
          url;
          break;
      }

      fetch(url, {
        method: 'get'
      }).then((response) => {
        return response.json()
      }).then((jsonData) => {
        this.questions = jsonData.results
      })
    }
  }
};

</script>

<template>
  <div v-show="newQuiz">
        <h1>OpenQuiz</h1>
        <p>Fun and engaging classroom activities, open to all educators.</p>
        <p>Try some of our current options below.
            10 randomly selected questions each.
        </p>
        <button @click="category='science'"><img src="./assets/flask.png"/> Science</button>
        <button @click="category='geography'"><img src="./assets/globe.png"/> Geography</button>
        <button @click="category='history'"><img src="./assets/parchment.png"/> History</button>
  </div>
<!--   <div v-if="start" id="quiz">
    <h1>
    {{ questions[index].question }}
    </h1>
    <div>
      <button>{{ questions[index].correct_answer }}</button>
      <button v-for="answer in questions[index].incorrect_answers" :key="answer.id">
        {{ answer }}
      </button>
    </div>
  </div> -->
  <QuizQs :ok="start" :quizData="questions" :i="index"></QuizQs>
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
.hide {
  display: none;
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
