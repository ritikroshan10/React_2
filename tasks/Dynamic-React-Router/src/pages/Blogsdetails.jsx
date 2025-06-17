// import { useLocation } from 'react-router-dom'
// import Header from '../Common/Header'
// import { blog } from '../Data/blog'

// const Blogsdetails = () => {
//     let uselocation = useLocation()
//     let currentId = uselocation.pathname.split('/')[2] 
//     let currentData = blog.filter((v)=>v.id==currentId)[0]

//   return (
//     <>
//     <Header />
//     <h3 style={{textAlign:"center"}}>{currentData.title}</h3>
//     </>
//   )
// }

// export default Blogsdetails


// ------------------------Instead of extracting the ID manually from location.pathname, you can use useParams from react-router-dom-------------

import { useParams } from 'react-router-dom'
import Header from '../Common/Header'
import { blog } from '../Data/blog'

const Blogsdetails = () => {
  const { id } = useParams()
  const currentData = blog.find((v) => v.id == id)

  return (
    <>
      <Header />
      <h3 style={{ textAlign: 'center' }}>{currentData?.title || 'Blog Not Found'}</h3>
    </>
  )
}

export default Blogsdetails
