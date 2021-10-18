import Header from "../components/Header.js";
import Banner from "../components/SearchBanner.js"
import OccupationCard from "../components/OccupationCard";
import "./Occupations.css";

import {useState, useEffect} from "react";


const query = `
{
    individualProfileCollection { 
        items {
        sys {
            id
        }
        title
        shortDescription
        statisticsTrunc
        } 
    }
}
`

function Occupations () { 
    
    const [profiles, setProfiles] = useState(null);

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
            setProfiles(data.individualProfileCollection.items);
          });
      }, []);

    if (!profiles) {
        return "Loading...";
    }

  
    console.log(profiles)
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
                {profiles.map((profile) => <OccupationCard {...profile} />)}
                </div>
                {/* <div className="purple-text-box">Select multiple boxes to compare characteristics</div> */}
            </div>
        </div>
    )

}

export default Occupations; 