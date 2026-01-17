const checkBoxList = document.querySelectorAll('.custom-checkbox')
const inputFields = document.querySelectorAll('.goal-input')
const warningLabel = document.querySelector('.Warning')
const progressBar = document.querySelector('.progress-bar')
const progressValue = document.querySelector('.progress-value')
const progressLabel = document.querySelector('.progress-label')

const allQuotes = [
    'Raise the bar by completing your goals!',
    'Well begun is half done!',
    'Just a step away, keep going!',
    // "Almost there! One last push and you’re done 💪",
    'Whoa! You just completed all the goals, time for chill :D',
]
// const allGoals = JSON.parse(localStorage.getItem('allGoals')) || {first: {
//     name: '',
//     completed: false,
//   },
//   second: {
//     name: '',
//     completed: false,
//   },
//   third: {
//     name: '',
//     completed: false,
//   },
// }
const allGoals = JSON.parse(localStorage.getItem('allGoals')) || {}
let completedGoal = Object.values(allGoals).filter((goal) => goal.completed).length

progressValue.style.width = `${(completedGoal / inputFields.length) * 100}%`
progressValue.firstElementChild.innerText = `${completedGoal}/${inputFields.length} completed`
progressLabel.innerText=allQuotes[completedGoal]



checkBoxList.forEach((checkbox) => {
    checkbox.addEventListener("click", (e) => {
        const allFieldsField = [...inputFields].every((input) => {
            return input.value
        })
        if (allFieldsField) {
            checkbox.parentElement.classList.toggle('completed');
            const inputId = checkbox.nextElementSibling.id
            allGoals[inputId].completed = !allGoals[inputId].completed
            completedGoal = Object.values(allGoals).filter((goal) => goal.completed).length
            progressValue.style.width = `${(completedGoal / inputFields.length) * 100}%`
            progressValue.firstElementChild.innerText =  `${completedGoal}/${inputFields.length} completed`
            progressLabel.innerText=allQuotes[completedGoal]
            localStorage.setItem("allGoals", JSON.stringify(allGoals))


        } else {
            progressBar.classList.add('show-warning')
        }
    })
});

inputFields.forEach((input) => {
     if (allGoals[input.id]) {
    input.value = allGoals[input.id].name

    if (allGoals[input.id].completed) {
      input.parentElement.classList.add('completed')
    }
  }
    input.addEventListener('focus', () => {
        progressBar.classList.remove('show-warning')
    })
    input.addEventListener('input', (e) => {
        if (allGoals[input.id]&&allGoals[input.id].completed) {
            input.value = allGoals[input.id].name
            return
        }
      if (allGoals[input.id]) {
      allGoals[input.id].name = input.value
    } else {
      allGoals[input.id] = {
        name: input.value,
        completed: false,
      }
    }

    localStorage.setItem('allGoals', JSON.stringify(allGoals))
  })
})