/* 

Permission is hereby granted, free of charge, to any person obtaining a copy 
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights 
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell 
copies of the Software, and to permit persons to whom the Software is furnished 
to do so, subject to the following conditions:

 

The above copyright notice and this permission notice shall be included in all 
copies or substantial portions of the Software.

 

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A 
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT 
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION 
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE 
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


 * tpp_mode.js*
 
 * Auto vote @ every 30 seconds for TPP game mode **works only with twitch IRC web client**
 * Keep track of your votes


How to: 

 * copy paste the script into your browser console 
 * click the vote button by selecting either anarchy/democracy mode

=> Anarchy mode is the "classic" mode, where everyone's inputs are applied immediately.
=> Democracy mode is vote-based and has a more sophisticated input system.


 * Author: globz @ www.kittybomber.com
 */



//Homebrew Append function for chat box
(function($){

    $.fn.extend({
     
        valAppend: function(text){

            return this.each(function(i,e){

                var $e = $(e);

                $e.val($e.val() + text);

            });

        }
        
    });

 })(jQuery);


 //Keep track of vote counts
  var voteD = 0; //Democracy votes
   var voteA = 0;//Anarchy votes
    function voteCount(mode){

      if (mode == 'democracy'){ voteUP = voteD++; } //Add +1 vote for democracy

        if (mode == 'anarchy'){ voteUP = voteA++; } //Add +1 vote for anarchy

                                                                                                 }                         

  //Game mode : +1 vote for Democracy
   function democracy() {
                                            document.getElementById('chat_text_input').setAttribute('disabled','true'); 
                                               $('#chat_text_input').val('').valAppend('democracy'); 
                                                 TPP('democracy'); 
                                                   voteCount('democracy');
                                                                                                } 

 //Game mode : +1 vote for Anarchy
    function anarchy() { 
                                       document.getElementById('chat_text_input').setAttribute('disabled','true'); 
                                          $('#chat_text_input').val('').valAppend('anarchy'); 
                                            TPP('anarchy'); 
                                              voteCount('anarchy');
                                                                                               }   


     function TPP(mode) {
      
      if (mode == 'democracy'){setTimeout(function(){democracy();},29000);}

       if (mode == 'anarchy'){setTimeout(function(){anarchy();},29000);}

        //send game mode vote every 30 seconds
        setTimeout(function(){ document.getElementById('chat_text_input').removeAttribute("disabled"); $("#chat_speak").click();$('#voteA').empty().append("("+ voteA +")");$('#voteD').empty().append("("+ voteD +")");},30000); 



                                                                                                }
                                                                                                
// --- UI ---

$(
    "<style type='text/css' >" +

        "a.anarchy {" +

            "width: 50px;" +

            "padding-left: 0;" +

            "padding-top: 0;" +

            "height: 8px;" +

            "line-height: 115%;" +

            "cursor: pointer;" +

        "}" +

        "a.democracy {" +

            "width: 35px;" +

            "padding-left: 15px;" +

            "padding-top: 0;" +

            "height: 8px;" +

            "line-height: 115%;" +

            "cursor: pointer;" +

        "}" +       

    " </style>"
    
).appendTo("head");

// Add vote buttons under the chat box
$("<a class='anarchy'>[Vote Anarchy]</a><i id='voteA'></i><a class='democracy'>[Vote Democracy]</a><i id='voteD'></i>").insertAfter("#chat_line_list");

$(".anarchy").click(function () {
 
    TPP('anarchy');
    
});

$(".democracy").click(function () {

    TPP('democracy');

});
