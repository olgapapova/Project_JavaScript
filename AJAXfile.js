"use strict"
 
   let colWord=['овечка', 'дом', 'цветок', 'солнце', 'кот', 'стул', 'слон', 'мяч', 'шарик', 'лошадь', 'зонтик', 'туча', 'рыба', 'ёжик', 'ёлка', 'жираф', 'курица', 'снег', 'заяц', 'сова', 'гриб'];
   const ajaxHandlerScript="https://fe.it-academy.by/AjaxStringStorage2.php";
   const stringName='PAPOVA1989_CHILD_GAME';
   let imagesInfo;

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
        if ( callresult.error!=undefined ) {
           console.log('no');
           console.log(callresult.result);
           alert(callresult.error);
        }
        else if ( callresult.result!="" ) {
           console.log('OK');
        }
    }

     function readStr(callresult) {
        if ( callresult.error!=undefined ) {
           alert(callresult.error);
        }
        else if ( callresult.result!="" ) {
           imagesInfo=JSON.parse(callresult.result);
           console.log('ok');
           console.log(imagesInfo);
        }
    }

    function errorH(jqXHR,statusStr,errorStr) {
        alert(statusStr+' '+errorStr);
    }

    insertStr();

