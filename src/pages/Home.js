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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                    {/* <iframe width="450" height="400" frameborder="0" scrolling="no" src="//plotly.com/~bella_alvarado/4.embed?autosize=true"></iframe>
                    <iframe width="450" height="400" frameborder="0" scrolling="no" src="//plotly.com/~bella_alvarado/16.embed?autosize=true"></iframe> */}
                    <Carousel/>
                </div>
            </div>
        </div>
    )

}

export default Home; 