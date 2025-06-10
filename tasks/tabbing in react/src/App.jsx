import { useState } from 'react'
import './App.css'
import companyInfo from './companyinfo'


function App() {
  // activetabs ke andr 0 wala index dal diya i.e kon sa tab/index open hai jo 0 hai
  let [activeTabs, setActiveTabs] = useState(0)
  // 0 index ka data  aur kon se tab ka data dikhana hai
  let [activeContent, setActiveContent] = useState(companyInfo[0])

  let changeData = (index)=>{
     setActiveTabs(index) 
     setActiveContent(companyInfo[index])
  }


  return (
    <>
      <div className="tabsouter">
        <h1 style={{ textAlign: 'left' }}>Law Prep Vision and Mission</h1>

        <ul>
          {companyInfo.map((tabsItems, index) => {
            return (
              <li>
                <button  onClick={()=>{changeData(index)}} className={activeTabs == index ? "activebutton" : ""}>{tabsItems.title}</button>
              </li>
            )
          })}
        </ul>
        {activeContent !== undefined ?  <p>{activeContent.description}</p> : ""}
       
      </div>
    </>
  )
}

export default App
