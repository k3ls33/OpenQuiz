<script>

export default {
  name: "QuizQs",
  data() {
    return {
      buttonColor: 'transparent',
      incorrectButton: 'transparent',
      index: 0,
      choices: []
    }
  },
  props: {
    quizData: Array,
    i: Number,
    ok: Boolean
  },
  methods: {
    checkAnswer: function(value) {
      if (value == 1) {
        console.log("hey");
      }
    },
    next: function () {
      this.index++;
      this.choices=[];
      this.choices.push([this.quizData[this.index].correct_answer, 1]);
      for (var j = 0; j < 3; j++) {
        this.choices.push([this.quizData[this.index].incorrect_answers[j], 0]);
      }
      this.choices.sort(() => Math.random() - 0.5);
      
    }
  },
  mounted() {
    this.index = this.i;
    this.next();
  }
}
</script>

<template v-show="ok">
  <div id="quiz">
    <h1> {{ quizData[index].question }} </h1>
  
  
  <div>
    <ul>
      <li v-for="choice in choices" :key="choice.id">
        <button :value="choice[1]" @click="checkAnswer(value)">{{choice[0]}}</button>
      </li>
    </ul>
  </div>

  <button @click="next">next</button>
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
