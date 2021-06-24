import Header from "../components/Header.js";
import './Characteristics.css'

function Characteristics () { 
    return (
        <div>
            <header>
            <Header/>
            </header>
            <div className="content-container-white"> 
                <div className="characteristics-table-container">
                    <iframe src="https://public.tableau.com/views/FoodWorkersGraphs_16192033166250/OccupationsandRace?:showVizHome=no&:embed=true" width="1000px" height="800px"></iframe>
                </div>
            </div>
        </div>
    )

}

export default Characteristics; 