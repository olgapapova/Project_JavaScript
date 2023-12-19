"use strict"

   let border=document.getElementsByClassName('imageBord');
   for (let i=0; i<border.length; i++) {
      border[i].addEventListener('mousedown', onDragOver, {passive: false});
   }
   let imgTag=document.getElementsByClassName('im');
   for (let i=0; i<imgTag.length; i++) {
      imgTag[i].addEventListener('mousedown', onDragOver, {passive: false});
   }
   let str=document.getElementById('stEl');
   str.addEventListener('mousedown', onDragOver, {passive: false});

   function onDragOver (eo) {
      eo=eo || window.event;
      eo.preventDefault();
   }