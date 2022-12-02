import React from 'react'
import '../css/gallery.css'
const DATA = require('../helpers/nftJson.json')


function JsonDataDisplay(){
  const DisplayData = DATA.map(
    (nft)=>{
      return(
        <div class="gallery">
          <div>
              <img src={nft.picture} />
          </div>
          
          

          <div class="nft"> 
             <h4 class="desc" id="opName">{nft.name}</h4>
             <a href={"https://opensea.io/"+nft.openSea}><img src="https://storage.googleapis.com/opensea-static/Logomark/Logomark-Transparent%20White.svg" id="openSea"></img></a>
             
          </div>
          
        </div>
         
        
      )
  })
  return(
     <div >
        {DisplayData}
    </div>
        )
}



export default JsonDataDisplay;