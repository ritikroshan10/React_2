import { useEffect, useState } from 'react'
import Category from './Category'
import axios from 'axios'


function App() {
  const [finalCategory, setFinalCategory] = useState([])
  const [finalProducts, setFinalProducts] = useState([])
  const [categoryname, setCategoryname] = useState('')

  // function for get category

  let getCategory = () => {
    axios.get('https://dummyjson.com/products/categories')
      .then((res) => res.data)
      .then((finalRes) => {
        setFinalCategory(finalRes)
      })
  }

  // funtion for get product

  let getProducts = () => {
    axios.get('https://dummyjson.com/products')
      .then((proRes) => proRes.data)
      .then((finalProRes) => {
        setFinalProducts(finalProRes.products)
      })
  }

  useEffect(() => {
    getCategory()
    getProducts()
  }, [])


  // useeffect for category/filter

  useEffect(() => {
    if (categoryname !== "") {
      axios.get(`https://dummyjson.com/products/category/${categoryname}`)
        .then((proRes) => proRes.data)
        .then((finalProRes) => {
          setFinalProducts(finalProRes.products)
        })
    }
  }, [categoryname])

  // loop for products

  let productItem = finalProducts.map((products, index) => {
    return (
      <ProductsItems key={index} pdata={products} />
    )
  })

  return (
    <>
      <div className='py-[40px]'>
        <div className='max-w-[1320px] mx-auto'>
          <h1 className='text-center text-[40px] font-bold mb-[30px]'>Ours Products</h1>
          <div className='grid grid-cols-[30%_auto] gap-[20px]'>

            <div>
              <Category finalCategory={finalCategory} setCategoryname={setCategoryname} />
            </div>

            {/* for product */}
            <div>
              <div className='grid grid-cols-3 gap-4'>
                {
                  finalProducts.length >= 1 ?
                    productItem
                    :
                    'No Products Found'
                }
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}

export default App

// product items component
function ProductsItems({ pdata }) {
  return (
    <>
      <div className='shadow-lg text-center pb-5'>
        <img src={pdata.thumbnail} className='w-[100%] h-[250px]' />
        <p>{pdata.title}</p>
        <b>{pdata.price}</b>
      </div>
    </>
  )
}
