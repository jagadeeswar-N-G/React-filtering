import React from 'react'
import Card from './Card/Card'

const Plp = ({filteredData}) => {
  return (

   <section className='grid grid-cols-3 gap-6 p-28'>
        {filteredData.map((item) => (
                <Card data = {item}/>
        ))}

   </section>
  )
}

export default Plp