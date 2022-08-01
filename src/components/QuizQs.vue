<script>
import QuizNav from './QuizNav.vue';

export default {
  name: 'QuizQs',
  data() {
    return {
      selectedCorrect: false,
      selectedIncorrect: false,
      checked: false,
      fontsize: '18px',
      index: 0,
      score: 0,
      choices: [],
      ques: {
        type: String
      },
      nextBtn: 'Next'
    }
  },
  props: {
    quizData: Array,
  },
  components: {
    QuizNav
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

      let str = (this.quizData[this.index].question)
        .replace(/&quot;/g, '\"')
        .replace(/&#039;/g, "'")
        .replace(/&amp;/g, '&')
        .replace(/&oacute;/g, 'ó')
        .replace(/&pound;/g, '£')
        .replace(/&aacute;/g, 'á')
        .replace(/&Aacute;/g, 'Á')
        .replace(/&ntilde;/g, 'ñ');
      
      this.ques = str;

      if (this.ques.length > 140) {
        this.fontsize = "16px";
      }

      this.choices=[];
      this.choices.push([this.quizData[this.index].correct_answer, 1]);
      for (var j = 0; j < 3; j++) {
        this.choices.push([this.quizData[this.index].incorrect_answers[j], 0]);
      }
      this.choices.sort(() => Math.random() - 0.5);
      this.checked = false;
    },
    goNext() {
      if ((this.index + 1) !== 10) {
        this.index++;
        this.next();

        if ((this.index) == 9) {
          this.nextBtn = "Finish Quiz";
        }
      } else {
        console.log("finish");
        this.$router.replace({ path: '/' });
      }
    }
  }
}
</script>

<template>
  <QuizNav :score="score" :index="index"></QuizNav>
  <div id="quiz">
      <div id="question"><h2> {{ ques }} </h2></div>

      <div id="optionsContainer">
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

      <button id="next" v-show="checked" @click="goNext()">{{ nextBtn }}</button>
  </div>
</template>

<style scoped>
  #quiz {
    width: 800px;
    margin: auto;
    display: flex;
    flex-flow: row wrap;
    text-align: center;
  }
  #question {
    height: 150px;
    width: 780px;
    margin: auto;
    font-size: v-bind(fontsize);
  }
  #optionsContainer {
    column-count: 2;
    column-gap: 0px;
  }
  ul {
    list-style-type: none;
    padding:0;
    margin:0;
  }
  ul li {
    display: inline-block;
    padding: 0;
    margin: 0;
  }
  #next {
    width: 170px;
    margin: auto;
  }
  #answerBtn {
    font-size: 18px;
    height: 80px;
    width: 380px;
  }
  .correctBtn {
    background-color: #00bb0080;
  }
  .incorrectBtn {
    background-color: #d1000085;
  }
  #results {
    font-size: 18px;
    padding-top: 30px;
    padding-bottom: 25px;
    margin: auto;
    width: 780px;
  }
</style>
