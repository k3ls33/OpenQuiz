<script>
export default {
  name: 'QuizNav',
  props: {
    score: Number,
    index: Number
  },
  methods: {

  }
}
</script>

<template>
  <nav>
    <div id="qCount">Question {{ index+1 }} / 10</div><div id="score">Correct Answers: {{ score }}</div>
  </nav>
</template>

<style>
  nav {
    width: 800px;
    margin: auto;
    display: flex;
    font-size: 20px;
    justify-content: space-between;
    height: 60px;
    align-items: center;
  }
</style>
