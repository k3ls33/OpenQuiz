<script>
  //import Quiz from "./components/Quiz.vue";
  import LandingPage from './components/LandingPage.vue'
  import QuizQs from './components/QuizQs.vue'

  var url = "";
  
  export default {
    //name: "App",
    components: { LandingPage, QuizQs },
    props: { },
    data: () => ({
      questionID: 0,
      questions: null
    }),
    methods: {
      async fetchData(url) {
        this.questions = await (await fetch(url)).json()
      },
      initQuiz(category) {

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

        this.fetchData(url);
      }
    }
  };

</script>

<template>

  <LandingPage></LandingPage>
  <QuizQs></QuizQs>

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
  display:inline;
  padding-right: 10px;
}
</style>
