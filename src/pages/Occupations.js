import Header from "../components/Header.js";
import Banner from "../components/SearchBanner.js"
import OccupationCard from "../components/OccupationCard";
import "./Occupations.css";

import {useState, useEffect} from "react";


const filterCards = (cards, q, c) => {
    if (c) { 
        cards = cards.filter((card) => {
            const cardGroup = card.category; 
            return cardGroup === c;
        })
        console.log(cards, c, "cards")
    }
    if (!q || q===null || q==="") {
        return cards;
    }

    return cards.filter((card) => {
        const cardName = card.title.toLowerCase();
        return cardName.includes(q);
    });
};

const query = `
{
    individualProfileCollection(order: title_ASC) { 
        items {
        sys {
            id
        }
        title
        category
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

    const { search } = window.location;
    const c = new URLSearchParams(search).get('category');
    const q = new URLSearchParams(search).get('search');
    const filteredPosts = filterCards(profiles, q, c);
  
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
                {filteredPosts.map((profile) => <OccupationCard {...profile} />)}
                </div>
                {/* <div className="purple-text-box">Select multiple boxes to compare characteristics</div> */}
            </div>
        </div>
    )

}

export default Occupations; 