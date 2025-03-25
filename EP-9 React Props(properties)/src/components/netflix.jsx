import seriesData from "../api/seriesData.json"
import { SeriesCard } from "./SeriesList"

const NetFlix = () => {
    return (
        <ul>
            {seriesData.map((curElem) => {
              return < SeriesCard  key={curElem.id} curElem={curElem}/>
            })}
        </ul>
    )

}
export default NetFlix;
