/* 

 * tpp_mode.js

 *

 * Auto vote @ every 30 seconds for TPP game mode **works only with twitch IRC web client**

 * 

 * How to: 
 * copy paste this script into the console 
 * then type into the console TPP('democracy'); or TPP('anarchy'); 
 *
 * => Anarchy mode is the "classic" mode, where everyone's inputs are applied immediately.
 * => Democracy mode is vote-based and has a more sophisticated input system.
 *

 * Author: globz @ www.kittybomber.com

 */


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

 function democracy() { $('#chat_text_input').valAppend('democracy'); TPP('democracy');} //Game mode : Democracy

  function anarchy() { $('#chat_text_input').valAppend('anarchy'); TPP('anarchy');} //}   //Game mode : Anarchy

   function TPP(mode) {

    if (mode == 'democracy'){setTimeout(function(){democracy();},29000);}

     if (mode == 'anarchy'){setTimeout(function(){anarchy();},29000);}

      setTimeout(function(){$("#chat_speak").click();},30000); //send game mode every 30 seconds

    }
