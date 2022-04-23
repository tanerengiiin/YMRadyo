import React from 'react'
import "./navbar.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import logo from './yazilimcimekani.png'
import logodark from './yazilimcimekanidark.png'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import dclogodark from './DiscordLogoDark.png'
import dclogolight from './DiscordLogo.png'
import MusicNoteIcon from '@mui/icons-material/MusicNote';

function Navbar() {
    const theme_mode_light=function(){
        document.querySelector(".App").classList.add("dark-theme-on");
        document.querySelector("body").style.backgroundColor="#191A1C";
        document.querySelector(".logo-img").src=logodark;
        document.querySelector(".discord-header-img").src=dclogodark;
        document.querySelector(".light-theme").style.display="block";
        document.querySelector(".dark-theme").style.display="none";
    }
    const theme_mode_dark=function(){
        document.querySelector(".App").classList.remove("dark-theme-on");
        document.querySelector("body").style.backgroundColor="#FFFFFF";
        document.querySelector(".logo-img").src=logo;
        document.querySelector(".discord-header-img").src=dclogolight;
        document.querySelector(".light-theme").style.display="none";
        document.querySelector(".dark-theme").style.display="block";
    }
    return (
      
    <div>
        <nav className='navbar'>
            <div className='logo'>
                <a href='#'>
                    <img className='logo-img' src={logo} alt='görsel yüklenemedi' />
                </a>
                <MusicNoteIcon className='logo-music-icon' id="music-icon-1"/>
            </div>
            <div className='noticebar' >
                <marquee loop className="noticebar-marquee">
                    Yazılımcı Mekanı Discord sunucusun radyo sitesinin Ana Sayfasını siz tasarlamak ister misiniz ?
                    Yazılımcı Mekanı Discord sunucusuna ait olan 
                    https://radyo.yazilimcimekani.com/ adresine one page webistesi hazırlanacaktır.
                    Tasarımı tamamen hayal gücünüze ve yeteneğinize göre şekillendirebilirsiniz.
                </marquee>
            
            </div>
            <div className='social-medias'>
            <a href='#'>
                <div className='instagram-div'>
                    
                    <InstagramIcon className='instagram'/>
                    
                </div>
                </a>
                <a href='#'>
                <div className='twitter-div' >
                    <TwitterIcon className='twitter'/>
                </div>
                </a>
                <a href='#'>
                <div className='facebook-dvi'>
                    <FacebookIcon className='facebook'/>
                </div>
                </a>
                    <div className='light-theme'>
                        <LightModeIcon className='light-mode' onClick={theme_mode_dark}/>
                    </div>
                    <div className='dark-theme'>
                        <DarkModeIcon className='dark-mode' onClick={theme_mode_light}/>
                    </div>
            </div>
        </nav>

    </div>
  )
}

export default Navbar