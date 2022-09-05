import {data} from '../Data/data.js' 
import { useState } from 'react'
const Foods = () => {
    //console.log(data)
    const [foods , setFoods] = useState(data)


    //Filter of the foods and etc...
    const filtertype = (category) =>{
        setFoods(
            data.filter((food)=>{
                return food.category === category
            })
        )
    }
    //Filter by Price 
    const filterbyprice = (price) =>{
        setFoods(
            data.filter((food)=>{
                return food.price ===price
            })
        )
    }
  return (
    <div className='max-w-[1640px] mx-auto px-4 py-12'>
        <h1 className='text-orange-600 font-bold text-center text-4xl'>Our top rated Menu</h1>

        {/** Filter Row **/}
        <div className='flex flex-col lg:flex-row justify-between'>
            {/** Filter Type **/}
            <div>
                <p className='font-bold text-gray-700 sm:text-center py-8'>Filter Type</p>
                <div className='flex justify-between flex-wrap'>
                    <button onClick={()=>setFoods(data)} className='border rounded-full border-orange-600 bg-white text-orange-600 hover:bg-orange-600 hover:text-white font-bold p-1 m-1 duration-300'>ALL</button>
                    <button onClick={()=>filtertype('pizza')} className='border rounded-full border-orange-600 bg-white text-orange-600 hover:bg-orange-600 hover:text-white font-bold p-1 m-1 duration-300'>Pizzas</button>
                    <button onClick={()=>filtertype('burger')} className='border rounded-full border-orange-600 bg-white text-orange-600 hover:bg-orange-600 hover:text-white font-bold p-1 m-1 duration-300'>Burgers</button>
                    <button onClick={()=>filtertype('chicken')} className='border rounded-full border-orange-600 bg-white text-orange-600 hover:bg-orange-600 hover:text-white font-bold p-1 m-1 duration-300'>Chickens</button>
                    <button onClick={()=>filtertype('salad')} className='border rounded-full border-orange-600 bg-white text-orange-600 hover:bg-orange-600 hover:text-white font-bold p-1 m-1 duration-300'>Salads</button>
                </div>
            </div>

            {/** Filter price **/}
            <div>
                <p className='font-bold text-gray-700 sm:text-center py-8'>Filter Price</p>
                <div className='flex justify-between max-w-[390px] w-full'>
                    <button onClick={()=>filterbyprice('$')} className='border rounded-full border-orange-600 bg-white text-orange-600 hover:bg-orange-600 hover:text-white font-bold p-1 m-1 duration-300'>$</button>
                    <button onClick={()=>filterbyprice('$$')} className='border rounded-full border-orange-600 bg-white text-orange-600 hover:bg-orange-600 hover:text-white font-bold p-1 m-1 duration-300'>$$</button>
                    <button onClick={()=>filterbyprice('$$$')} className='border rounded-full border-orange-600 bg-white text-orange-600 hover:bg-orange-600 hover:text-white font-bold p-1 m-1 duration-300'>$$$</button>
                    <button onClick={()=>filterbyprice('$$$$')} className='border rounded-full border-orange-600 bg-white text-orange-600 hover:bg-orange-600 hover:text-white font-bold p-1 m-1 duration-300'>$$$$</button>
                </div>
            </div>
        </div>
        {/** Display Menu **/}
        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
            {foods.map((food, index)=>(
                <div className='border rounded-lg shadow-lg hover:scale-105 duration-300' key={index}>
                    <img className='w-full h-[200px] object-cover rounded-t-lg'  src={food.image} alt={food.name} />
                    <div className='flex justify-between px-2 py-4'>
                        <p className='font-bold'>{food.name}</p>
                        <p><span className='bg-orange-500 text-white p-1 rounded-full'>{food.price}</span></p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Foods