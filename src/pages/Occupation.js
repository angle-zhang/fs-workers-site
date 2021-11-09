import Header from "../components/Header.js";
import "./Occupation.css"

import {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';



function Occupation () {
   
    const [page, setPage] = useState(null);
    const { occupation_id } = useParams()

    // gt id from url 
    const query = `
        {
            individualProfile(id:"${occupation_id}") {
                title, 
                description,
                roles1,
                statistics,
                prominentCharacteristics, 
                graphsCollection {
                    items {
                      url, 
                      description, 
                      title
                    }
                }
            }
        }
    `
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
      }, [query]);

    if (!page) {
        return "Loading...";
    }
 
    const {title, description, statistics, roles1, prominentCharacteristics, graphsCollection} = page;
    console.log(graphsCollection, "graphs")

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
                    {roles1 && <div className="occ-sub-container"> 
                        <h2 className="blue-text">Roles</h2>
                        <ul>{roles1.split('-').splice(1).map((role)=> <li><p>{role}</p></li>)}</ul>
                    </div>}
                    <div className="occ-sub-container"> 
                        <h2 className="blue-text">Statistics</h2>
                        <div className="stats-container"> 
                            {Object.keys(statistics).map((key) => <p><b>{`${key}:`}</b> {statistics[key]}</p> )}
                        </div>
                    </div>
                    {prominentCharacteristics && <div className="occ-sub-container"> 
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
                    </div>}
                    <div className="occ-sub-container">
                        {graphsCollection.items.map((graph) => { 
                            return <><h2 className="blue-text">{graph.description}</h2><div className="occupation-graph">
                                <img alt="exposure to climate of food system worker" src={graph.url}></img>
                            </div></>
                        })} 
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Occupation; 