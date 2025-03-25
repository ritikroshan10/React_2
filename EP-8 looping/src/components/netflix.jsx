import seriesData from "../api/seriesData.json"

const NetFlix = () => {
    return (
        <ul>
            {seriesData.map((curElem) => {
                return (<li key={curElem.id}>
                    <div>
                        <img src={curElem.img_url} alt="not found" width="400px" height="200px" />
                    </div>

                    <h2>Name :  {curElem.name}</h2>

                    <h3>Rating : {curElem.rating}</h3>

                    <p>summary :  {curElem.description} </p>

                    <p>Genre :  {curElem.genre} </p>

                    <p>Cast :  {curElem.cast} </p>

                    <a href={curElem.watch_url} target="_blank">
                        <button>Watch Now</button>
                    </a>
                </li>)
            })}

        </ul>
    )

}
export default NetFlix;
