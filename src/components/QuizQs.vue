<script>

export default {
  name: "QuizQs",
  data() {
    return {
      correctChoice: false,
      incorrectChoice: false,
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
    checkAnswer: function(e) {
      const btnChoice = e.target.value;
      if (btnChoice == 1) {
        this.correctChoice = true;
      } else {
        this.incorrectChoice = true;
      }
    },
    next: function () {
      this.index++;
      this.correctChoice = false;
      this.incorrectChoice = false;
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
        <button id="answerBtn" :class="{ correctBtn: (choice[1] === 1 && correctChoice), incorrectBtn: (choice[1] === 0 && incorrectChoice)}" :value="choice[1]" @click="checkAnswer">{{choice[0]}}</button>
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
  #answerBtn {
    width: 500px;
    margin:5px;
    height: 75px;
  }
  .correctBtn {
    background-color: #00bb0080;
  }
  .incorrectBtn {
    background-color: #d1000085;
  }
</style>
