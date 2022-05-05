<script>

export default {
  name: "QuizQs",
  data() {
    return {
      buttonColor: 'transparent',
      incorrectButton: 'transparent'
    }
  },
  props: {
    quizData: Array,
    i: Number,
    ok: Boolean
  }
}
</script>

<template v-show="ok">
  <div id="quiz">
    <h1> {{ quizData[i].question }} </h1>
  
  
  <div>
    <ul>
    <li><button>{{ quizData[i].correct_answer }}</button></li>
      <li v-for="answer in quizData[i].incorrect_answers" :key="answer.id">
        <button>{{ answer }}</button>
      </li>
    </ul>
  </div>

  <button>next</button>
  </div>
</template>

<style scoped>
  #quiz {
    width: 800px;
    margin: auto;
  }
  ul {
    list-style: none;
    padding:0;
  }
  button {
    width: 500px;
    margin:5px;
    height: 75px;
  }
</style>
