const questions = [
    {
        text: "Выберите недопустимое название переменной в питоне",
        answers: [
            "4a",
            "classe",
            "number",
            "_"
    ],
        correct_answer: 0,
        valor: 1
    },
    {
        text: "Как правильно произносится название метода __init__?",
        answers: [
            "Магический метод init",
            "init",
            "дандер-инит",
            "Конструктор"
        ],
        correct_answer: 2,
        valor: 3
    },
    {
        text: "Корень из 531.441",
        answers: [
            "7,2,9",
            "729",
            "семьсот двадцат девят",
            "927"
        ],
        correct_answer: 1,
        valor: 3
    },
    {
        text: "Как скачать майнкрафт?",
        answers: [
            "Сказать волшебное слово",
            "Прочитать заклинание",
            "Скачать с интернета",
            "Создать самому"
        ],
        correct_answer: 2,
        valor: 1
    },
    {
        text: "",
        answers: [
            "",
            "",
            "",
            ""
        ],
        correct_answer: 2,
        valor: 1
    }
]

var currentQuestion = 0;

function selectAnswer(event, correct_answer){
    const target = event.target;

    if (correct_answer == target.getAttribute('data-answer-index'))
        target.classList.add('correct')
    else
        target.classList.add('wrong')
}

function newQuestion(){
    const questionsContainer = document.getElementById("question_container")
    const answerContainer = document.getElementById("answers_container")

    questionsContainer.innerHTML = '';
    answerContainer.innerHTML = '';


    const question = questions[currentQuestion]

    const questionDiv = document.createElement('div')
    questionDiv.innerText = question.text
    questionsContainer.append(questionDiv)

    for(let i = 0; i < 4; i++){
        const answer = question.answers[i]
        const newAnswer = document.createElement('div')
        newAnswer.classList.add('answer')
        newAnswer.setAttribute('data-answer-index', i)
        newAnswer.innerText = answer
        newAnswer.setAttribute('onclick', `selectAnswer(event, ${question.correct_answer})`)
        answerContainer.append(newAnswer)
    }
}

function skip(){
    currentQuestion += 1
    newQuestion()
}

newQuestion()