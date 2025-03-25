export const SeriesCard = (props) => {
    // desttucturing of props
    const {id,img_url,name,rating,description,genre,cast,watch_url}= props.data;
    return (
    <li>
        <div>
            <img src={img_url} alt="not found" width="400px" height="200px" />
        </div>

        <h2>Name :  {name}</h2>

        <h3>Rating : {rating}</h3>

        <p>summary :  {description} </p>

        <p>Genre :  {genre} </p>

        <p>Cast :  {cast} </p>

        <a href={watch_url} target="_blank">
            <button>Watch Now</button>
        </a>
    </li>)
};