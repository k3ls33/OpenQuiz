<script>
var url = 'https://opentdb.com/api.php?amount=10';
import QuizQs from '../components/QuizQs.vue';

export default {
  name: 'QuizV',
  data: function () {
    return {
      questions: [],
      category: '',
      loading: true
    }
  },
  components: {
    QuizQs
  },
  created() {
    this.category = this.$route.params.category;

      switch (this.category) {
        case 'science':
          url = 'https://opentdb.com/api.php?amount=10&category=17&difficulty=medium&type=multiple';
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
        this.questions = jsonData.results;
        this.loading = false;
      });
  }
};
</script>

<template>
  <div v-if="!loading">
    <QuizQs :quizData="this.questions"></QuizQs>
  </div>
</template>