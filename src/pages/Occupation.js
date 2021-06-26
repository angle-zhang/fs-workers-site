import Header from "../components/Header.js";
import "./Occupation.css"

function Occupation (props) { 
    return (
        <div>
            <header>
            <Header/>
            </header>           
            <div className="content-container-white"> 
                <div className="occupation-page-container">
                    <h1 className="blue-underline-text">Agriculture and Food Scientists</h1>
                    <p>BLS group</p> 
                    <div className="occ-sub-container"> 
                        <p>Agricultural and food scientists create scientific methods and research strategies to establish more efficient agricultural services and products.</p>
                    </div>
                    <div className="occ-sub-container"> 
                        <h2 className="blue-text">Statistics</h2>
                        <div className="stats-container"> 
                            <p><b>Annual Income Earned (median)</b></p>
                            <p><b>Total Employment</b></p>
                            <p><b>Education (mean)</b></p>
                            <p><b>Minimum Degree Attainment</b></p>
                            <p><b>Welfare (mean)</b></p>
                            <p><b>Overall Health Insurance Coverage (percentage)</b></p>
                            <p><b>Public Health Insurance Coverage (percentage)</b></p>
                            <p><b>US Citizenship (percentage)</b></p>
                        </div>
                    </div>
                    <div className="occ-sub-container"> 
                    <h2 className="blue-text">Worker Characteristics</h2>
                        <table className="characteristics-table">
                            <tr className="characteristic-row">
                                <th className="characteristic-table-name">Characteristic</th>
                                <th className="characteristic-table-score">O-NET Score</th>
                            </tr>
                            <tr className="characteristic-row">
                                <td className="characteristic-table-name">Characteristic</td>
                                <td className="characteristic-table-score">O-NET Score</td>
                            </tr>
                            <tr className="characteristic-row">
                                <td className="characteristic-table-name">Characteristic</td>
                                <td className="characteristic-table-score">O-NET Score</td>
                            </tr>
                            <tr className="characteristic-row">
                                <td className="characteristic-table-name">Characteristic</td>
                                <td className="characteristic-table-score">O-NET Score</td>
                            </tr>
                            <tr className="characteristic-row">
                                <td className="characteristic-table-name">Characteristic</td>
                                <td className="characteristic-table-score">O-NET Score</td>
                            </tr>
                            <tr className="characteristic-row">
                                <td className="characteristic-table-name">Characteristic</td>
                                <td className="characteristic-table-score">O-NET Score</td>
                            </tr>
                        </table>
                    </div>
                    <div className="occ-sub-container"> 
                        <h2 className="blue-text">Worker Characteristic Graphs</h2>
                        {/* exposure to climate for food occupation */}
                        <div className="occupation-graph">
                            <img alt="exposure to climate of food system worker" src="/test/exposure_to_climate.png"></img>
                        </div>
                        {/* gender */}
                        <div className="occupation-graph">
                            <img alt="exposure to climate of food system worker" src="/test/exposure_to_climate.png"></img>
                        </div>
                        {/* race */}
                        <div className="occupation-graph">
                            <img alt="exposure to climate of food system worker" src="/test/exposure_to_climate.png"></img>
                        </div>
                        {/* citizenship */}
                        <div className="occupation-graph">
                            <img alt="exposure to climate of food system worker" src="/test/exposure_to_climate.png"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Occupation; 