"use strict"

   let srcImg=[fish, cube, sun, animal, apple, eggplant, circle, animal2, cherries, cone, duck1, car, peach, star, tomato, owl, beet, kv, twitter];
   let sch=0;
   let audioZv=new Audio("Audio_Z/zv1.mp3");
   let cont=document.querySelector('.conteyner');
   let cellImg=null; // 5-от меньшего к большему, 6-от большего к меньшему
   let cellImg2_5=1; // 1-imgB2, 2-imgBM2, 3-imgM2, 4-imgL2
   let cellImg2_6=1; // 1-imgB2, 2-imgBM2, 3-imgM2, 4-imgL2
   let cellImg2_7=1; // 1-imgB2, 2-imgBM2, 3-imgM2, 4-imgL2
   let cellImg2_8=1; // 1-imgB2, 2-imgBM2, 3-imgM2, 4-imgL2
   let question=1; // 1-в первой ячейке, 2-во второй ячейке, 3-в третьей ячейке, 4-в четвертой ячейке
   let dragEl=null;
   let dZonD=null;
   let bDoc=document.getElementById('bod');
   bDoc.addEventListener('dragover', onDragOver, {passive: false});

   let imgCont1a=document.getElementById('border1a');
   let imgCont1b=document.getElementById('border1b');
   imgCont1b.addEventListener('drop', onDrop, {passive: false});
   let imgCont2a=document.getElementById('border2a');
   let imgCont2b=document.getElementById('border2b');
   imgCont2b.addEventListener('drop', onDrop, {passive: false});
   let imgCont3a=document.getElementById('border3a');
   let imgCont3b=document.getElementById('border3b');
   imgCont3b.addEventListener('drop', onDrop, {passive: false});
   let imgCont4a=document.getElementById('border4a');
   let imgCont4b=document.getElementById('border4b');
   imgCont4b.addEventListener('drop', onDrop, {passive: false});

   let imgCont5=document.getElementById('border5');
   let imgCont6=document.getElementById('border6');
   let imgCont7=document.getElementById('border7');
   let imgCont8=document.getElementById('border8');

   let imgQuestion=document.createElement('img');  
   imgQuestion.className='imgQuestion';
   imgQuestion.setAttribute('src', 'Image/vopros.png');
   imgQuestion.addEventListener('mousedown', onDragOver, {passive: false});
   let imgB=document.createElement('img');  
   imgB.className='imgBig';
   imgB.addEventListener('mousedown', onDragOver, {passive: false});
   let imgBM=document.createElement('img');  
   imgBM.className='imgBigMiddle';
   imgBM.addEventListener('mousedown', onDragOver, {passive: false});
   let imgM=document.createElement('img');  
   imgM.className='imgMiddle';
   imgM.addEventListener('mousedown', onDragOver, {passive: false});
   let imgL=document.createElement('img');  
   imgL.className='imgLittle';
   imgL.addEventListener('mousedown', onDragOver, {passive: false});

   let imgM2=document.createElement('img');  
   imgM2.className='imgMiddle';
   imgM2.addEventListener('dragstart', onDragStart, {passive: false});
   imgM2.addEventListener('touchstart', onTouchStart, {passive: false});
   imgM2.addEventListener('touchmove', onTouchMove, {passive: false});
   imgM2.addEventListener('touchend', onTouchEnd, {passive: false});
   let imgB2=document.createElement('img');  
   imgB2.className='imgBig';
   imgB2.addEventListener('dragstart', onDragStart, {passive: false});
   imgB2.addEventListener('touchstart', onTouchStart, {passive: false});
   imgB2.addEventListener('touchmove', onTouchMove, {passive: false});
   imgB2.addEventListener('touchend', onTouchEnd, {passive: false});
   let imgL2=document.createElement('img');  
   imgL2.className='imgLittle';
   imgL2.addEventListener('dragstart', onDragStart, {passive: false});
   imgL2.addEventListener('touchstart', onTouchStart, {passive: false});
   imgL2.addEventListener('touchmove', onTouchMove, {passive: false});
   imgL2.addEventListener('touchend', onTouchEnd, {passive: false});
   let imgBM2=document.createElement('img');  
   imgBM2.className='imgBigMiddle';
   imgBM2.addEventListener('dragstart', onDragStart, {passive: false});
   imgBM2.addEventListener('touchstart', onTouchStart, {passive: false});
   imgBM2.addEventListener('touchmove', onTouchMove, {passive: false});
   imgBM2.addEventListener('touchend', onTouchEnd, {passive: false});
   
   function game(src) {
      sch+=1;
      question=randomDiap(1, 4);
      cellImg=randomDiap(5, 6);

      cellImg2_5=randomDiap(1, 4);
      do {
         cellImg2_6=randomDiap(1, 4);
      } while (cellImg2_6===cellImg2_5);
      do {
         cellImg2_7=randomDiap(1, 4);
      } while (cellImg2_7===cellImg2_5 || cellImg2_7===cellImg2_6);
      do {
      cellImg2_8=randomDiap(1, 4);
      } while (cellImg2_8===cellImg2_5 || cellImg2_8===cellImg2_6 || cellImg2_8===cellImg2_7);

      if (cellImg===5) {
         imgCont1a.appendChild(imgL);
         imgL.setAttribute('src', src);
         imgCont2a.appendChild(imgM);
         imgM.setAttribute('src', src);
         imgCont3a.appendChild(imgBM);
         imgBM.setAttribute('src', src);
         imgCont4a.appendChild(imgB);
         imgB.setAttribute('src', src);
      } 
      if (cellImg===6) {
         imgCont1a.appendChild(imgB);
         imgB.setAttribute('src', src);
         imgCont2a.appendChild(imgBM);
         imgBM.setAttribute('src', src);
         imgCont3a.appendChild(imgM);
         imgM.setAttribute('src', src);
         imgCont4a.appendChild(imgL);
         imgL.setAttribute('src', src);
      }

      if (question===1) {
         imgCont1a.style.display='none';
         imgCont2b.style.display='none';
         imgCont3b.style.display='none';
         imgCont4b.style.display='none';
         imgCont1b.style.display='inline-block';
         imgCont1b.appendChild(imgQuestion);
         imgCont2a.style.display='inline-block';
         imgCont3a.style.display='inline-block';
         imgCont4a.style.display='inline-block';
      }
      if (question===2) {
         imgCont1b.style.display='none';
         imgCont2a.style.display='none';
         imgCont3b.style.display='none';
         imgCont4b.style.display='none';
         imgCont1a.style.display='inline-block';
         imgCont2b.style.display='inline-block';
         imgCont2b.appendChild(imgQuestion);
         imgCont3a.style.display='inline-block';
         imgCont4a.style.display='inline-block';
      }
      if (question===3) {
         imgCont1b.style.display='none';
         imgCont2b.style.display='none';
         imgCont3a.style.display='none';
         imgCont4b.style.display='none';
         imgCont1a.style.display='inline-block';
         imgCont2a.style.display='inline-block';
         imgCont3b.style.display='inline-block';
         imgCont3b.appendChild(imgQuestion);
         imgCont4a.style.display='inline-block';
      }
      if (question===4) {
         imgCont1b.style.display='none';
         imgCont2b.style.display='none';
         imgCont3b.style.display='none';
         imgCont4a.style.display='none';
         imgCont1a.style.display='inline-block';
         imgCont2a.style.display='inline-block';
         imgCont3a.style.display='inline-block';
         imgCont4b.style.display='inline-block';
         imgCont4b.appendChild(imgQuestion);
      }  

      if (cellImg2_5===1) {
         imgCont5.appendChild(imgB2);
         imgB2.setAttribute('src', src);
      }
      if (cellImg2_5===2) {
         imgCont5.appendChild(imgBM2);
         imgBM2.setAttribute('src', src);
      }
      if (cellImg2_5===3) {
         imgCont5.appendChild(imgM2);
         imgM2.setAttribute('src', src);
      }
      if (cellImg2_5===4) {
         imgCont5.appendChild(imgL2);
         imgL2.setAttribute('src', src);
      }
      if (cellImg2_6===1) {
         imgCont6.appendChild(imgB2);
         imgB2.setAttribute('src', src);
      }
      if (cellImg2_6===2) {
         imgCont6.appendChild(imgBM2);
         imgBM2.setAttribute('src', src);
      }
      if (cellImg2_6===3) {
         imgCont6.appendChild(imgM2);
         imgM2.setAttribute('src', src);
      }
      if (cellImg2_6===4) {
         imgCont6.appendChild(imgL2);
         imgL2.setAttribute('src', src);
      }
      if (cellImg2_7===1) {
         imgCont7.appendChild(imgB2);
         imgB2.setAttribute('src', src);
      }
      if (cellImg2_7===2) {
         imgCont7.appendChild(imgBM2);
         imgBM2.setAttribute('src', src);
      }
      if (cellImg2_7===3) {
         imgCont7.appendChild(imgM2);
         imgM2.setAttribute('src', src);
      }
      if (cellImg2_7===4) {
         imgCont7.appendChild(imgL2);
         imgL2.setAttribute('src', src);
      }
      if (cellImg2_8===1) {
         imgCont8.appendChild(imgB2);
         imgB2.setAttribute('src', src);
      }
      if (cellImg2_8===2) {
         imgCont8.appendChild(imgBM2);
         imgBM2.setAttribute('src', src);
      }
      if (cellImg2_8===3) {
         imgCont8.appendChild(imgM2);
         imgM2.setAttribute('src', src);
      }
      if (cellImg2_8===4) {
         imgCont8.appendChild(imgL2);
         imgL2.setAttribute('src', src);
      }
      
   }
   function onDrop (eo) {
         eo=eo || window.event;
//         if (sch===(srcImg.length+1)) {
 //           let plField=document.querySelector('.playingField');
   //         let plField2=document.querySelector('.playingField2');
  //          cont.removeChild(plField);
  //          cont.removeChild(plField2);
 //           let spanTag=document.createElement('span');
  //          spanTag.innerHTML='Умница!';
  //          spanTag.className='Finish';
   //         cont.appendChild(spanTag);
  //          return;
 //        }
         if (cellImg===5) {
            if ((question===1 && dragEl===imgL2) || (question===2 && dragEl===imgM2) || (question===3 && dragEl===imgBM2) || (question===4 && dragEl===imgB2)) 
            {  
               imgQuestion.parentNode.removeChild(imgQuestion);
               if (dZonD===null)
                  eo.target.appendChild(dragEl);
               else
                  console.log('Ok'); 
               finishGame();
               game(srcImg[sch]);
               sound();
            }
            else {
               if (dZonD===null)
                  return;
               else {
                  dragEl.parentNode.appendChild(dragEl);
                  dragEl.style.left=imgReturnX+'px';
                  dragEl.style.top=imgReturnY+'px';
                  vibro();
               }
            }
         }
         if (cellImg===6) {
            if ((question===1 && dragEl===imgB2) || (question===2 && dragEl===imgBM2) || (question===3 && dragEl===imgM2) || (question===4 && dragEl===imgL2)) 
            {  
               imgQuestion.parentNode.removeChild(imgQuestion);
               if (dZonD===null)
                  eo.target.appendChild(dragEl);
               else
                  console.log('Ok');
               finishGame();
               game(srcImg[sch]);
               sound();
            }
            else {
               if (dZonD===null)
                  return;
               else {
                  dragEl.parentNode.appendChild(dragEl);
                  dragEl.style.left=imgReturnX+'px';
                  dragEl.style.top=imgReturnY+'px';
                  vibro();
               }
            }
         }
   }

   function onDragStart (eo) {
      eo=eo || window.event;
      dragEl=eo.target;
   }

   function onDragOver (eo) {
      eo=eo || window.event;
      eo.preventDefault();
   }

   function randomDiap(n,m) {
      return Math.floor(Math.random()*(m-n+1))+n;
   }

   function sound() {
        audioZv.currentTime=0;
        audioZv.play();
    }

 //   let touchElem=null;
    let touchX=0;
    let touchY=0;
    let imgReturnX=0;
    let imgReturnY=0;
    let endTouchX=0;
    let endTouchY=0;
    let dZon=document.getElementsByClassName('imgConteyner');
    console.log(dZon);
    let dZonX=0;
    let dZonY=0;
    let dZonW=0;
    let dZonH=0;

    function onTouchStart(eo) {
       eo=eo || window.event;
       eo.preventDefault();
       dragEl=eo.target;
       dragEl.style.zIndex='90000000';
       dragEl.parentNode.appendChild(dragEl);
       let touchIn=eo.targetTouches[0];
       touchX=touchIn.pageX-dragEl.offsetLeft;
       touchY=touchIn.pageY-dragEl.offsetTop;
       imgReturnX=dragEl.offsetLeft;
       imgReturnY=dragEl.offsetTop;
    }

    function onTouchMove(eo) {
       eo=eo || window.event;
       eo.preventDefault();
       dragEl=eo.target;
       dragEl.parentNode.appendChild(dragEl);
       let touchIn=eo.targetTouches[0];
       let left=(touchIn.pageX-touchX);
       let top=(touchIn.pageY-touchY);
       dragEl.style.left=left+'px';
       dragEl.style.top=top+'px';
       endTouchX=touchIn.pageX;
       endTouchY=touchIn.pageY;
    }

    function onTouchEnd(eo) {
       eo=eo || window.event;
       eo.preventDefault();
       for (let i=0; i<dZon.length; i++) {  
          dZonX+=dZon[i].offsetLeft;
          console.log(dZonX);
          dZonY+=dZon[i].offsetTop;
          console.log(dZonY);
          dZonW+=dZon[i].offsetWidth;
          console.log(dZonW);
          dZonH+=dZon[i].offsetHeight;
          console.log(dZonH);
          console.log(endTouchX);
          console.log(endTouchY);
          if (dZon[i].style.display == 'none')
             continue;
          else 
             dZonD=dZon[i];
       }
       if (endTouchX<=(dZonX+dZonW) && endTouchX>=dZonX && endTouchY<=(dZonY+dZonH) && endTouchY>=dZonY) {
          onDrop(eo);
       }
       else {
          dragEl.parentNode.appendChild(dragEl);
          dragEl.style.left=imgReturnX+'px';
          dragEl.style.top=imgReturnY+'px';
          vibro();
       }
       dragEl.style.left="";
       dragEl.style.top="";
       dZonD=null;
       dZonX=0;
       dZonY=0;
       dZonW=0;
       dZonH=0;
    }

    function vibro() {
        if ( navigator.vibrate ) {
             window.navigator.vibrate(80);
        }
    }

    function finishGame() {
       if (sch===(srcImg.length)) {
            let plField=document.querySelector('.playingField');
            let plField2=document.querySelector('.playingField2');
            cont.removeChild(plField);
            cont.removeChild(plField2);
            let spanTag=document.createElement('span');
            spanTag.innerHTML='Умница!';
            spanTag.className='Finish';
            cont.appendChild(spanTag);
            return;
         }
    }

   game(srcImg[sch]);

