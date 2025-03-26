export const SeriesCard = (props) => {
    const { img_url, name, rating, description, genre, cast, watch_url } = props.data;

    // inline css ko use karne ke liye hmne style ka  1 object bna diya 
const btn_style ={
    padding:"1.2rem 2.4rem",
    border:"none",
    fontSize:"1.6rem",
    backgroundColor:"var(--bnt-hover-bg-color)",
    color:"var(--bg-color)"
}

    return (
        <li className="card">
            <div>
                <img src={img_url} alt="not found" width="400px" height="200px" />
            </div>
            <div className="card-content">
                <h2>Name :  {name}</h2>

                <h3>Rating : {rating}</h3>

                <p>summary :  {description} </p>

                <p>Genre :  {genre} </p>

                <p>Cast :  {cast} </p>

                <a href={watch_url} target="_blank">
                    <button 
                    // fir yha hmne use kr liya
                    style={btn_style}>Watch Now</button>
                </a>
            </div>
        </li>)
};

// Note : hum normal way me bhi inline css apply kr skte hai jese react me karte hai