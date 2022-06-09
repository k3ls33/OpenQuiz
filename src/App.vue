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

    ***

    Icons by Icons8. See links in footer.
-->
<script>
var url = 'https://opentdb.com/api.php?amount=10';
import QuizQs from "./components/QuizQs.vue";
//import LandingPage from './components/LandingPage.vue'

export default {
  name: 'App',
  data: function () {
    return {
      questions: [],
      category: '',
      index: 0,
      newQuiz: true,
      start: false
    }
  },
  components: {
    QuizQs
  },
  watch: {
    category:function(val) {
      this.category = val;
      this.newQuiz = false;

      switch (this.category) {
        case 'science':
          url = 'https://opentdb.com/api.php?amount=10&category=17&difficulty=medium&type=multiple';
          this.start = true;
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

      this.start = true;
    }
  }
};
</script>

<template id="app">
  <div v-if="!start">
    <div>
      <h1>OpenQuiz</h1>
      <p>Fun and engaging classroom activities, open to all educators.</p>
      <p>Try some of our current options below.
        10 randomly selected questions each.
      </p>
    </div>

    <div>
      <button @click="category='science'">
        <img src="./assets/test-tube.png" />Science
      </button>

      <button @click="category='geography'">
        <img src="./assets/earth-planet.png" />Geography
      </button>

      <button @click="category='history'">
        <img src="./assets/chichen-itza.png" />History
      </button>
    </div>

    <div class="footer">
    <a target="_blank" href="https://icons8.com/icon/CIP68rnmhjLL/test-tube">Test Tube</a>,
    <a target="_blank" href="https://icons8.com/icon/v65sQ1D5r9Q2/earth-planet">Earth Planet</a>,
     and
    <a target="_blank" href="https://icons8.com/icon/h51PZi23TuuW/chichen-itza">Chichen Itza</a>
     icons by <a target="_blank" href="https://icons8.com">Icons8</a>
    </div>
  </div>

  <QuizQs v-if="start" :ok="start" :quizData="questions" :i="index"></QuizQs>
</template>

<style>
body {
  background-color: #191870;
  color: #ffffff;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  text-align: center;
  margin-top: 30px;
  width: 100%;
  font-size: 18px;
}

.hideIntro {
  visibility: hidden;
}

button {
  border: 2px solid #5e5ce2;
  border-radius: 15px;
  color: #ffffff;
  margin: 10px;
  padding-left: 15px;
  padding-right: 15px;
  background-color: transparent;
  font-size: 20px;
  text-decoration: none;
  transition-duration: 0.3s;
  height: 50px;
}

button:hover {
  background-color: #010049;
  cursor: pointer;
}

button img {
  height: 30px;
  width: 30px;
  padding-right: 10px;
  vertical-align: middle;
}

.footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  padding-bottom: 20px;
  font-size: 15px;
}
.footer a {
  text-decoration: none;
  font-weight:bold;
  color: #72b9ff;
}
</style>
