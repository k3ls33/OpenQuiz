function initQuiz(category) {
  switch(category) {
    case 'science':
      this.url="https://opentdb.com/api.php?amount=10&category=17&difficulty=medium&type=multiple";
      break;
    case 'geography':
      this.url="https://opentdb.com/api.php?amount=10&category=22&difficulty=medium&type=multiple";
      break;
    case 'history':
      this.url="https://opentdb.com/api.php?amount=10&category=23&difficulty=medium&type=multiple";
      break;
    default:
      this.url;
      break;
  }
  
  fetch(this.url).then((response) => {
      return response.json()
    }).then((questionData) => {
      this.questions = questionData.response
    }).catch((error) => {
      console.log(error)
  });
  
}