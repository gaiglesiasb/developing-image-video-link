
const text1="Este es el ejemplo de lo que iria en el texto 1"
const text2="Este es el ejemplo de lo que iria en el texto 2"
const text3="Este es el ejemplo de lo que iria en el texto 3"
let selectedPhoto = null;


function changeText(foto){
    selectedPhoto=foto.id;
    texto=document.getElementById('text')
    video=document.getElementById('videoContainer').childNodes[1]
    if (selectedPhoto=="foto1"){
        texto.innerHTML=text1
        
        video.src="https://www.youtube.com/embed/375dqL15O9E"
    } 
    else{
        texto.innerHTML=text2;
        video.src="https://www.youtube.com/embed/MmB9b5njVbA"
        
    } 
    
}