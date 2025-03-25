// ---------method 1 = default export----------

// const NetFlix = () => {

//     const name = "Life Sahi Hai";
//     const rating = 8.2;
//     const summary = "Iste doloremque minus eligendi lorem voluptas exercitationem voluptates dignissimos saepe amet commodi aut!";
//     const age = 17;

//     const canWatch = () => {
//         if (age >= 18) return "watch";
//         return "not available"
//     }

//     return (
//         <>
//             <div>
//                 <img src="web.webp" alt="not found" width="400px" height="200px" />
//             </div>
//             <h2>{name}</h2>
//             <h3>{rating}</h3>
//             <h3>Rating2 : {4 + 6}</h3>
//             <p>{summary} </p>
//             <button>{canWatch()}</button>
//         </>
//     )

// }
// export default NetFlix;


// -------------------------second method = name export-----------------
// export const NetFlix = () => {

//     const name = "Life Sahi Hai";
//     const rating = 8.2;
//     const summary = "Iste doloremque minus eligendi lorem voluptas exercitationem voluptates dignissimos saepe amet commodi aut!";
//     const age = 17;

//     const canWatch = () => {
//         if (age >= 18) return "watch";
//         return "not available"
//     }

//     return (
//         <>
//             <div>
//                 <img src="web.webp" alt="not found" width="400px" height="200px" />
//             </div>
//             <h2>{name}</h2>
//             <h3>{rating}</h3>
//             <h3>Rating2 : {4 + 6}</h3>
//             <p>{summary} </p>
//             <button>{canWatch()}</button>
//         </>
//     )

// }

// export const Footer = ()=>{
//     return <p>copy right @ritikroshan</p>
// }


// -------------------combined export----------------------
const NetFlix = () => {

    const name = "Life Sahi Hai";
    const rating = 8.2;
    const summary = "Iste doloremque minus eligendi lorem voluptas exercitationem voluptates dignissimos saepe amet commodi aut!";
    const age = 17;

    const canWatch = () => {
        if (age >= 18) return "watch";
        return "not available"
    }

    return (
        <>
            <div>
                <img src="web.webp" alt="not found" width="400px" height="200px" />
            </div>
            <h2>{name}</h2>
            <h3>{rating}</h3>
            <h3>Rating2 : {4 + 6}</h3>
            <p>{summary} </p>
            <button>{canWatch()}</button>
        </>
    )

}
export default NetFlix;

export const Header = ()=>{
    return <h1>NetFlix Trending Webseries</h1>
}


export const Footer = ()=>{
    return <p>copy right @ritikroshan</p>
}
