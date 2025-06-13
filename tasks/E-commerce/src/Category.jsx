const Category = ({ finalCategory,setCategoryname}) => {
  return (
    <div>
      <h3 className='font-[500] text-[25px] p-[10px]'>Category</h3>
      <ul>
        {finalCategory.map((v, i) => (
          <li key={i} className='bg-[#ccc] p-[7px] cursor-pointer text-[20px] font-serif font-[500] mb-2'  onClick={()=>setCategoryname(v.name)}>
            {/* <li>{v.name}</li> // ✅ Correct if v is an object */}
            {typeof v === 'object' ? v.name : v}
          </li>
        ))}
      </ul>
    </div>
  )
}


export default Category