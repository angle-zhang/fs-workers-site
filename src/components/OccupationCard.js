import {Link} from 'react-router-dom';
import "./OccupationCard.css"

function Card ({title, category, statisticsTrunc, sys}) { 
    
    return ( 
        <div className="occ-card-container"> 
            <div className="occ-card-header">
                <div className="occ-card-title">
                    <Link to={`/occupations/${sys.id}`}><h3 className="blue-underline-text">{title}</h3></Link>
                </div>
                <div className="occ-selector"></div> 
            </div>
            <div className="occ-card-description">
                <p>{category}</p>
                {/* TODO: add style  */}
                {statisticsTrunc ? Object.keys(statisticsTrunc).map((key)=><>{`${key}: ${statisticsTrunc[key]}`}<br/></>):null}                
            </div>
            <div className="learn-more"><Link to={`/occupations/${sys.id}`} className="blue-underline-text">Learn More</Link></div>
        </div>
    )
}

export default Card; 