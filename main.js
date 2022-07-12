var cancion=document.getElementById("c");
var reporducir=document.getElementById('ply');
var pausar=document.getElementById('pau');
var anterior=document.getElementById('ant');
var siguiente=document.getElementById('sig');
var C = new Canciones();
var numeroCancionRepro=0;
cambiarCancion(numeroCancionRepro);
document.getElementById('nombreCan').textContent=C.RegresarNombreCancion(numeroCancionRepro);
cancion=document.getElementById("c");

reporducir.addEventListener('click', function(){
    if(cancion.pause){
        cancion.play();
        document.getElementById('ply').style.display="none";
        document.getElementById('pau').style.display="block";
        document.getElementById('nombreCan').textContent=C.RegresarNombreCancion(numeroCancionRepro);
    }
})
pausar.addEventListener('click', function(){
    if(cancion.play){
        cancion.pause();
        document.getElementById('pau').style.display="none";
        document.getElementById('ply').style.display="block";
    }
})
anterior.addEventListener('click',function(){
    if(numeroCancionRepro>0){
        cancion.pause();
        numeroCancionRepro--;
        document.getElementById('nombreCan').textContent=C.RegresarNombreCancion(numeroCancionRepro);
        cambiarCancion(numeroCancionRepro);
        cancion.play();
        document.getElementById('ply').style.display="none";
        document.getElementById('pau').style.display="block";
    }else{
        alert("No hay canciones anteriores");
    }
})
siguiente.addEventListener('click',function(){
    if(numeroCancionRepro<4){
        cancion.pause();
        numeroCancionRepro++;
        document.getElementById('nombreCan').textContent=C.RegresarNombreCancion(numeroCancionRepro);
        cambiarCancion(numeroCancionRepro);
        cancion.play();
        document.getElementById('ply').style.display="none";
        document.getElementById('pau').style.display="block";
    }else{
        alert("No hay canciones anteriores");
    }
})
function cambiarCancion(i){
    switch(numeroCancionRepro){
        case 0:
            document.getElementById('c').src="music/BeatIt.mp3";
            document.getElementById('img').src="img/Michael.png";
            break;
        case 1:
            document.getElementById('c').src="music/HowDeepIsYourLove.mp3";
            document.getElementById('img').src="img/Bee.png";
            break;
        case 2:
            document.getElementById('c').src="music/InstantCrush.mp3";
            document.getElementById('img').src="img/Daft.png";
            break;
        case 3:
            document.getElementById('c').src="music/ImYours.mp3";
            document.getElementById('img').src="img/Jason.png";
            break;
        case 4:
            document.getElementById('c').src="music/DustInTheWind.mp3";
            document.getElementById('img').src="img/Kansas.png";
            break;
    }
}
