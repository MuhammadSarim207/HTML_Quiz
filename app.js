var data = [{Question: 'Q1 : What does HTML stand for?',options: ['Hyper Text Markup Language','Home Tool Markup Language','Hyperlinks and Text Markup Language'],correct:'Hyper Text Markup Language'},{Question: 'Q2 : Who is making the web standards',options: ['Microsoft','Mozilla','Google','The World Web Consortium'],correct: 'HTML'},{Question: 'Q3 : Choose the correct HTML element for the largest heading ',options: ['head','h6','heading','h1'],correct: 'h1'},{Question: 'Q4 : What is the correct HTML element for inserting a line break?',options: ['lb','break','br'],correct: 'br'},{Question: 'Q5 : What is the correct HTML for adding a background color?',options: ['true','false'],correct: 'HTML'},{Question: 'Q6 : Choose the correct HTML element to define important text',options: ['true','false'],correct: 'HTML'},{Question: 'Q7 : Choose the correct HTML element to define emphasized text',options: ['true','false'],correct: 'HTML'},{Question: 'Q8 : What is the correct HTML for creating a hyperlink?',options: ['true','false'],correct: 'HTML'},{Question: 'Q9 : Which character is used to indicate an end tag?',options: ['true','false'],correct: 'HTML'},{Question: 'Q10 : How can you open a link in a new tab/browser window?',options: ['true','false'],correct: 'HTML'},{Question: 'Q11 : Which of these elements are all <table> elements?',options: ['true','false'],correct: 'HTML'},{Question: 'Q12 : Inline elements are normally displayed without starting a new line.',options: ['true','false'],correct: 'HTML'},{Question: 'Q13 : How can you make a numbered list?',options: ['true','false'],correct: 'HTML'},{Question: 'Q14 : How can you make a bulleted list?',options: ['true','false'],correct: 'HTML'},{Question: 'Q15 : What is the correct HTML for making a checkbox?',options: ['true','false'],correct: 'HTML'},{Question: 'Q16 : What is the correct HTML for making a text input field?',options: ['true','false'],correct: 'HTML'},{Question: 'Q17 : What is the correct HTML for making a drop-down list?',options: ['true','false'],correct: 'HTML'},{Question: 'Q18 : What is the correct HTML for making a text area?',options: ['true','false'],correct: 'HTML'},{Question: 'Q19 : What is the correct HTML for inserting an image?',options: ['true','false'],correct: 'HTML'},{Question: 'Q20 : What is the correct HTML for inserting a background image?',options: ['true','false'],correct: 'HTML'},{Question: 'Q21 :The HTML global attribute, "contenteditable" is used to:',options: ['true','false'],correct: 'HTML'},{Question: 'Q22 : HTML comments start with <!-- and end with -->',options: ['true','false'],correct: 'HTML'},{Question: 'Q23 : Block elements are normally displayed without starting a new line.',options: ['true','false'],correct: 'HTML'},{Question: 'Q24 : Which HTML element defines the title of a document?',options: ['true','false'],correct: 'HTML'},{Question: 'Q25 : Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?',options: ['true','false'],correct: 'HTML'},{Question: 'Q26 : Which doctype is correct for HTML5?',options: ['true','false'],correct: 'HTML'},{Question: 'Q27 : Which HTML element is used to specify a footer for a document or section?',options: ['true','false'],correct: 'HTML'},{Question: 'Q28 : In HTML, you can embed SVG elements directly into an HTML page.',options: ['true','false'],correct: 'HTML'},{Question: 'Q29 : What is the correct HTML element for playing video files?',options: ['true','false'],correct: 'HTML'},{Question: 'Q30 : What is the correct HTML element for playing audio files?',options: ['true','false'],correct: 'HTML'}]
var mainDiv = document.getElementById('main')

var subName = document.getElementById('sub-user')
var score = 0;
var stMain = document.getElementById('st-main')
var st = document.getElementById('st')
var userP = document.getElementById('user-p')
var inpDiv = document.getElementById('inp-div')
var secBtn = document.getElementsByClassName('sec-btn')[0]

function questionRen(e) {
    e.preventDefault();
e.target.style.display = 'none'  
e.target.previousElementSibling.style.display = 'none' 
stMain.style.display = 'none'
 inpDiv.style.display = 'none'
 st.style.display= 'none'
         for (let i = 0; i < data.length; i++) {
            mainDiv.innerHTML += `<div data-aos='flip-left' class='q-span' style='background-image: linear-gradient(120deg,rgb(46, 125, 252) 0%, #c2e9fb 100%);'>${data[i].Question}</div>`
        
for (let j = 0; j < data[i].options.length; j++) {
    mainDiv.innerHTML += `<div data-aos='fade-up' class='btn-div'><button class='opt-btn'  style='background-image: linear-gradient(120deg, rgb(187, 252, 187) 0%, rgb(129, 255, 129) 100%)'>${data[i].options[j]}</button></div>`   
   
  var optBtn = document.getElementsByClassName('opt-btn')[0]
  console.log(optBtn.innerText)
         }         
        }
      secBtn.style.display = 'block'
    }
   function getUser(e) {
    e.preventDefault();
    var userInp = document.getElementById('user-inp').value
     if (userInp === '') {
        alert('Please enter your name')
      
     }
     if (userInp.length < 3) {
        alert('Your Name must contain at least 3 characters')
       }
      if (userInp.length > 2) {
        
      inpDiv.style.display = 'none'
        stMain.style.display = 'block'
        userP.innerText = 'Welcome ' + userInp
      } 
     
   }   
   /*
Background Gradients From -- 
https://uigradients.com
*/    
        
    // https://manuel.pinto.dev
