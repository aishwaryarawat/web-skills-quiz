const quiz = [
    {
        question:"What does HTML stand for?",
        options:[
            "Hyper Trainer Marking Language",
            "Hyper Text Markup Language",
            "Hyper Text Marketing Language",
            "Hyper Tool Multi Language"
        ],
        answer:"Hyper Text Markup Language"
    },
    {
        question:"Which language is used for styling web pages?",
        options:[
            "HTML",
            "CSS",
            "Python",
            "C++"
        ],
        answer:"CSS"
    },
    {
        question:"Which tag is used to create a hyperlink in HTML?",
        options:[
            "<a>",
            "<link>",
            "<href>",
            "<url>"
        ],
        answer:"<a>"
    },
    {
        question:"Which property changes text color in CSS?",
        options:[
            "font-color",
            "text-color",
            "color",
            "background-color"
        ],
        answer:"color"
    },
    {
        question:"Which symbol is used for IDs in CSS?",
        options:[
            ".",
            "#",
            "*",
            "@"
        ],
        answer:"#"
    },
    {
        question:"Which JavaScript keyword declares a variable?",
        options:[
            "var",
            "int",
            "string",
            "define"
        ],
        answer:"var"
    },
    {
        question:"Which HTML tag is used for inserting an image?",
        options:[
            "<pic>",
            "<image>",
            "<img>",
            "<src>"
        ],
        answer:"<img>"
    },
    {
        question:"Which method displays output in the browser console?",
        options:[
            "console.log()",
            "print()",
            "display()",
            "write()"
        ],
        answer:"console.log()"
    },
    {
        question:"Which CSS property controls text size?",
        options:[
            "font-style",
            "font-weight",
            "font-size",
            "text-size"
        ],
        answer:"font-size"
    },
    {
        question:"Which company developed JavaScript?",
        options:[
            "Microsoft",
            "Google",
            "Netscape",
            "Apple"
        ],
        answer:"Netscape"
    }
];
let start = document.getElementById("start");
let main = document.getElementById("main");
let quesBox = document.getElementById("quesBox");
let ques = document.getElementById("ques");
let qno = document.getElementById("qno");
let opts = document.getElementsByClassName("opt");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let submit = document.getElementById("submit");
let resultBox = document.getElementById("resultBox");
let restart = document.getElementById("restart");
let userans = [];
let quesNo = 0;
let conf="";
let score = 0;
for(let i=0; i<opts.length; i++){
    opts[i].addEventListener("click",()=>{
        for(let j=0; j<opts.length; j++){
            opts[j].style.backgroundColor = "";
            opts[j].style.transform = "scale(1)";
        }
        opts[i].style.backgroundColor = "rgba(14,51,83,0.7)";
        opts[i].style.transform = "scale(1.02)";
        userans[quesNo] = opts[i].textContent;
    });
}
start.addEventListener("click",()=>{
    main.style.display="none";
    quesBox.style.display = "block";
    loadQues();
})
next.addEventListener("click",()=>{
    if(quesNo < quiz.length-1){
        quesNo++;
        loadQues();
    }
})
prev.addEventListener("click",()=>{
    if(quesNo > 0){
        quesNo--;
        loadQues();
    }
})
function loadQues(){
    ques.textContent = quiz[quesNo].question;
    for(let i=0; i< opts.length;i++){
        opts[i].style.backgroundColor = "";
        opts[i].style.transform = "scale(1)";
        opts[i].textContent = quiz[quesNo].options[i];
    }
    qno.textContent = quesNo+1;
}
submit.addEventListener("click",()=>{
    score = 0;
    for(let i=0; i<quiz.length; i++){
        if(userans[i] === quiz[i].answer){
            score++;
        }
    }
    conf = confirm("Are you sure to submit?");
    if(conf){
    quesBox.style.display = "none";
    resultBox.style.display="block";
    finalScore.textContent = `Your Score: ${score}/${quiz.length}`;
    }
})
restart.addEventListener("click",()=>{
    quesNo = 0;
    score = 0;
    userans = [];
    resultBox.style.display = "none";
    quesBox.style.display = "block";
    loadQues();
})