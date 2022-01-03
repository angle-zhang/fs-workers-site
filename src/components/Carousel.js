
import {useEffect, useState} from 'react';
import './Carousel.css';

function Carousel () {
    const [activeIdx, setActiveIdx] = useState (0);

    useEffect(() => { 
        let timer = setTimeout(() => {setActiveIdx((activeIdx+1)%3)}, 10000);
        return () => clearTimeout(timer);
    });

    const iFrames = [
        {
            iframe: <iframe title="Food system worker plotly graph" width="900" height="600" frameborder="0" scrolling="no" src="//plotly.com/~bella_alvarado/8.embed"></iframe>,
            caption: "The Gender, Race and Ethnicity, Mean, and Median Income in the US Food System"
        },
        {
            iframe:  <iframe title="Food system worker plotly graph" width="900" height="600" frameborder="0" scrolling="no" src="//plotly.com/~bella_alvarado/16.embed"></iframe>,
            caption: "The Education of Food System Occupation's and Days Working Susceptible to Weather Conditions"
        },
        {
            iframe: <iframe title="Food system worker plotly graph" width="900" height="600" frameborder="0" scrolling="no" src="//plotly.com/~bella_alvarado/14.embed"></iframe>,
            caption: "US Food System Workers Healthcare and Days Working Not in Environmentally Controlled Conditions"
        }
    ]

    const selected = iFrames[activeIdx];

    return ( 
        <>
            <div className="graph-container">
                {selected.iframe}
                <div className="graph-caption"> 
                {selected.caption}
                </div>
            </div>
            <div className="graph-nav-container dot-style">
            <ul>
                <li onClick={() => setActiveIdx(0)}><div className={`dot-nav ${activeIdx===0 ? 'current' : ''}`}></div></li>
                <li onClick={() => setActiveIdx(1)}><div className={`dot-nav ${activeIdx===1 ? 'current' : ''}`}></div></li>
                <li onClick={() => setActiveIdx(2)}><div className={`dot-nav ${activeIdx===2 ? 'current' : ''}`}></div></li>
            </ul>
            </div>
        </>
    )
} 

export default Carousel;