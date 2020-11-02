import React from "react"
import '../base/index.css';
import './index.css';

import logo from '../assets/icons/icon_white.png'
// import logo from '../assets/icons/icon_black.png'

// import background from '../assets/images/Gitarrvägg.jpg'
import background from '../assets/images/gitarrvägg_compressed.jpg'
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
          podcastens tid är nu
        </div>
        <div className="break"></div>
        <div className="paragraph">
          Som så många andra har ni också hoppat på podcastvågen. Grattis! Podcasts är här för att stanna och det är inte alls svårt att förstå varför så många lyssnare tar till sig formatet helhjärtat. Om det så handlar om hur man tränar sin hund att odla avokado, eller hur man uppnår mindfullness i karantänmiljö så ligger podcast helt rätt både i samtid och framtid. 
        </div>
        <div className="paragraph">
        Tillgänglighet och variation är bara två egenskaper hos podcasts som gör det lätt att kaptivera och inspirera hundratals – tusentals – eller varför inte miljontals lyssnare. Men med stort utbud är det svårt att sticka ut, även med originella idéer och välformulerat innehåll. 
        </div>

        <div className="paragraph-title">
          podcastens utmaningar 
        </div>
        <div className="break"></div>
        <div className="paragraph">
          Idag kan man lyssna på podcast överallt: på gymmet, vid löprundan eller i trafiken. Vid dessa miljöer kan bakgrundsbrus, buller eller alldagligt skrik, skrammel distrahera lyssnaren som inte tar till sig ert innehåll. Testa att läs denna text samtidigt som du tittar på ett kattklipp. Omöjligt. Om innehållet går förlorat är risken stor att lyssnaren inte återvänder för nästa avsnitt. En podcast som även låter bra kommer sticka ut i mängden bland andra podcast som inte håller måttet. En podcast som både har bra innehåll och är lätt att lyssna på ökar sina chanser att nå ut till fler och förbli en stadig del i lyssnarens podcast-repetoar. 
        </div>
        <div className="paragraph">
        Tid är pengar och det är väsentligt att få med all man vill säga under avsnittets gång.  Men bra teman och innehåll skenar lätt iväg just tidsmässigt. Därför är nästa viktiga del av podcastbearbetningen att innehållet redigeras, så att värdefull tid inte spenderas på överdrivna konstpauser och det så vanligt förekommande “eehm” innan varje mening. Bra redigering optimerar inte bara tiden utan får innehållet att låta mer bearbetat och flytande. 
        </div>

        <div className="paragraph-title">
          iprodpod 
        </div>
        <div className="break"></div>
        <div className="paragraph">
          Iprodpod erbjuder helt enkelt inspelning, redigering och mixning av podcasts i professionell studiomiljö. Vi förhåller oss även till alla industristandarder. Inspelning och bearbetning sker på Durango Recording som är musikinspelningsstudio centralt beläget nära Gullmarsplan. Studion har lång historia som inspelningsstudio och har samarbetat med artister så som som Robyn, Helen Sjöholm, Veronica Maggio, Ulf Lundell, Lars Winnerbäck och Bo Kaspers Orkester. 
        </div>

        <div className="paragraph-title">
          om mig 
        </div>
        <div className="break"></div>
        <div className="paragraph">
        Jonas Lindström jobbar med podcast och musikinspelning vid Durango Recording. Jonas har tidigare studerat Ljudteknik vid Luleås Tekniska Universitet. Förutom diverse studiojobb vid hemmaplan på Durango Recording har Jonas även praktiserat på flera studios i Nashville och Memphis. 
        </div>

        <div className="paragraph-title">
          kontakt
        </div>
        <div className="break"></div>
        <div className="paragraph">
          <div>Om ni känner er redo för att ta er podcast till nästa nivå, eller bara har frågor angående tjänster och prissättning- tveka inte att höra av er.</div>
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
