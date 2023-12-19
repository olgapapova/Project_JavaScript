"use strict"

   let colWord=['овечка', 'дом', 'цветок', 'солнце', 'кот', 'стул', 'слон', 'мяч', 'шарик', 'лошадь', 'зонтик', 'туча', 'рыба', 'ёжик', 'ёлка', 'жираф', 'курица', 'снег', 'заяц', 'сова', 'гриб'];
   let images=['', lamb, domik, cvet, sunP, cat, stul, elephantt, ball, shar, horse, umbrella, tucha, fish, hedgehogg, el, giraf, rooster, snow, zayc, sova, mushroom];
   let tDoc=document.getElementById('tl');
   let dZon=document.getElementById('lettField');
   let dElement=document.getElementById('lett');
   tDoc.addEventListener('dragover', onDragOver, {passive: false});
   let boxLett=document.getElementById('lett');
   let svgSunBr1=document.querySelector(".BB1");
   let svgSunBr2=document.querySelector(".BB2");
   let svgZ=document.getElementsByClassName('VL');
   let dragEl;
   let dropZon=document.getElementsByClassName('letterField');
   let masLett=[];
   let alf='абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
   let b;
   let sch=0;
   let schImg=0;
   let wordCur=null;
   let audioZv=new Audio("Audio_Z/zv1.mp3");


   const ajaxHandlerScript="https://fe.it-academy.by/AjaxStringStorage2.php";
   const stringName='PAPOVA1989_CHILD_GAME';
   let imagesInfo=null;

   function insertStr () {
       let imagesJSON=JSON.stringify(colWord);
       console.log(imagesJSON);
       $.ajax(
        {
            url : ajaxHandlerScript, type : 'POST', cache : false, dataType:'json',
            data : { f : 'INSERT', n : stringName, v : imagesJSON },
            success : readStrRez, error : errorH
        }
    );
 
      $.ajax(
        {
            url : ajaxHandlerScript, type : 'POST', cache : false, dataType:'json',
            data : { f : 'READ', n : stringName },
            success : readStr, error : errorH
        }
    );
   }

    function readStrRez(callresult) {
        console.log('OK');
    }

     function readStr(callresult) {
        if ( callresult.error!=undefined ) {
           alert(callresult.error);
        }
        else if ( callresult.result!="" ) {
           imagesInfo=JSON.parse(callresult.result);
           console.log(imagesInfo);
           console.log('ok');
        }
    }

    function errorH(jqXHR,statusStr,errorStr) {
        alert(statusStr+' '+errorStr);
    }

    insertStr();


   for ( let i=0; i<dropZon.length; i++) {
      dropZon[i].addEventListener('dragover', onDragOver, {passive: false});
      dropZon[i].addEventListener('drop', onDrop, {passive: false});
   }

   let divCont=document.querySelector('.conteyner');
   let imgTag=document.createElement('img'); 
   imgTag.addEventListener('mousedown', onDragOver, {passive: false});
   imgTag.className='imageTeg';
   divCont.appendChild(imgTag);
 
   function currWord(wordC) {
      sch+=1;
      schImg+=1;
      let currentWord=wordC.split("");
      let used={};
      while (currentWord.length<7) {
         let rnd=Math.floor(Math.random()*alf.length);
         let letterA=alf.slice(rnd, rnd+1);
         if (currentWord.indexOf(letterA) ===-1)
            currentWord.push(letterA);
      }

      for ( let i=0; i<7; i++) {
         b=masLett[i];   
         let letter;
            do {      
               let n=randomDiap(0, 6);
               letter=currentWord[n];
            } while (letter in used);
         used[letter]=true;
         b=document.createElement('div');
         b.setAttribute('class', 'box');
         b.setAttribute('draggable', 'true');
         b.textContent=letter;
         b.addEventListener('dragstart', onDragStart, {passive: false});
         b.addEventListener('touchstart', onTouchStart, {passive: false});
         b.addEventListener('touchmove', onTouchMove, {passive: false});
         b.addEventListener('touchend', onTouchEnd, {passive: false});
         boxLett.append(b);
      }
  
      imgTag.setAttribute('src', images[schImg]);  
      wordCur=wordC;
   }

   function verification(w) {
      let lettF=document.getElementById('lettField');
      let lettFChild=lettF.childNodes;
      let textOb='';
      for (let i=0; i<lettFChild.length; i++) {
         let text=lettFChild[i].innerHTML;
         textOb+=text;
      }
      
      if (w===textOb) {
   //      if (w===colWord[colWord.length-1]) {
         if (w===imagesInfo[imagesInfo.length-1]) {
            divCont.removeChild(dZon);
            divCont.removeChild(boxLett);
            divCont.removeChild(imgTag);
            let spanTag=document.createElement('span');
            spanTag.innerHTML='Молодец!';
            spanTag.className='Finish';
            divCont.appendChild(spanTag);
            return;
         }

         let dZonChild=dZon.children;
         for (let i=dZonChild.length-1; i>=0; i--) {
            dZon.removeChild(dZonChild[i]);
         }
         let dElementChild=dElement.children;
         for (let i=dElementChild.length-1; i>=0; i--) {
            dElement.removeChild(dElementChild[i]);
         }
         currWord(imagesInfo[sch]);
      }
   }

   currWord(colWord[sch]);

   setInterval (timerZ, 5000);
   setInterval (timerSun, 7000);

   function timerZ() {
      for (let i=0; i<svgZ.length; i++ ) {
         svgZ[i].style.display='block';
      }
      setTimeout(timerZ2, 300);
   }
   function timerSun() {
      svgSunBr1.setAttribute('y1', '380');
      svgSunBr1.setAttribute('y2', '430');
      svgSunBr2.setAttribute('y1', '435');
      svgSunBr2.setAttribute('y2', '373');
      setTimeout(timerSun2, 400);
   }

   function timerZ2() {
      for (let i=0; i<svgZ.length; i++ ) {
         svgZ[i].style.display='none';
      }
      svgSunBr1.setAttribute('y1', '413');
      svgSunBr1.setAttribute('y2', '466');
   }

   function timerSun2() {
      svgSunBr1.setAttribute('y1', '413');
      svgSunBr1.setAttribute('y2', '466');
      svgSunBr2.setAttribute('y1', '470');
      svgSunBr2.setAttribute('y2', '408');
   }

   function randomDiap(n,m) {
      return Math.floor(Math.random()*(m-n+1))+n;
   }

   
   function onDragStart (eo) {
      eo=eo || window.event;
      dragEl=eo.target;
   }

   function onDragOver (eo) {
      eo=eo || window.event;
      eo.preventDefault();
   }

   function onDrop (eo) {
      eo=eo || window.event;
      if (eo.target !==dZon && eo.target !==boxLett)
         return;
      eo.target.appendChild(dragEl);
      verification(wordCur);
      sound();
   }

    function sound() {
        audioZv.currentTime=0;
        audioZv.play();
    }

    let touchElem=null;
    let touchX=0;
    let touchY=0;
    let imgReturnX=0;
    let imgReturnY=0;
    let endTouchX=0;
    let endTouchY=0;

    function onTouchStart(eo) {
       eo.preventDefault();
       touchElem=eo.target;
       let touchIn=eo.targetTouches[0];
       touchX=touchIn.pageX-touchElem.offsetLeft;
       touchY=touchIn.pageY-touchElem.offsetTop;
       imgReturnX=touchElem.offsetLeft;
       imgReturnY=touchElem.offsetTop;
    }

    function onTouchMove(eo) {
       eo.preventDefault();
       touchElem=eo.target;
       touchElem.style.position='absolute';
       let touchIn=eo.targetTouches[0];
       let left=(touchIn.pageX-touchX);
       let top=(touchIn.pageY-touchY);
       touchElem.style.left=left+'px';
       touchElem.style.top=top+'px';
       endTouchX=touchIn.pageX;
       endTouchY=touchIn.pageY;
    }

    function onTouchEnd(eo) {
       eo.preventDefault();
       let dZonX=dZon.offsetLeft;
       let dZonY=dZon.offsetTop;
       let dZonW=dZon.offsetWidth;
       let dZonH=dZon.offsetHeight;
       if (endTouchX<=(dZonX+dZonW) && endTouchX>=dZonX && endTouchY<=(dZonY+dZonH) && endTouchY>=dZonY) {
          dZon.appendChild(touchElem);
          touchElem.style.position='static';
          verification(wordCur);
          vibro();
       }
       else {
          dElement.appendChild(touchElem);
          touchElem.style.position='static';
       }
       sound();
    }

    function vibro() {
        if ( navigator.vibrate ) {
             window.navigator.vibrate(80);
        }
    }
