<script>
    var url = '';
    export default {
        name: "LandingPage",
        data: function() {
            return {
                questions: null
            }
        },
        methods: {
            async fetchData(url) {
                this.questions = await (await fetch(url)).json()
            },
            initQuiz(category) {
                switch(category) {
                case 'science':
                    url='https://opentdb.com/api.php?amount=10&category=17&difficulty=medium&type=multiple';
                    break;
                case 'geography':
                    url='https://opentdb.com/api.php?amount=10&category=22&difficulty=medium&type=multiple';
                    break;
                case 'history':
                    url='https://opentdb.com/api.php?amount=10&category=23&difficulty=medium&type=multiple';
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
    <div id="home">
        <h1>OpenQuiz</h1>
        <p>Fun and engaging classroom activities, open to all educators.</p>
        <p>We are still in development. Try some of our current options below.
            10 randomly selected questions each.
        </p>
        <button @click="initQuiz('science')"><img src="../assets/flask.png"/> Science</button>
        <button @click="initQuiz('geography')"><img src="../assets/globe.png"/> Geography</button>
        <button @click="initQuiz('history')"><img src="../assets/parchment.png"/> History</button>
        <p>{{ questions }}</p>
  </div>
</template>

