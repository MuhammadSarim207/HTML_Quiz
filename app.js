var data = [{Question: 'Q1 : What does HTML stand for?',options: ['Hyper Text Markup Language','Home Tool Markup Language','Hyperlinks and Text Markup Language'],correct:'Hyper Text Markup Language'},{Question: 'Q2 : Who is making the web standards',options: ['Microsoft','Mozilla','Google','The World Web Consortium'],correct: 'The World Web Consortium'},{Question: 'Q3 : Choose the correct HTML element for the largest heading ',options: ['head','h6','heading','h1'],correct: 'h1'},{Question: 'Q4 : What is the correct HTML element for inserting a line break?',options: ['lb','break','br'],correct: 'br'},{Question: 'Q5 : What is the correct HTML for adding a background color?',options: ['&lt;body style="background-color:yellow;"&gt;','&lt;body bg="yellow"&gt;','&lt;background&gt;yellow&lt;/background&gt;'],correct: '&lt;body style="background-color:yellow;"&gt;'},{Question: 'Q6 : Choose the correct HTML element to define important text',options: ['i','important','strong','B'],correct: 'strong'},{Question: 'Q7 : Choose the correct HTML element to define emphasized text',options: ['em','i','italic'],correct: 'em'},{Question: 'Q8 : What is the correct HTML for creating a hyperlink?',options: ['&lt;a name="http://www.w3schools.com"&gt;W3Schools.com&lt;/a&gt;',' &lt;a url="http://www.w3schools.com"&gt;W3Schools.com&lt;/a&gt;','&lt;a&gt;http://www.w3schools.com&lt;/a&gt;','&lt;a href="http://www.w3schools.com"&gt;W3Schools&lt;/a&gt;'],correct: '&lt;a href="http://www.w3schools.com"&gt;W3Schools&lt;/a&gt;'},{Question: 'Q9 : Which character is used to indicate an end tag?',options: ['<','^','/','*'],correct: '/'},{Question: 'Q10 : How can you open a link in a new tab/browser window?',options: ['&lt;a href="url" target="new"&gt;<','&lt;a href="url" new&gt;','&lt;a href="url" target="_blank"&gt;'],correct: '&lt;a href="url" target="new"&gt;<'},{Question: 'Q11 : Which of these elements are all <table> elements?',options: ['&lt;table&gt;&lt;tr&gt;&lt;td&gt;','&lt;a href="url" target="new"&gt;<',' &lt;thead&gt;&lt;body&gt;&lt;tr&gt;',' &lt;table&gt;&lt;tr&gt;&lt;tt&gt;'],correct: 'HTML'},{Question: 'Q12 : Inline elements are normally displayed without starting a new line.',options: ['True','False'],correct: 'True'},{Question: 'Q13 : How can you make a numbered list?',options: ['ul','dl','list','ol'],correct: 'ol'},{Question: 'Q14 : How can you make a bulleted list?',options: ['dl','ol','ul','list'],correct: 'ul'},{Question: 'Q15 : What is the correct HTML for making a checkbox?',options: ['&lt;input type="checkbox"&gt;',' &lt;input type="check"&gt;','&lt;checkbox&gt;',' &lt;check&gt;'],correct: '&lt;input type="check"&gt;'},{Question: 'Q16 : What is the correct HTML for making a text input field?',options: ['&lt;textfield&gt;',' &lt;input type="text"&gt;','&lt;input type="textfield"&gt;','&lt;textinput type="text"&gt;'],correct: '&lt;textfield&gt;'},{Question: 'Q17 : What is the correct HTML for making a drop-down list?',options: ['&lt;list&gt;','&lt;input type="dropdown"&gt;','&lt;select&gt;','&lt;input type="list"&gt;'],correct: '&lt;list&gt;'},{Question: 'Q18 : What is the correct HTML for making a text area?',options: [' &lt;input type="textarea"&gt;','&lt;input type="textbox"&gt;','&lt;textarea&gt;'],correct: '&lt;input type="textarea"&gt;'},{Question: 'Q19 : What is the correct HTML for inserting an image?',options: ['&lt;img href="image.gif" alt="MyImage"&gt;',' &lt;image src="image.gif" alt="MyImage"&gt;','&lt;img src="image.gif" alt="MyImage"&gt;','&lt;img alt="MyImage"&gt;image.gif&lt;/img&gt;'],correct: '&lt;img href="image.gif" alt="MyImage"&gt;'},{Question: 'Q20 : What is the correct HTML for inserting a background image?',options: ['&lt;body bg="background.gif"&gt;','&lt;body style="background-image:url(background.gif)"&gt;','&lt;background img="background.gif"&gt;'],correct: '&lt;body bg="background.gif"&gt;'},{Question: 'Q21 :The HTML global attribute, "contenteditable" is used to:',options: [' Return the position of the first found occurrence of content inside a string',' Specify whether the content of an element should be editable or not',' Update content from the server','Specifies a context menu for an element. The menu appears when a user right-clicks on the element'],correct: 'Specify whether the content of an element should be editable or not'},{Question: 'Q22 : HTML comments start with <!-- and end with -->',options: ['True','False'],correct: 'True'},{Question: 'Q23 : Block elements are normally displayed without starting a new line.',options: ['True','False'],correct: 'False'},{Question: 'Q24 : Which HTML element defines the title of a document?',options: ['meta','head','title'],correct: 'title'},{Question: 'Q25 : Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?',options: ['longdesc','alt','title','src'],correct: 'alt'},{Question: 'Q26 : Which doctype is correct for HTML5?',options: ['&lt;!DOCTYPE html&gt;',' &lt;!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 5.0//EN" "http://www.w3.org/TR/html5/strict.dtd"&gt;',' &lt;!DOCTYPE HTML5&gt;'],correct: ' &lt;!DOCTYPE html&gt;'},{Question: 'Q27 : Which HTML element is used to specify a footer for a document or section?',options: ['bottom','section','footer'],correct: 'footer'},{Question: 'Q28 : In HTML, you can embed SVG elements directly into an HTML page.',options: ['Frue','False'],correct: 'False'},{Question: 'Q29 : What is the correct HTML element for playing video files?',options: ['media','video','movie'],correct: 'video'},{Question: 'Q30 : What is the correct HTML element for playing audio files?',options: ['sound','audio','mp3'],correct: 'audio'}]
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
