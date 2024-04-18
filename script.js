function functionRedact(){
  
     let content = document.getElementById('content').value;
     let redactContent = document.getElementById('redact-content').value.split(",").map(word => word.trim());
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
  // Create a regular expression with all redacted words joined by "|" for alternation
            let regex = new RegExp("\\b(" + redactContent.join("|") + ")\\b", "gi");
            // Replace all occurrences of the redacted words with the chosen redaction character
            let redactedOutput = content, function(match) {
                return redactionChar.repeat(match.length);
            });
            
            return redactedOutput;
  
}


function resetFunction(){
     document.getElementById('content').value = "";
     document.getElementById('redact-content').value = "";
     document.getElementById('redaction-char').value = "";
     document.getElementById('redacted-content').innerHTML = "";
}
