import React from 'react'
import './GeneralRadioArea.css';

function Track() {
  const track_request_button=function(){
    const confirmBox=document.querySelector(".confirm-box");
    confirmBox.style.display="block";
    confirmBox.innerHTML="<div>İstek gönderiliyor...</div>";
    setTimeout(() => {
      confirmBox.innerHTML+="<div>İstek gönderildi.</div>";
      
      setTimeout(() => {
        confirmBox.style.display="none";
      }, 1000);
    }, 3000);
  }
  
  return (
    <div className='track'>
        <div className='track-img'>
            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjI9u7ZtVcN5fThv_ZMnfIimZYThhV7q7lnw&usqp=CAU"} alt='görsel yüklenemedi'/>
        </div>
        <div className='track-detail'>
            <div className='track-artist'>The Weeknd</div>
            <div className='track-music'>After Hours</div>
        </div>
        <div className='track-request' onClick={track_request_button}>İstek</div>
        
    </div>
  )
}

export default Track