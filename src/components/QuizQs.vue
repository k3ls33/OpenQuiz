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
      initial: String,
      scrubbed: String,
      nextBtn: 'Next',
      results: String
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
          this.results = "Correct!";
        } else {
          this.selectedCorrect = false;
          this.results = "Better luck next time!";
        }
      }
      this.checked = true;
    },
    next() {
      this.showBtns = false;
      this.selectedCorrect = false;

      this.initial = this.quizData[this.index].question;
      this.janitor();

      this.ques = this.scrubbed;

      if (this.ques.length > 140) {
        this.fontsize = "16px";
      }

      this.choices=[];
      this.inital = this.quizData[this.index].correct_answer;
      this.choices.push([this.quizData[this.index].correct_answer, 1]);

      for (var j = 0; j < 3; j++) {
        this.initial = this.quizData[this.index].incorrect_answers[j];
        this.janitor();
        this.choices.push([this.scrubbed, 0]);
      }

      this.choices.sort(() => Math.random() - 0.5);
      this.checked = false;
    },
    janitor() {
      this.scrubbed = this.initial.replace(/&quot;/g, '\"')
        .replace(/&#039;/g, '\u0027')
        .replace(/&amp;/g, '&')
        .replace(/&oacute;/g, 'ó')
        .replace(/&oslash;/g, 'ø')
        .replace(/&pound;/g, '£')
        .replace(/&aacute;/g, 'á')
        .replace(/&Aacute;/g, 'Á')
        .replace(/&atilde;/g, 'ã')
        .replace(/&auml;/g, 'ä')
        .replace(/&Auml;/g, 'Ä')
        .replace(/&eacute;/g, 'é')
        .replace(/&Eacute;/g, 'É')
        .replace(/&ecaron;/g, 'ě')
        .replace(/&Ecaron;/g, 'Ě')
        .replace(/&euml;/g, 'ë')
        .replace(/&Euml;/g, 'Ë')
        .replace(/&iacute;/g, 'í')
        .replace(/&ntilde;/g, 'ñ')
        .replace(/&oacute;/g, 'ó')
        .replace(/&ocirc;/g, 'ô')
        .replace(/&otilde;/g, 'õ')
        .replace(/&ouml;/g, 'ö')
        .replace(/&Ouml;/g, 'Ö')
        .replace(/&uuml;/g, 'ü')
        .replace(/&Uuml;/g, 'Ü');
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

      <div id="results" v-show="checked">
        <div></div>
        <div id="res-text"> {{ results }} </div>
        <div><button id="next" @click="goNext()">{{ nextBtn }}</button></div>
      </div>
  </div>
</template>

<style scoped>
  #quiz {
    max-width: 800px;
    margin: auto;
    display: flex;
    flex-flow: row wrap;
    text-align: center;
  }
  #question {
    height: 150px;
    margin: auto;
    font-size: v-bind(fontsize);
    display:flex;
    align-items: center;
  }
  #optionsContainer {
    width: 100%;
    column-count: 2;
    column-gap: 0px;
  }
  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: block;
  }
  ul li {
    padding: 5px;
  }
  #results {
    display: flex;
    font-size: 18px;
    width: 800px;
    padding: 50px 5px;
    justify-content: space-between;
    align-items: center;
  }
  #results div {
    width: 30%;
  }
  #next {
    margin: auto;
    width: 100%;
  }
  #answerBtn {
    font-size: 18px;
    height: 80px;
    width: 100%;
    margin: auto;
  }
  .correctBtn {
    background-color: #00bb0080;
  }
  .incorrectBtn {
    background-color: #d1000085;
  }
</style>
