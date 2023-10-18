import Header from "../components/Header.js";
import './Characteristics.css'

function Characteristics () { 
    return (
        <div>
            <header>
            <Header/>
            </header>
            <div className="content-container-white"> 
                <h1>Food System Workers Characteristics</h1>
                <p>desc</p>
                <div className="characteristics-table-container">
                    <iframe title="characteristics" src="https://public.tableau.com/views/FoodWorkerRace_March/RaceandEthnicityofOccupations?:language=en-US&:display_count=n&:origin=viz_share_link?:showVizHome=no&:embed=true"
                    width="1000" height="955"></iframe> 
                </div>
            </div>
        </div>
    )

}

export default Characteristics; 