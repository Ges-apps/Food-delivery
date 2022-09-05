import pizza from '../Assets/pepperoni.jpg'
import spaghetti from '../Assets/spaghetti.jpg'
import salad from '../Assets/salad.jpg'
import {MdSell} from 'react-icons/md'
const Cards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
        {/** Card **/}
        <div className='rounded-xl relative'>
            {/** Overlay **/}
            <div className='absolute w-full h-full bg-black/60 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Most FavoriteS</p>
                <p className='font-bold px-2 flex items-center'><MdSell className='mr-2' size={20}/>5% oFF</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 rounded-xl p-4 hover:bg-black hover:text-white hover:cursor-pointer duration-300'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={pizza} alt="pepperoni pizza" />
        </div>
        {/** Card **/}
        <div className='rounded-xl relative'>
            {/** Overlay **/}
            <div className='absolute w-full h-full bg-black/60 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Most FavoriteS</p>
                <p className='font-bold px-2 flex items-center'><MdSell className='mr-2' size={20}/>10% oFF</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 rounded-xl p-4 hover:bg-black hover:text-white hover:cursor-pointer duration-300'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={spaghetti} alt="special spaghetti" />
        </div>
        {/** Card **/}
        <div className='rounded-xl relative'>
            {/** Overlay **/}
            <div className='absolute w-full h-full bg-black/60 rounded-xl text-white'>
                <p className='font-bold text-2xl px-2 pt-4'>Most FavoriteS</p>
                <p className='font-bold px-2 flex items-center'><MdSell className='mr-2' size={20}/>Free for order higher than 50$</p>
                <button className='border-white bg-white text-black mx-2 absolute bottom-4 rounded-xl p-4 hover:bg-black hover:text-white hover:cursor-pointer duration-300'>Order Now</button>
            </div>
            <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src={salad} alt="cezar salad" />
        </div>
    </div>
  )
}

export default Cards