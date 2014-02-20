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
 *
 *
 * tpp_mode.js
 *
 * Auto vote @ every 30 seconds for TPP game mode **works only with twitch IRC web client**
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
