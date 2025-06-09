import faqs from './Data/faq'
import { useState } from 'react'

const Faqs = () => {

    const [showAns, setShowAns] = useState(null)

    let items = faqs.map((value, index) => {

        let itemsDetails = {
            value,
            showAns,
            setShowAns
        }
        return (
            <FaqsItems itemsDetails={itemsDetails} key={index} />
        )
    })

    return (
        <>

            <h1>Frequently Asked Questions...</h1>

            <div className='faqouter'>
                {items}
            </div>

        </>
    )
}

export default Faqs

function FaqsItems({ itemsDetails }) {

    let { value, showAns, setShowAns } = itemsDetails;

    return (
        <>
            <div className="faqitems">
                <h2 onClick={() =>
                    setShowAns(showAns === value.id ? null : value.id)
                }>
                    {value.question}
                </h2>
                <p className={showAns === value.id ? 'activeans' : ''}>
                    {value.answer}
                </p>
            </div>
        </>
    )
}