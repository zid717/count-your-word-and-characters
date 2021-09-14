
var textArea = document.getElementById("texts");

textArea.addEventListener("input", function(){
    
    var texts = this.value;
    var characterAmount = texts.length;
    document.getElementById("characters").innerHTML = characterAmount;

    var cuts = texts.trim();
    var words = cuts.split(" ");
    var perfectWords= words.filter(function(em){
        return em != "";
    })
    
    var perfectWordsLength = perfectWords.length;
   var words = document.getElementById("words");
   words.innerHTML = perfectWordsLength;



  
})
