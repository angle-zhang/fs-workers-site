import Header from "../components/Header.js";
import Banner from "../components/SearchBanner.js"
import OccupationCard from "../components/OccupationCard";
import "./Occupations.css";

function Occupations () { 
    return (
        <div>
            <header>
            <Header/>
            </header>
            <div className="banner-container"> 
                <Banner small={true} />
                {/* banner component 
                    props: height, title, desc, browse all 
                ? */}
            </div>
            <div className="content-container-white"> 
                <div className="occ-row">
                <OccupationCard></OccupationCard>
                <OccupationCard></OccupationCard>
                <OccupationCard></OccupationCard>
                <OccupationCard></OccupationCard>
                <OccupationCard></OccupationCard>

                <OccupationCard></OccupationCard>
                <OccupationCard></OccupationCard>
                <OccupationCard></OccupationCard>
                <OccupationCard></OccupationCard>
                <OccupationCard></OccupationCard>
                </div>
                {/* <div className="purple-text-box">Select multiple boxes to compare characteristics</div> */}
            </div>
        </div>
    )

}

export default Occupations; 