<script>
    export default {
        name: "LandingPage",
        props: {
            showHome: Boolean
        }
    };
</script>
<template>
    <div v-show="showHome">
        <h1>OpenQuiz</h1>
        <p>Fun and engaging classroom activities, open to all educators.</p>
        <p>Try some of our current options below.
            10 randomly selected questions each.
        </p>
        <button @click="category='science'"><img src="../assets/flask.png"/> Science</button>
        <button @click="category='geography'"><img src="../assets/globe.png"/> Geography</button>
        <button @click="initQuiz('history')"><img src="../assets/parchment.png"/> History</button>
    </div>
</template>

