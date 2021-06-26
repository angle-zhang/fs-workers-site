import Header from "../components/Header.js";
import "./Occupation.css"

function Occupation (props) { 
    return (
        <div>
            <header>
            <Header/>
            </header>           
            <div className="content-container-white"> 
                <div>
                    <h1>Agriculture and Food Scientists</h1>
                    <p>BLS group</p> 
                    <p>Agricultural and food scientists create scientific methods and research strategies to establish more efficient agricultural services and products.</p>
                    <div className="statistics-container">
                        <h2>Statistics</h2> 
                        <p><b>Annual Income Earned (median)</b></p>
                        <p><b>Total Employment</b></p>
                        <p><b>Education (mean)</b></p>
                        <p><b>Minimum Degree Attainment</b></p>
                        <p><b>Welfare (mean)</b></p>
                        <p><b>Overall Health Insurance Coverage (percentage)</b></p>
                        <p><b>Public Health Insurance Coverage (percentage)</b></p>
                        <p><b>US Citizenship (percentage)</b></p>
                    </div>
                    <h2>Worker Characteristics</h2>
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
                    <h2>Worker Characteristic Graphs</h2>
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
    )

}

export default Occupation; 