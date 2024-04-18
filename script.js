function functionRedact(){
  
     let content = document.getElementById('content').value;
     let redactContent = document.getElementById('redact-content').value;
     let redactionChar = document.getElementById('redaction-char').value;
     let redactedContent = document.getElementById('redacted-content');

     // This checks if any of the input is empty
     if(document.getElementById('content').value === ""){
          alert("Please enter the content you want to redact!");
          return;
     }else if(document.getElementById('redact-content').value === ""){
          alert("Please enter the words you want to be redacted!");
          return;
     }else if(document.getElementById('redaction-char').value === ""){
          alert("Please choose your replacement!");
          return;
     }


     let redactedOutput = redact(content, redactContent, redactionChar);

     // Display the redacted sentence
     redactedContent.textContent = redactedOutput;

     
}

function redact(content, redactContent, redactionChar){
  let words = content.split(" ");
  
  // Iterate through each word
  for(let i = 0; i < words.length; i++){
     // Checks if the word matches the specified word to redact
     if(compareIgnoreCase(words[i], redactContent)){
          // Replaces the word with the chosen redaction character
          words[i] = redactionChar.repeat(words[i].length);
     }
  }
  return words.join(" ")
}

function compareIgnoreCase(firstWord, secondWord){
     if(firstWord.length !== secondWord.length){
          return false;
     }
     for(let i = 0; i < firstWord.length; i++){
          if(firstWord[i].toUpperCase() !== secondWord[i].toUpperCase()){
               return false;
          }
     }
     return true;
}

function resetFunction(){
     document.getElementById('content').value = "";
     document.getElementById('redact-content').value = "";
     document.getElementById('redaction-char').value = "";
     document.getElementById('redacted-content').innerHTML = "";
}


