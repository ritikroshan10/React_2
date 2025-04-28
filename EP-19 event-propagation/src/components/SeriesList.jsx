import styles from "./NetFlix.module.css";
import styled from 'styled-components';

export const SeriesCard = (props) => {
    const { img_url, name, rating, description, genre, cast, watch_url } = props.data;


    // style component

    const Button = styled.button({
        padding: "1.2rem 2.4rem",
        border: "none",
        fontSize: "1.6rem",
        backgroundColor: `${rating >= 8.5 ? "#7dcea0" : "#f7dc6f"}`,
        color: "var(--btn-color)",
        fontWeight: "bold",
        cursor: "pointer"
    });
   
    const ratingClass = rating >= 8.5 ? styles.super_hit : styles.average;

    return (
        <li className={styles.card}>

            <div>
                <img src={img_url} alt="not found" width="400px" height="200px" />
            </div>

            {/* <div className={styles['card-content']}> */}
            <div className="flex flex-col gap-6 py-[3.2rem] px-[1.2rem]">
                <h2>Name :  {name}</h2>

                <h3>Rating :<span className={`${styles.rating} ${ratingClass}`}> {rating} </span></h3>

                <p className="text-3xl font-bold underline">summary :  {description} </p>

                <p>Genre :  {genre} </p>

                <p>Cast :  {cast} </p>

                <a href={watch_url} target="_blank">
                    {/* use of style component */}
                    <Button>Watch Now</Button>
                </a>
            </div>
        </li>)
};
