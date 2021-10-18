/*
    codeCard('Tage Name' , Number of tage )
    Tage Name is character bettwen " " 
    Number of tage is a number and is start from 1 to .....

    ## Example :
        codeCard ("td" , 1)
*/

codeCard('',1);


function codeCard(tagName='',numOfTage = 1){
    numOfTage = numOfTage-1
    var val = document.getElementsByTagName(String(tagName));
    var codec = String(val[numOfTage].innerHTML),
    codec = Array.from(codec);
    for(a = 0 ; a<codec.length ; a+=5){
        codec.splice(a,0," - ");
    };
    codec.shift();
    codec = codec.join("");
    console.log(codec);
    return val[numOfTage].innerHTML = codec;
}
