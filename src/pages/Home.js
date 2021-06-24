import Header from "../components/Header.js";
import Banner from "../components/SearchBanner.js"

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
                {/* <iframe width="450" height="400" frameborder="0" scrolling="no" src="//plotly.com/~bella_alvarado/4.embed?autosize=true"></iframe>
                <iframe width="450" height="400" frameborder="0" scrolling="no" src="//plotly.com/~bella_alvarado/16.embed?autosize=true"></iframe> */}

                <iframe width="800" height="700" frameborder="0" scrolling="no" src="//plotly.com/~bella_alvarado/8.embed?autosize=true"></iframe>
            </div>
        </div>
    )

}

export default Home; 