(function doubleNumber(num) {
  return num * 2;
 })(10);
 
 (function() {
 
  function getTotal(a, b) {
    return a + b;
    }
    
    var $ = 'currency';
    if(true) console.log('Hello World!');
    
 })();



function createButtons() {
   for (var i = 1; i <= 5; i++) {
     var body = document.getElementsByTagName("BODY")[0];
     var button = document.createElement("BUTTON");
     button.innerHTML = 'Button ' + i;
     (function(num){
       button.onclick = function() {
          alert('This is button ' + num);
       }
     })(i);
     body.appendChild(button);
   }
}
 
createButtons();
