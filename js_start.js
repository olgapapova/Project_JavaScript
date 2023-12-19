"use strict"

   let svgSunBr1=document.querySelector(".BB1");
   let svgSunBr2=document.querySelector(".BB2");

   setInterval (timerSun, 7000);

   function timerSun() {
      svgSunBr1.setAttribute('y1', '380');
      svgSunBr1.setAttribute('y2', '430');
      svgSunBr2.setAttribute('y1', '435');
      svgSunBr2.setAttribute('y2', '373');
      setTimeout(timerSun2, 400);
   }

   function timerSun2() {
      svgSunBr1.setAttribute('y1', '413');
      svgSunBr1.setAttribute('y2', '466');
      svgSunBr2.setAttribute('y1', '470');
      svgSunBr2.setAttribute('y2', '408');
   }