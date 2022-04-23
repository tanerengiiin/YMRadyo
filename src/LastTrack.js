import React from 'react'

function LastTrack() {
  return (
    <div className='last-track'>
        <div className='last-track-order'>1</div>
        <div className='last-track-img'>
          <a href='#'>
            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjI9u7ZtVcN5fThv_ZMnfIimZYThhV7q7lnw&usqp=CAU"} alt='görsel yüklenemedi'/>
          </a>
        </div>
        <div className='last-track-detail'>
            <div className='last-track-artist'>The Weeknd</div>
            <div className='last-track-music'>Blinding Lights</div>
        </div>
        <div className='last-track-time'>12 dk</div>
    </div>
  )
}

export default LastTrack