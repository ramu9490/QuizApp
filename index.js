// array of objects
const quizQuestions = [
    {
        title: 'Who developed JavaScript?',
        A: 'Google',
        B: 'Netscape',
        C: 'Meta',
        D: 'TCS',
        correctAnswer: 'Netscape'
    },
    {
        title: 'What year was JavaScript created?',
        A: '1995',
        B: '2000',
        C: '1998',
        D: '1992',
        correctAnswer: '1995'
    },
    {
        title: 'What was JavaScript originally called?',
        A: 'Mocha',
        B: 'LiveScript',
        C: 'JScript',
        D: 'ECMAScript',
        correctAnswer: 'Mocha'
    },
    {
        title: 'Which company did Brendan Eich work for when he created JavaScript?',
        A: 'Microsoft',
        B: 'Apple',
        C: 'Netscape',
        D: 'Sun Microsystems',
        correctAnswer: 'Netscape'
    },
    {
        title: 'JavaScript is What Kind of Language.',
        A: 'Compiled',
        B: 'Interpreted',
        C: 'Markup',
        D: 'Programming',
        correctAnswer: 'Interpreted'
    }
];
//acces the html elemnts in js
const question = document.querySelector('h1');
const optionA = document.querySelector('#first_btn');
const optionB = document.querySelector('#second_btn');
const optionC = document.querySelector('#third_btn');
const optionD = document.querySelector('#fourth_btn');
const nextOption = document.querySelector('#continue_btn');
const finalSubmit = document.querySelector('#submit_btn');
const previousOption = document.querySelector('#previous_btn');
const allDetails = document.querySelectorAll('.option');
const scoreDisplay = document.getElementById('score_value');

// acces  the question and options
function loadQuestions(info) {
    question.textContent = info.title;
    optionA.textContent = info.A;
    optionB.textContent = info.B;
    optionC.textContent = info.C;
    optionD.textContent = info.D;
}
loadQuestions(quizQuestions[0]);
let currentQuestionIndex = 0;
score = 0;
//logic for save answer in one varble
allDetails.forEach(function (i) {
    i.addEventListener('click', function (event) {
        //console.log(event)  //button information kept here
        let optionChoosen = event.target.innerText
        //console.log(optionChoosen)
        quizQuestions.map(function (i) {
            //console.log(i)
            if (i.correctAnswer == optionChoosen) {
                score++
            }

        })

    })
})
//navigation buttons 
function navigationButtons() {

    //logic for the previous button
    if (currentQuestionIndex === 0) {   //hiden previous btn for first question
        previousOption.hidden = true;
    } else {
        previousOption.hidden = false;

    }
    //logic for the next question  hide and display
    if (currentQuestionIndex >= quizQuestions.length - 1) { //when reach the final question submit button visble and next btn disable
        finalSubmit.hidden = false;
        nextOption.hidden = true;
    } else {
        finalSubmit.hidden = true;
        nextOption.hidden = false;
    }
}

//add event listener for cick the  next and pervious btn
nextOption.addEventListener('click', function () {
    if (currentQuestionIndex < quizQuestions.length - 1) {
        currentQuestionIndex++;
        loadQuestions(quizQuestions[currentQuestionIndex]);
        navigationButtons();
    }
});

previousOption.addEventListener('click', function () {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestions(quizQuestions[currentQuestionIndex]);
        navigationButtons();
    }
});

finalSubmit.addEventListener('click', function () {
    scoreDisplay.textContent = score;
    document.getElementById('score').classList.remove('hidden');
})

