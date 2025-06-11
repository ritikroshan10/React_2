import { useLocation } from 'react-router-dom'
import Header from '../Common/Header'
import { blog } from '../Data/blog'

const Blogsdetails = () => {
    let uselocation = useLocation()
    let currentId = uselocation.pathname.split('/')[2] 
    let currentData = blog.filter((v)=>v.id==currentId)[0]
   
  return (
    <>
    <Header />
    <h3 style={{textAlign:"center"}}>{currentData.title}</h3>
    </>
  )
}

export default Blogsdetails