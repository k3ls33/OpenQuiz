<template>
    <div id="home">
        <h1>OpenQuiz</h1>
        <p>Fun and engaging classroom activities, open to all educators.</p>
        <p>We are still in development. Try some of our current options below.
            10 randomly selected questions each.
        </p>
        <button @click="initQuiz('science')">Science</button>
        <button @click="initQuiz('geography')">Geography</button>
        <button @click="initQuiz('history')">History</button>
  </div>
</template>
<script>

    export default {
        name: "LandingPage"
    };
</script>
