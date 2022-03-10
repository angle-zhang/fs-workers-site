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
                    {/* <iframe title="Food system worker characteristics tablaeu site" src="https://public.tableau.com/views/FoodWorkersGraphs_16192033166250/OccupationsandRace?:showVizHome=no&:embed=true" width="1000px" height="750px"></iframe> */}
                </div>
            </div>
        </div>
    )

}

export default Characteristics; 