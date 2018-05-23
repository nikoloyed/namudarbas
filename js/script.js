'use strict';

/* Tasks:
*  1. Paspaudus ant navigacijos linku jie turi likti "active"
*     būsenoje, t.y pabraukti. TIP: panaudoti "this" žodį.
*
*  2. Paspaudus ant baltos rodyklės rožinėje sekcijoje,
*     ekranas turi gražiai pasislinkit iki "team" sekcijos
*
*  3. Pridėti įkonėlę far fa-times-circle fa-2x prie kiekvieno žmogaus
*     Paspaudus ant jos turi gražiai pradinkit
*     žmogaus nuotrauka kartu su tekstu.
*     TIP: panaudoti "this" ir animate metodą
*
*  4. Susikurti mygtuką "Make small" šale "Follow on instagram" mygtuko.
*     Susikurti klasę .small CSS'e, ji turi pamažinti instagramo nuotraukų aukštį.
*     Paspaudus ant mygtuko "Make small", reikia uždėti klasę .small ant nuotraukų.
*     Jei vartotojas paspaudžia dar kartą ant to mygtuko, tai nuotraukos turi padidėti atgal.
*     TIP: panaudoti toggleClass metodą
*
***  5. (EXTRA) Kai forma yra išsiunčiama paslėpti gražiai visą section.contact sekciją.
*               Kai animacija pasibaigia reikia ištrinti visą section.contact, jog ji
*               neužimtų vietos ir nesugadintų dizaino.
*
*    TIP: Panaudoti formos "submit" įvykį, animate funkciją
*
***   6. (EXTRA) Patobulinti 3. užduotį. Kai visi elementai yra paslėpti ištrinti visą
*              section.team sekciją, naudoti control flow(if/else), kintamuosius, sekti
*   kiek elementų buvo uždaryta, jei buvo uždaryti visi tai animuoti paslėpimą.
*
*/

$(document).ready(function() {
 // 1 uzd
 $('.navigation-top .container ul li').click(function(){
   $('li').removeClass("active");
   $(this).addClass("active");
 });
});
// 2 uzd
$(document).ready(function()
{
 $('#js-scroll').click(function()
 {
   $('html,body').animate({
     scrollTop: $(".team").offset().top
   }, 1000);
 })
});
// 3 uzd 6 uzd
let clicks = 0;
$(document).ready(function() {

 $('.member i').click(function()
 {
   $(this).parent().fadeOut(1000, function(){ $(this).remove();});
   clicks++;
   if(clicks === 3){
     $('.team').fadeOut(500, function(){ $(this).remove();});
   }

 })
});
// 4 uzd
$(document).ready(function() {
 $('#follow').click(function()
 {
   $('.instagram').toggleClass('small');
 })
});
// 5 uzd
$(document).ready(function() {
 $('#contact-form button').click(function()
 {
   $('section.contact').fadeOut(1000, function(){ $(this).remove();});
   $("form").submit(function() { return false; });
 })
});
// drop down box

$(document).ready(function() {

 $('#js-open-nav').click(function() {

     $('.menu').toggleClass('animated');
     $("#mysoundclip")[0].play();
 });


});
