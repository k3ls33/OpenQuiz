<!--
    OpenQuiz
    Copyright (C) 2022 Kelsey Lohr

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
-->
<script>
export default {
  name: "QuizQs",
  data() {
    return {
      showBtns: false,
      selectedCorrect: false,
      selectedIncorrect: false,
      startQuiz: false,
      index: 0,
      choices: [],
      ques: ''
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
      this.showBtns = true;

      if (btnChoice == 1) {
        this.selectedCorrect = true;
      } else {
        this.selectedIncorrect = true;
      }
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
    },
    goNext() {
      this.next();
      this.index++;
    }
  }
}
</script>

<template>
  <div id="quiz">
    <div v-if="ques.length">
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
    
    <div v-else>
      <h2>Ready?</h2>
    </div>
    
    <button @click="goNext()">next</button>
  </div>
</template>

<style scoped>
  #quiz {
    width: 800px;
    margin: auto;
  }
  #question {
    height: 100px;
    margin-top: 30px;
  }
  #answerContainer {
    columns: 400px 2;
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
    height: 40px;
    width: 800px;
    padding-top: 20px;
  }
</style>
