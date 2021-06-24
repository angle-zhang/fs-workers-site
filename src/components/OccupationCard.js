import {Link} from 'react-router-dom';
import "./OccupationCard.css"

function Card () { 
    return ( 
        <div className="occ-card-container"> 
            <div className="occ-card-header"> 
                <h3>Agricultural and Food Scientists</h3>
                <div className="occ-card-checkbox"> </div>
            </div>
            <div className="occ-card-description">
                <p>Agricultural and food scientists create scientific methods and research strategies to establish more efficient agricultural services and products.</p>
                <p>Annual Income: $68,970</p>
                <Link>Learn More</Link>
            </div>
        </div>
    )
}

export default Card; 