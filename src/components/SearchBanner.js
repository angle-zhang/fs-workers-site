import "./SearchBanner.css";
import {Link} from 'react-router-dom';
//search tutorial: https://dev.to/sage911/how-to-write-a-search-component-with-suggestions-in-react-d20

function SearchBanner(props) { 
    const websiteTitle = props.small ? "Food System Occupations" : "Website title";

    return ( 
        <div className="search-banner-container"> 
            <div className="search-banner-text-container">
                <h1 className="website-title">{websiteTitle}</h1> 
                {!props.small && <p>description goes here</p>}
            </div>
            <form> 
                <div className="search-bar-container">
                        <input
                            className="search-bar"
                            placeholder="Search for an occupation"
                        ></input>
                        {/* create dropdown elements */}
                        <div className="blue-select">
                        <select id="category_1" name="category 1">
                            <option value="Option 1">Option 1</option>
                            <option value="Option 1">Option 1</option>
                            <option value="Option 1">Option 1</option>
                            <option value="Option 1">Option 1</option>
                        </select>
                        </div> 
                        <div className="blue-select">
                        <select id="category_1" name="category 1">
                            <option value="Option 1">Option 1</option>
                            <option value="Option 1">Option 1</option>
                            <option value="Option 1">Option 1</option>
                            <option value="Option 1">Option 1</option>
                        </select>
                        </div>  
                        <button className="dark-blue-button" name="name" value="value" type="submit">Search</button>
                </div>
            </form>
            <br/> 
            {!props.small && <Link className="dark-blue-button" to="/occupations">Browse All Occupations</Link>}
        </div>
    )
}

export default SearchBanner;