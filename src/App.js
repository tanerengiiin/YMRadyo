import React from 'react'
import './App.css';
import BottomPlayer from './BottomPlayer';
import GeneralRadioArea from './GeneralRadioArea';
import LiveRadioArea from './LiveRadioArea';
import Navbar from './Navbar';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RequestForm from './RequestForm';

function App() {
  window.onload=function(){
    setTimeout(() => {
      const confirmBox=document.querySelector(".confirm-box");
      confirmBox.style.display="block";
      confirmBox.innerHTML="<div>İnceleme Bilgilendirmesi</div>";
      setTimeout(() => {
        confirmBox.innerHTML="";
        confirmBox.innerHTML+="<div>En üstteki playerda sanatçı adına tıklayınca müzikler değişiyor.</div>";
        setTimeout(() => {
          confirmBox.style.display="none";
        }, 8000);
      }, 2000);  
    }, 5000);
    
  }
  const requestFormOpen=function(){
    
    document.querySelector(".request-form-con-cover").style.display="block";
    document.querySelector(".request-form-con").style.height=window.height+"px";
    document.querySelector("body").style.overflowY="hidden";
  }
  return (

    <div className="App">
      <div className='confirm-box'>
        
      </div>
      {/* Header Nav Bar */}
      <Navbar/>
      {/* Main Body */}
      <LiveRadioArea/>
      
      {/* Other Body */}
      <GeneralRadioArea/>
      {/* Bottom Body*/}
      <BottomPlayer/>
      <div className='request-form-button' onClick={requestFormOpen}>
        {/*<FavoriteIcon className="request-form-icon" />*/}
        İstek Yap
      </div>

      <RequestForm/>
    </div>
  );
}

export default App;
