export const SeriesCard = (props) => {
    return (
    <li>
        <div>
            <img src={props.curElem.img_url} alt="not found" width="400px" height="200px" />
        </div>

        <h2>Name :  {props.curElem.name}</h2>

        <h3>Rating : {props.curElem.rating}</h3>

        <p>summary :  {props.curElem.description} </p>

        <p>Genre :  {props.curElem.genre} </p>

        <p>Cast :  {props.curElem.cast} </p>

        <a href={props.curElem.watch_url} target="_blank">
            <button>Watch Now</button>
        </a>
    </li>)
};