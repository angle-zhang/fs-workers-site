import {Link} from 'react-router-dom';
import "./OccupationCard.css"

function Card () { 
    return ( 
        <div className="occ-card-container"> 
            <div className="occ-card-header">
                <div className="occ-card-title">
                    <Link to="/occupations/food_scientists"><h3 className="blue-underline-text">Agricultural and Food Scientists</h3></Link>
                </div>
                <div className="occ-selector"></div> 
            </div>
            <div className="occ-card-description">
                <p>Agricultural and food scientists create scientific methods and research strategies to establish more efficient agricultural services and products.</p>
                <p>Annual Income: $68,970</p>
                <Link to="/occupations/food_scientists" className="blue-underline-text">Learn More</Link>
            </div>
        </div>
    )
}

export default Card; 