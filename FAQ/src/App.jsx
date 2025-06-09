import { useState } from 'react'
import './App.css'
import faqs from './Faq'

function App() {
  const [showAns, setShowAns] = useState(null)

  return (
    <>
      <div>
        <h1>Frequently Asked Questions...</h1>
        <div className='faqouter'>
          {faqs.map((faqitmess) => (
            <div key={faqitmess.id} className="faqitems">
              <h2 onClick={() =>
                setShowAns(showAns === faqitmess.id ? null : faqitmess.id)
              }>
                {faqitmess.question}
              </h2>
              <p className={showAns === faqitmess.id ? 'activeans' : ''}>
                {faqitmess.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default App


// If the currently visible answer (showAns) is the same as the clicked question's id,
// set showAns to null to hide the answer (collapse it).
// Otherwise, set showAns to the clicked question's id to show that answer.
