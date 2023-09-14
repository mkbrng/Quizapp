let questions = [
{
"question": "Wer hat HTML erfunden ?",
"answer_1": "Robbie Williams",
"answer_2":"Lady Gaga",
"answer_3":"Tim Berners-Lee",
"answer_4":"Justin Bieber",
"right_answer": 3
},
{
    "question": "Welche Programmiersprache wird hauptsächlich für die Frontend-Webentwicklung verwendet?",
    "answer_1": "Java",
    "answer_2": "Python",
    "answer_3": "JavaScript",
    "answer_4": "C++",
    "right_answer": 3
  },
  {
    "question": "Was steht für 'HTML' in der Webentwicklung?",
    "answer_1": "Hypertext Markup Language",
    "answer_2": "Hyper Transfer Markup Language",
    "answer_3": "High Technology Modern Language",
    "answer_4": "Hyperlink and Text Markup Language",
    "right_answer": 1
  },
  {
    "question": "Welche der folgenden Aussagen ist wahr: 'console.log' ist eine Funktion in welcher Sprache?",
    "answer_1": "HTML",
    "answer_2": "CSS",
    "answer_3": "JavaScript",
    "answer_4": "Java",
    "right_answer": 3
  },
  {
    "question": "Welche CSS-Eigenschaft wird verwendet, um den Text in einem Element fett zu machen?",
    "answer_1": "font-weight",
    "answer_2": "text-decoration",
    "answer_3": "font-style",
    "answer_4": "text-transform",
    "right_answer": 1
  },
  {
    "question": "Was ist der Zweck von 'querySelector' in JavaScript?",
    "answer_1": "Um HTML-Elemente zu erstellen.",
    "answer_2": "Um auf Elemente in einem Array zuzugreifen.",
    "answer_3": "Um ein Element anhand seines Selektors zu finden und darauf zuzugreifen.",
    "answer_4": "Um Funktionen in einem JavaScript-Programm zu definieren.",
    "right_answer": 3
  },
  {
    "question": "Welche Dateiendung wird in der Regel für JavaScript-Dateien verwendet?",
    "answer_1": ".html",
    "answer_2": ".css",
    "answer_3": ".js",
    "answer_4": ".json",
    "right_answer": 3
  },
  {
    "question": "Wie nennt man in HTML eine Liste von Definitionen und ihren Beschreibungen?",
  "answer_1": "Definition List",
  "answer_2": "Ordered List",
  "answer_3": "Unordered List",
  "answer_4": "List Item",
  "right_answer": 1
  }
];

let currentQuestion = 0;
let rightAnswer = 0;

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;
     showQuestion();
}

function showQuestion() {
    
    if ( (currentQuestion + 1 ) < questions.length) {
        let percent = currentQuestion / questions.length  ;
        let question = questions[currentQuestion];
            percent = Math.round(percent * 100);

    document.getElementById('question').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
    document.getElementById('current-question').innerHTML = currentQuestion+1;
   document.getElementById('progess').innerHTML = `${percent} %`;
   document.getElementById('progess').style = `width:${percent}%;`;

    } else {
        showFinalCard();
          }
    
    }
    

 

function next() {
    currentQuestion++;
    resetButtons();
    showQuestion();
}

function answer(selector) {
    let question = questions[currentQuestion];
    let selection = selector.slice(-1);
    
    if (selection == question['right_answer']) {
        document.getElementById(selector).classList.add('bg-success')
        rightAnswer++
        document.getElementById('next-button').disabled = false;
    } else {
        document.getElementById(selector).classList.add('bg-danger')
        document.getElementById(`answer_${question['right_answer']}`).classList.add('bg-success')
    
    document.getElementById('next-button').disabled = false;}

    
}

function resetButtons() {
    document.getElementById('next-button').disabled = true;
    document.getElementById('answer_1').classList.remove('bg-success','bg-danger');
    document.getElementById('answer_2').classList.remove('bg-success','bg-danger');
    document.getElementById('answer_3').classList.remove('bg-success','bg-danger');
    document.getElementById('answer_4').classList.remove('bg-success','bg-danger');
}

function showFinalCard() {
    document.getElementById('endcard').style = 'display:flex;'  
        document.getElementById('main').style = 'display:none;'
    document.getElementById('all-final-questions').innerHTML = questions.length
    document.getElementById('final-rightAnswer').innerHTML = rightAnswer
    document.getElementById('restart').disabled = false;

}

function restartGame() {

     currentQuestion = 0;
     rightAnswer = 0;
    document.getElementById('endcard').style = 'display:none;'  
        document.getElementById('main').style = 'display:flex;'
    init();

}