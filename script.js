const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const tweetContainerElement = document.getElementById('question-container')
const tweetElement = document.getElementById('tweet')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledTweets, currentTweetIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentTweetIndex++
  setNextTweet()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledTweets = tweets.sort(() => Math.random() - .5)
  currentTweetIndex = 0
  tweetContainerElement.classList.remove('hide')
  setNextTweet()
}

function setNextTweet() {
  resetState()
  showTweet(shuffledTweets[currentTweetIndex])
}

function showTweet (tweet) {
  tweetElement.innerText = tweet.tweet
  tweet.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild
    (answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton= e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledTweets.length > currentTweetIndex + 1) {
    nextButton.classList.remove('hide')
  }
  else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element,correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  }
  else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const tweets = [
  {
    tweet: "KEEP BELIEVING KANYE 2020    Thank you Jesus Christ",
    answers: [
      { text: 'NAY', correct: false },
      { text: 'YE', correct: true }
    ]

  },
  {
    tweet: "God is so good 😊 Today I am voting for the first time in my life for the President of the United States, and it's for someone I truly trust...me.",
    answers: [
      { text: 'NAY', correct: false },
      { text: 'YE', correct: true }
    ]

  },
  {
    tweet: "I channel Will Ferrel when I’m at the daddy daughter dances",
    answers: [
      { text: 'NAY', correct: false },
      { text: 'YE', correct: true }
    ]

  },
  {
    tweet: "I ordered the salmon medium instead of medium well I didn't want to ruin the magic",
    answers: [
      { text: 'NAY', correct: false },
      { text: 'YE', correct: true }
    ]

  },
  {
    tweet: "Have you ever thought you were in love with someone but then realized you were just staring in a mirror for 20 minutes",
    answers: [
      { text: 'NAY', correct: false },
      { text: 'YE', correct: true }
    ]

  },
  {
    tweet: "I hate when I'm on a flight and I wake up with a water bottle next to me like oh great now I gotta be responsible for this water bottle",
    answers: [
      { text: 'NAY', correct: false },
      { text: 'YE', correct: true }
    ]

  },
  {
    tweet: "My memories are from the future",
    answers: [
      { text: 'NAY', correct: false },
      { text: 'YE', correct: true }
    ]

  },
  {
    tweet: "I make awesome desicions in bike stores!!!", 
    answers: [
      { text: 'NAY', correct: false },
      { text: 'YE', correct: true }
    ]

  },
  {
    tweet: "Sometimes I get emotional over fonts",
    answers: [
      { text: 'NAY', correct: false },
      { text: 'YE', correct: true }
    ]

  },
  {
    tweet: "She asked when is fashion week.... uuum...I thought it was every week??!!",
    answers: [
      { text: 'NAY', correct: false },
      { text: 'YE', correct: true }
    ]

  },
]
