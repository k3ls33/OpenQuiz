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
        case 'animals':
          url = 'https://opentdb.com/api.php?amount=10&category=27&difficulty=medium&type=multiple';
          break;
        case 'mythology':
          url = 'https://opentdb.com/api.php?amount=10&category=20&type=multiple';
          break;
        default:
          url;
          break;
      }
      
      fetch(url).then((response) => {
        if (response.status !== 200) {
          console.log('Error ' + response.status);
          return;
        }
        
        response.json().then((data) => {
          this.questions = data.results;
          this.loading = false;
        });
      });
  }
};
</script>

<template>
  <div v-if="!loading">
    <QuizQs :quizData="this.questions"></QuizQs>
  </div>
</template>