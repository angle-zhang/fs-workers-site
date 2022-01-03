import Header from "../components/Header.js";
import Banner from "../components/SearchBanner.js";
import Carousel from "../components/Carousel.js";

import "./Home.css";

function Home () { 
    return (
        <div>
            <header>
            <Header/>
            </header>
            <div className="banner-container"> 
                <Banner></Banner>
                {/* banner component 
                    props: height, title, desc, browse all 
                ? */}
            </div>
            <div className="content-container-white"> 
                <div className="home-container">
                    <h2>Food System Workers Overview</h2>
                    <p>The impacts of climate change are widespread and rapidly increasing. Workers within the US food system are experiencing worsening work conditions due to the impacts of climate change. For example, farmworkers in California are exposed to high temperatures and high levels of smoke from fires. About 11% of the total US workforce is employed by the food system and it is essential to feeding all Americans, making reform urgent and meaningful (USDA ERS- FAQs, 2020). 
                    </p> 
                    <p>One important impact of climate change is extreme weather, a weather event that is significantly different from the average or usual weather pattern. Long-term, chronic workplace heat exposure has been associated with cardiovascular diseases, mental health problems, and chronic kidney diseases (Xiang, 2014). Additional health impacts of workplace heat exposure are the increased risk of occupational injuries and accidents (Xiang, 2014). 
                    </p>
                    <p>Our research will examine the unequal exposure to weather conditions on workers within the US food system. We will present a picture of the workers within the US food system by representing demographics, work location, and work conditions using data merged from ACS, O*NET OnLine, OEWS, and the US Census. Preliminary results support our hypothesis that occupations with workforces that have a high percentage of people from disenfranchised populations are more often working in conditions that are not environmentally controlled and thus susceptible to the impacts of worsening weather conditions. The work highlights vulnerable occupations for whom conditions must be improved. 
                    </p>
                    <Carousel/>
                    <p>USDA ERS- FAQs. (2020, September 2). Economic Research Service, United States Department of Agriculture. https://www.ers.usda.gov/faqs/#Q15 </p>
                    <p> Xiang, Jianjun, et al. “Health Impacts of Workplace Heat Exposure: An Epidemiological Review.” Industrial Health, National Institute of Occupational Safety and Health, 29 Apr. 2014, www.jstage.jst.go.jp/article/indhealth/52/2/52_2012-0145/_article/-char/ja/.</p>
                </div>
            </div>
        </div>
    )

}

export default Home; 