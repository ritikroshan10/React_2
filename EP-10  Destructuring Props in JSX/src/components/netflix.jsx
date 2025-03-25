import seriesData from "../api/seriesData.json"
import { SeriesCard } from "./SeriesList"

const NetFlix = () => {
    return (
        <ul>
            {seriesData.map((curElem) => {
              return < SeriesCard  key={curElem.id} data={curElem}/>
            })}
        </ul>
    )

}
export default NetFlix;
