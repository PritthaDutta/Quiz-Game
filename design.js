const quizques = [
    {    
        question : "Q1. Which country has the highest life expectancy?",
        a: "China",
        b: "India",
        c: "Thailand",
        d: "Hong Kong",
        ans: "ans4"
    },
    {    
        question : "Q2. What disease commonly spread on pirate ships?",
        a: "Typhoid",
        b: "Asthma",
        c: "Scurvy",
        d: "Rickets",
        ans: "ans3"
    },
    {    
        question : "Q3. Who has won the most total Academy Awards?",
        a: "Walt Disney",
        b: "Sony",
        c: "Cartoon Network",
        d: "Comcast",
        ans: "ans1"
    },
    {    
        question : "Q4. What character has both Robert Downey Jr. and Benedict Cumberbatch played?",
        a: "Thor",
        b: "Sherlock Holmes",
        c: "Iron Man",
        d: "Bat Man",
        ans: "ans2"
    },
    {    
        question : "Q5. What software company is headquartered in Redmond, Washington?",
        a: "Amazon",
        b: "Microsoft",
        c: "Flipkart",
        d: "Myntra",
        ans: "ans2"
    },
    {    
        question : "Q6. What Netflix show had the most streaming views in 2021? ",
        a: "Family Man",
        b: "Game of Thrones",
        c: "Kota Factory",
        d: "Squid Games",
        ans: "ans4"
    },
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#op1');
const option2 = document.querySelector('#op2');
const option3 = document.querySelector('#op3');
const option4 = document.querySelector('#op4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const scorearea = document.querySelector('#scorearea');

let questionCount = 0;
let score = 0;

const loadQuestion = () => {
    const questionList = quizques[questionCount];

    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();

const getCheckAnswer = () =>{
    let answer;

    answers.forEach((currAnsEle) => {
       if(currAnsEle.checked) 
        {
            answer = currAnsEle.id;
        }
    });
    return answer;
};

const deselectAll = () => {
    answers.forEach((currAnsEle) => currAnsEle.checked = false );
}

submit.addEventListener('click', () =>{
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);

   if(checkedAnswer == quizques[questionCount].ans)
    {
        score++;
    };

    questionCount++;
    if(questionCount < quizques.length)
    {
        loadQuestion();
    }else{
        scorearea.innerHTML =
       `<h3>You Score ${score}/${quizques.length}</h3>
       <button class="btn" onclick="location.reload()"> Play Again</button>`;

        scorearea.classList.remove('showscore');
    }
})