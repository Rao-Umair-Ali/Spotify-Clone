
let songIndex=0;
let audioElement=new Audio('1.mp3');
let masterPlay =document.getElementById('masterPlay');
let myProgressBar =document.getElementById('myProgressBar');

let song=[
    {songName:"Salam",filePath:"song/1.mp3",coverPath:"nfak"},
    {songName:"Salam",filePath:"song/1.mp3",coverPath:"nfak"},
    {songName:"Salam",filePath:"song/1.mp3",coverPath:"nfak"},
    {songName:"Salam",filePath:"song/1.mp3",coverPath:"nfak"},
    {songName:"Salam",filePath:"song/1.mp3",coverPath:"nfak"},
    {songName:"Salam",filePath:"song/1.mp3",coverPath:"nfak"},
    {songName:"Salam",filePath:"song/1.mp3",coverPath:"nfak"},
    {songName:"Salam",filePath:"song/1.mp3",coverPath:"nfak"}
]

masterPlay.addEventListener('click',()=>{
    if (audioElement.paused|| audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }
    else{
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
    }
})

//audioElement.play()
//
audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress = (parseInt(audioElement.currentTime/audioElement.duration)*100);
    console.log(progress)

})