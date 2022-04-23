import React from 'react'
import discordLogo from './DiscordLogo.png'
import './DiscordArea.css';
import SendIcon from '@mui/icons-material/Send';

function DiscordArea() {
    const discordInviteFade=function(){
        document.querySelector(".discord-send-message-area").style.display="none";
        document.querySelector(".discord-invite-button").style.display="block";
        setTimeout(() => {
            document.querySelector(".discord-send-message-area").style.display="block";
        document.querySelector(".discord-invite-button").style.display="none";
        }, 10000);
    }
  return (
    <div className='discord'>
        <div className='discord-area-header'>
            <img src={discordLogo} alt="görsel yüklenemedi" className='discord-header-img'/>
        </div>
        <div className='discord-area-info'>
            <div className='discord-area-channel'>#📻・radyo-chat</div>
            <div className='discord-area-member'>10.000 üye</div>
        </div>
        <div className='discord-message-area'>
            <div className='dc-msg'>
                <span className='username' style={{color:"#F24C1A"}}>cesi</span>
                nee yalnızlııık ne deee yalaaan üzmesiin seniii
            </div>
            <div className='dc-msg'>
                <span className='username' style={{color:"#E28AE8"}}>Büşra</span>
                doğğğarkeeen ağğladıı insaaan buuu soon olsuuun buu sooon
            </div>
            <div className='dc-msg'>
                <span className='username' style={{color:"#F24C1A"}}>cesi</span>
                buu soon olsunn bu sooon
            </div>
            <div className='dc-msg'>
                <span className='username' style={{color:"#ED9F6E"}}>PrarieComamile</span>
                en sevdigim sarki
            </div>
            <div className='dc-msg'>
                <span className='username' style={{color:"#E28AE8"}}>Büşra</span>
                bu şarkıyı kim sevmez
            </div>
            <div className='dc-msg'>
                <span className='username' style={{color:"#FA6718"}}>LEOS</span>
                selamlar 
            </div>
            <div className='dc-msg'>
                <span className='username' style={{color:"#F5151B"}}>Romeo</span>
                Gelebilmeyrem sevebilmeyrem unutabilmeyrem yaşayabilmeyrem adam ölük 😄
            </div>
            <div className='dc-msg'>
                <span className='username' style={{color:"#E28AE8"}}>Büşra</span>
                😄
            </div>
            <div className='dc-msg'>
                <span className='username' style={{color:"#FA6718"}}>LEOS</span>
                yapma aga bu müzik ne duygulandım şimdi
            </div>
            <div className='dc-msg'>
                <span className='username' style={{color:"#ED9F6E"}}>Silence</span>
                en son bun müziği istanbul 50-60lı yıllar adlı bir videoda duydum
            </div>
        </div>
        <div className='discord-invite-area'>
            <div className='discord-send-message-area'>
                <div className='discord-send-message' onClick={discordInviteFade}>
                    <div className='discord-send-message-txt'>Mesaj gönder</div>
                    <SendIcon fontSize='small'/>
                </div>
            </div>
            <div className='discord-invite-button'>
                <a href='https://discord.gg/5M2TmMpEnr' target="_blank" rel="noopener noreferrer">
                    <div className='dc-invite-btn'>
                        Sunucuya Katıl
                    </div>
                </a>
            </div>
        </div>
        
    </div>
  )
}

export default DiscordArea