import React from 'react'

export const Blog = () => {
    return (
        <div className='md:flex md:justify-between md:items-center border rounded-2xl border-gray-200 p-4'>
            <div className='md:w-[48%]'>
                <img className='w-full rounded-2xl' src="https://i.ibb.co.com/0jtf569L/screenroad-Fqu-Dp5-N1-Gw0-unsplash.jpg" />
            </div>
            <div className='md:w-[48%]'>
                <h3 className='text-xl text-center font-bold'>Friesian Cattle: It gives 20+ litter milk daily!</h3>
                <p className='text-justify'>Friesian cattle are one of the most popular dairy cow breeds in the world. They are black and white in color and have a calm nature. Friesians come from the Netherlands, especially from the Friesland region. These cows are famous for giving a large amount of milk every day.</p>
                <p className='text-justify'>Farmers like Friesian cattle because they grow fast, eat different kinds of food, and live well in many climates. Their milk has less fat but is very good for making cheese and other dairy products. Friesian cows are friendly and easy to handle, which makes them a favorite choice for dairy farms around the world.......</p>
                <p className='my-2'><button className='btn'>Read More...</button></p>
            </div>
        </div>
    )
}
