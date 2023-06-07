'use strict';//Used to get useful errors when you make mistakes
//Before you can add the event handler, you need a reference to the button element.
const switcher= document.querySelector('.btn');
//Below we then add event handler
switcher.addEventListener('click', function(){
   document.body.classList.toggle('light-theme');
   document.body.classList.toggle('dark-theme');
    
   //This is how the btn will update its state
   const updateBtn= document.body.updateBtn;
   if (updateBtn=="light-theme") {
         this.textContent="Dark";
   } else{
        this.textContent="Light";
   }
       console.log('Current class name'+ updateBtn);  //Pres log enter for short cut 
});


