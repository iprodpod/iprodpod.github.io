import React from "react"
import '../base/index.css';
import './index.css';

import logo from '../assets/icons/icon_white.png'
// import logo from '../assets/icons/icon_black.png'

import background from '../assets/images/Gitarrvägg.jpg'
// import background from '../assets/images/Helbild1.jpg'
// import background from '../assets/images/KanskeHelbild4.jpg'
// import background from '../assets/images/Lampa2.jpg'
// import background from '../assets/images/Mikrofon.jpg'
// import background from '../assets/images/Närbild1.jpg'
// import background from '../assets/images/Sidbild.jpg'
// import background from '../assets/images/Uppifrån.jpg'

export default function Home() {
  return (
    <div className="base">
      <div className="main">
        <div className="logo">
          <img src={logo} alt="" width="200px" />
          {/* <img src={logo} alt="" width="200px" className="logo-image" /> */}
          <div>iprodpod</div>
        </div>
        <div className="paragraph-title">
          about me
        </div>
        <div className="break"></div>
        <div className="paragraph">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit
        </div>
        <div className="paragraph-title">
          contact me
        </div>
        <div className="break"></div>
        <div className="paragraph">
          <div>For business enquiries, contact me at</div>
          <div className="light-margin">
            <div className="light-margin">+4670 400 50 32</div>
            <div className="light-margin">info@iprodpod.com</div>
          </div>
        </div>
      </div>
      <div>
        <img className="background-image" src={background} alt="" />
      </div>
    </div>
  )
}
