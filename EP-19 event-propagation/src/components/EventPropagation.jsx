import React from 'react'
import "./EV.css";

const EventPropagation = () => {

    const handleGrandParent = (e) => {
        console.log("grandparent");
    }
    const handleParent = (e) => {
        console.log("parent");
    }
    const handleChild = (e) => {
        e.stopPropagation();
        console.log("child");
    }




    return (
        <>
            {/*------------------------ bubling-------------------- */}
            {/* <section>
                <div className="g-div" onClick={handleGrandParent}>
                    <div className="p-div" onClick={handleParent}>
                        <button className="c-div" onClick={handleChild}>
                            Child Div
                        </button>
                    </div>
                </div>
            </section> */}

            {/* -------------------capturing---------------- */}
            <section>
                <div className="g-div" onClickCapture={handleGrandParent}>
                    <div className="p-div" onClickCapture={handleParent}>
                        <button className="c-div" onClickCapture={handleChild}>
                            Child Div
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default EventPropagation
