import React from 'react'
import './RequestForm.css';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';

function RequestForm() {
    const closeRequestForm=function(){
        document.querySelector(".request-form-con-cover").style.display="none";
        document.querySelector("body").style.overflowY="scroll";
    }
    return (
      <div className='request-form-con-cover'>
        <div className='request-form-con'>
            <div className='request-form'>
                <div className='request-form-header'>İstek Gönder</div>
                <div className='request-exit-button'>
                    <CloseTwoToneIcon className='request-exit-icon' onClick={closeRequestForm}/>
                </div>
                <form>
                    <div className='input-nick'>
                        <div className='input-label'>Nick - Ad</div>
                        <input className='get-input' type={"text"}/>
                    </div>
                    
                    <div className='input-artist-music'>
                        <div className='input-artist'>
                            <div className='input-label'>Sanatçı</div>
                            <input className='get-input' type={"text"}/>
                        </div>

                        <div className='input-music'>
                            <div className='input-label'>Şarkı</div>
                            <input className='get-input' type={"text"}/>
                        </div>
                    </div>
                    
                    <div className='input-message'>
                        <div className='input-label'>Mesaj</div>
                        <input className='get-input' type={"text"}/>
                    </div>
                    
                    <div className='input-submit'>
                        <input type={"submit"} className="request-submit-button"/>
                    </div>
                    
                </form>
            </div>
        </div>
    </div>
  )
}

export default RequestForm