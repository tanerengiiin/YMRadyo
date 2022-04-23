import React,{useState} from 'react'
import "./LiveRadio.css"
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import EqualizerIcon from '@mui/icons-material/Equalizer';

function LiveRadio() {
  const lists=[
    {
      "link":"https://i.scdn.co/image/ab67616d00001e02baae906c39533f95acb87d47",
      "music":"Call out my name",
      "artist":"The Weeknd"
    },
    {
      "link":"https://i.scdn.co/image/ab67616d0000b273b41ce241a3ee7a4a85ee2eeb",
      "music":"Sarı Kurdeleler",
      "artist":"Model"
    },
    {
      "link":"https://cdn.shopify.com/s/files/1/0024/9803/5810/products/439339-Product-0-I-637501847347187012_800x800.jpg?v=1614548399",
      "music":"Beauty And A Beat",
      "artist":"Justin Bieber"
    },
    {
      "link":"https://i.scdn.co/image/ab67616d00001e02ef017e899c0547766997d874",
      "music":"Nothing Compares",
      "artist":"The Weeknd"
    },
    {
      "link":"https://i.scdn.co/image/ab67616d0000b273806c160566580d6335d1f16c",
      "music":"SAD!",
      "artist":"XXXTENTACION"
    },
    {
      "link":"https://i.scdn.co/image/ab67616d00001e025be3a63c7749584f745f2ab1",
      "music":"And to Those I Love, Thanks for Sticking Around",
      "artist":"$UICIDEBOY$ "
    },
    {
      "link":"https://i.scdn.co/image/ab67616d0000b2736cf001db12b8569231951c96",
      "music":"Ambition For Cash",
      "artist":"Key Glock"
    },
    {
      "link":"https://images.genius.com/0eabaa82bc43e66ab0d5b2b38c42b321.1000x1000x1.png",
      "music":"Chanel",
      "artist":"Young Thug"
    },
    {
      "link":"https://i.scdn.co/image/ab67616d0000b273f0e41bd269bd8f48bdb3a677",
      "music":"Ayrılık",
      "artist":"Özdemir Erdoğan"
    },
    {
      "link":"https://images.genius.com/7f3fa4284c3ae4343422a4110cdde018.1000x1000x1.jpg",
      "music":"Fight Kulüp 2",
      "artist":"Killa Hakan ft. Massaka, Ceza, Summer Cem, Contra, Khontkar, Anıl Piyancı"
    },
    {
      "link":"https://i.scdn.co/image/ab67616d0000b273eaa99393439f6f13f1307526",
      "music":"The Moments I'm Missing (Radio Edit)",
      "artist":"WHITENO1SE & Ranji Ft. Nina Nesbitt "
    },
    {
      "link":"https://i.scdn.co/image/ab67616d0000b273c758eb1d1eb12164e0d34aa8",
      "music":"Happppy song",
      "artist":"sOOOO"
    },
    {
      "link":"https://i.scdn.co/image/ab67616d0000b273c27e997313531dbc7b01b247",
      "music":"Running in the 90's",
      "artist":"Max Coveri"
    },
    {
      "link":"https://i.scdn.co/image/ab67616d0000b273406acd749b77b0c5c9ffabf5",
      "music":"Shadow Lady",
      "artist":"Portwave"
    },
    {
      "link":"https://i.scdn.co/image/ab67616d0000b273819c4a2ccbe75cbdf8cf71ff",
      "music":"Out Of Time - KAYTRANADA Remix",
      "artist":"The Weeknd"
    },
    {
      "link":"https://i.scdn.co/image/ab67616d0000b273da513d25e8b3cdd4f43f7512",
      "music":"Swim",
      "artist":"Chase Atlantic"
    },
    {
      "link":"https://i.scdn.co/image/ab67616d0000b2735a0c2870f4f309e382d1fad6",
      "music":"Right",
      "artist":"Chase Atlantic"
    },
    {
      "link":"https://i.scdn.co/image/ab67616d0000b273b983d8a94318841763c70112",
      "music":"İyi ve Güzel Kadınlar Hep Ağlar",
      "artist":"İkiye On Kala"
    },
    {
      "link":"https://i.scdn.co/image/ab67616d00001e026fa94edbbffc59e019e796ae",
      "music":"Kala Kal",
      "artist":"Motive"
    },
  ];
  let[count,setCount]=useState(18);
  function decrementCount(){
    if(count==-1){
      count=18;
    }
    setCount(count-1); 
    
    document.querySelector(".name-artist").innerHTML=lists[count].artist;
    document.querySelector(".music-photo-img").src=lists[count].link;
    document.querySelector(".name-music").innerHTML=lists[count].music;
    console.log(count);
  }
  window.addEventListener("scroll",()=>{
    const generalBody=document.querySelector(".general-radio-area");
    const generalBodyCoord=generalBody.getBoundingClientRect();
    //console.log(generalBodyCoord.y);
    if(window.scrollY>generalBodyCoord.y){
      document.querySelector(".bottom-player-con").style.display="block" ;
    }else{
      document.querySelector(".bottom-player-con").style.display="none" ;
    }
  })
  const progressToggleOn=function(){
    document.querySelector(".progress-toggle").style.display="block";
    document.querySelector(".progress-toggle").style.left=(document.querySelector(".progress-now").offsetWidth-20)+"px";
  }
  const progressToggleOff=function(){
    document.querySelector(".progress-toggle").style.display="none";
  }
  /*
  const textSliderLeft=function(){
    let artist_name=document.querySelector(".name-artist").innerHTML.length*18;
    let music_name=document.querySelector(".name-music").innerHTML.length*12;
    let progress_bar=document.querySelector(".progress-bar").offsetWidth;
    if(music_name>progress_bar){
      let music_name_name=document.querySelector(".name-music").innerHTML;
      document.querySelector(".name-music").innerHTML=`<marquee loop>${music_name_name}</marquee>`
     
    }
    if(artist_name>progress_bar){
      let artist_name_name=document.querySelector(".name-artist").innerHTML;
      document.querySelector(".name-artist").innerHTML=`<marquee loop>${artist_name_name}</marquee>`
     
    }
    
  }
  
  const textSliderStop=function(){
    let artist_name=document.querySelector(".name-artist").innerHTML.length*18;
    let music_name=document.querySelector(".name-music").innerHTML.length*12;
    let progress_bar=document.querySelector(".progress-bar").offsetWidth;
    if(music_name>progress_bar){
      let music_name_name=document.querySelector(".name-music").innerHTML;
      document.querySelector(".name-music").innerHTML=music_name_name;
     
    }
    if(artist_name>progress_bar){
      let artist_name_name=document.querySelector(".name-artist").innerHTML;
      document.querySelector(".name-artist").innerHTML=artist_name_name;
     
    }
    
  }*/
  return (
    <div className='live-radio-container'>
      
      <div  className='live-radio'>
        
        <div className='music-photo'>
          <a href='https://www.youtube.com/watch?v=4NRXx6U8ABQ' >
            <img className='music-photo-img' src={"https://cdn.shopify.com/s/files/1/0024/9803/5810/products/439339-Product-0-I-637501847347187012_800x800.jpg?v=1614548399"} alt="Görsel Bulunmamaktadır" />
          </a>
          
        </div>
        <div className='music-description'>
          <div className='music-status'>
            Şu anda çalan
          </div>
          <div className='name-artist' onClick={decrementCount} >
            Justin Bieber
          </div>
          <div className='name-music' >
            Beauty And A Beat
          </div>
          <div className='progress-bar' onMouseMove={progressToggleOn} onMouseLeave={progressToggleOff}>
            <div className='progress-back' >
              <div className='progress-now' onMouseMove={progressToggleOn} onMouseLeave={progressToggleOff}></div>
              <div className='progress-toggle'>17:20</div>
            </div>
            <div className='live-now'>
                <div className='live-bound'></div>
                <div className='live-txt'>live</div>
            </div>
          </div>
          <div className='player-buttons'>
            <div className='equalizer-button'>
              <EqualizerIcon className='equalizerIcon'/>
            </div>
            <div className='play-button'>
              <PlayCircleIcon className='playIcon'/>
            </div>
            <div className='voice-button'>
              <VolumeUpIcon className='voiceIcon'/>
            </div>
            
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default LiveRadio