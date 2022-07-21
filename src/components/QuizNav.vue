<script>
export default {
  name: 'QuizNav',
  props: {
    score: Number
  },
  methods: {

  }
}
</script>

<template>
  <nav>
    {{ score }}
  </nav>
</template>

<style scoped>
  nav {
    width: 100%;
  }
</style>
