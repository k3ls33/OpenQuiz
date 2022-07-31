<script>
//import QuizNav from './QuizNav.vue';

export default {
  name: 'QuizQs',
  data() {
    return {
      selectedCorrect: false,
      selectedIncorrect: false,
      startQuiz: false,
      checked: false,
      index: 0,
      score: 0,
      choices: [],
      ques: ''
    }
  },
  props: {
    quizData: Array,
  },
  components: {
    //QuizNav
  },
  created() {
    this.next();
  },
  methods: {
    checkAnswer: function(e) {
      const btnChoice = e.target.value;
      this.showBtns = true;

      if (this.checked == false) {
        if (btnChoice == 1) {
          this.selectedCorrect = true;
          this.score += 1;     
        } else {
          this.selectedIncorrect = true;
        }
      }
      this.checked = true;
    },
    next() {
      this.showBtns = false;
      this.selectedCorrect = false;
      this.selectedIncorrect = false;
      this.ques = this.quizData[this.index].question;

      this.choices=[];
      this.choices.push([this.quizData[this.index].correct_answer, 1]);
      for (var j = 0; j < 3; j++) {
        this.choices.push([this.quizData[this.index].incorrect_answers[j], 0]);
      }
      this.choices.sort(() => Math.random() - 0.5);
      this.checked = false;
    },
    goNext() {
      this.index++;
      this.next();
    }
  }
}
</script>

<template>
  <!-- <QuizNav :score="score"></QuizNav> -->
  <div id="quiz">
    <div>
      <div id="question"><h2> {{ ques }} </h2></div>

      <div id="answerContainer">
        <ul>
          <li v-for="choice in choices" :key="choice.id">
            <button id="answerBtn" :class="{ correctBtn: (choice[1] === 1 && showBtns), incorrectBtn: (choice[1] === 0 && showBtns)}" :value="choice[1]" @click="checkAnswer">{{choice[0]}}</button>
          </li>
        </ul>
      </div>

      <div id="results">
        <div v-show="selectedCorrect"> Correct! </div>
        <div v-show="selectedIncorrect"> Better luck next time! </div>
      </div>
    </div>
    
    <button @click="goNext()">next</button>
  </div>
</template>

<style scoped>
  #quiz {
    width: 900px;
    margin: auto;
  }
  #question {
    height: 100px;
    margin-top: 30px;
  }
  #answerContainer {
    columns: 450px 2;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  li {
    display: inline-block;
    width: 400px;
  }
  button {
    width: 170px;
  }
  #answerBtn {
    width: 390px;
    height: 75px;
    margin: 5px;
  }
  .correctBtn {
    background-color: #00bb0080;
  }
  .incorrectBtn {
    background-color: #d1000085;
  }
  #results {
    font-size: 18px;
    height: 50px;
    width: 900px;
    padding-top: 25px;
  }
</style>
