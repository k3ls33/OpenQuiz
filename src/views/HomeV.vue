<script>
export default {
  name: 'HomeV',
  data: function () {
    return {
      category: '',
    }
  }
};
</script>

<template id="home">
  <div id="container">
    <div>
      <h1>OpenQuiz</h1>
      <p>Fun and engaging classroom activities, open to all educators.</p>
      <p>Try some of our current options below.
        10 randomly selected questions each.
      </p>
    </div>

    <div id="subjects">
      <router-link to="/quiz/science">
        <button>
          <img src="../assets/test-tube.png" />Science & Nature
        </button>
      </router-link>

      <router-link to="/quiz/geography">
        <button>
          <img src="../assets/earth-planet.png" />Geography
        </button>
      </router-link>

      <router-link to="/quiz/history">
        <button>
          <img src="../assets/chichen-itza.png" />History
        </button>
      </router-link>

      <router-link to="/quiz/animals">
        <button>
          <img src="../assets/doge.png" />Animals
        </button>
      </router-link>

      <router-link to="/quiz/mythology">
        <button>
          <img src="../assets/anubis.png" />Mythology
        </button>
      </router-link>
    </div>

    <div class="footer">
    <a target="_blank" href="https://icons8.com/icon/CIP68rnmhjLL/test-tube">Test Tube</a>,
    <a target="_blank" href="https://icons8.com/icon/v65sQ1D5r9Q2/earth-planet">Earth Planet</a>,
    <a target="_blank" href="https://icons8.com/icon/h51PZi23TuuW/chichen-itza">Chichen Itza</a>,
    <a target="_blank" href="https://icons8.com/icon/XF1f9oTOPWEa/doge">Doge</a>,
     and
    <a target="_blank" href="https://icons8.com/icon/8Lrfs7noG5QX/anubis">Anubis</a>
     icons by <a target="_blank" href="https://icons8.com">Icons8</a>
    </div>
  </div>
</template>

<style>

#container {
  text-align: center;
  margin: auto;
}

#subjects {
  margin-top: 40px;
  margin-bottom: 40px;
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
