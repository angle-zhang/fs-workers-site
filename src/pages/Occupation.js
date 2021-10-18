import Header from "../components/Header.js";
import "./Occupation.css"

import {useState, useEffect} from "react";

// gt id from url 
const query = `
{
    individualProfile(id:"7GkUtG60ke62vSvnKbKY7k") {
      title, 
      description,
      roles1,
      statistics,
      prominentCharacteristics,
      interactiveGraphs
    }
}
`

function Occupation (props) {
   
    const [page, setPage] = useState(null);
    // todo: turn into util
    useEffect(() => {
        window
          .fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.REACT_APP_CONTENTFUL_SPACE}/`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              // Authenticate the request
              Authorization: `Bearer ${process.env.REACT_APP_CONTENTFUL_TOKEN}`,
            },
            // send the GraphQL query
            body: JSON.stringify({ query }),
          })
          .then((response) => response.json())
          .then(({ data, errors }) => {
            if (errors) {
              console.error(errors);
            }

            // rerender the entire component with new data
            setPage(data.individualProfile);
          });
      }, []);

    if (!page) {
        return "Loading...";
    }
 
    const {title, description, statistics, roles1, prominentCharacteristics} = page;

    return (
        <div>
            <header>
            <Header/>
            </header>           
            <div className="content-container-white"> 
                <div className="occupation-page-container">
                    <h1 className="blue-underline-text">{title}</h1>
                    <div className="occ-sub-container"> 
                        <p>{description}</p>
                    </div>
                    <div className="occ-sub-container"> 
                        <h2 className="blue-text">Roles</h2>
                        <ul>{roles1.split('-').splice(1).map((role)=> <li><p>{role}</p></li>)}</ul>
                    </div>
                    <div className="occ-sub-container"> 
                        <h2 className="blue-text">Statistics</h2>
                        <div className="stats-container"> 
                            <p><b>Annual Income Earned (median):</b> ${statistics["AnnualIncome"]}</p>
                            <p><b>Total Employment:</b> {statistics["TotalEmployment"]}</p>
                            <p><b>Education (mean):</b> {statistics["Education"]}</p>
                            <p><b>Minimum Degree Attainment:</b> {statistics["MinDegree"]}</p>
                            <p><b>Welfare (mean):</b> {statistics["Welfare"]}</p>
                            <p><b>Overall Health Insurance Coverage (percentage):</b> {statistics["HealthIns"]}</p>
                            <p><b>Public Health Insurance Coverage (percentage):</b> {statistics["PublicIns"]}</p>
                            <p><b>US Citizenship (percentage):</b> {statistics["USCitizen"]}</p>
                        </div>
                    </div>
                    <div className="occ-sub-container"> 
                    <h2 className="blue-text">Worker Characteristics</h2>
                        <table className="characteristics-table">
                        <tr className="characteristic-row">
                                <th className="characteristic-table-name">Characteristic</th>
                                <th className="characteristic-table-score">O-NET Score</th>
                            </tr>
                            {prominentCharacteristics["Characteristics"].map((characteristic, i) => 
                                  <tr className="characteristic-row">
                                  <td className="characteristic-table-name">{characteristic}</td>
                                  <td className="characteristic-table-score">{prominentCharacteristics["ONET Score"][i]}</td>
                              </tr>                            
                            )}
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