import React from 'react'

function Home() {
return (
    <div class="home" className='flex flex-col mt-20 bg-gray-900'>
        <div className='grid grid-cols-12 px-80 ml-10 pt-20 mb-28'>
            <div className='grid col-span-8 items-center'>
                <h1 className='flex text-[42px] mt-6 font-semibold'>Random Picker</h1>
                <p>Have a list of names competing for a prize? Let us add a dash of randomness to your giveaways. With our intuitive tool, you can effortlessly pick a winner from the pool of names entered by you or your participants. It's like spinning a wheel of excitement, ensuring fairness and a hint of surprise in your selections. Try it now and elevate your giveaways to a whole new level of thrill!</p>
            </div>
            <div className='grid justify-center items-end mb-7 ml-3 col-span-3'>
                <img src="images/logo.png" className='w-[300px]' alt="" />
            </div>
        </div>
        <div className='grid grid-cols-12 -ml-4 px-80 pt-8 bg-slate-950 drop-shadow-2xl'>
            <div className='grid justify-center items-center col-span-3'>
                <img src="images/fast.png" className='w-[360px] text-white' alt="" />
            </div>
            <div className='grid col-span-8 items-center mb-16'>
                <h1 className='flex text-[42px] font-semibold'>Great Interface & Fast Accesibility</h1>
                <p className='-mt-24'>Simplicity meets functionality. Our user interface is designed with you in mind, ensuring effortless navigation and an enjoyable experience. With a clear menu, intuitive layout, and responsive design, exploring our offerings has never been smoother. Experience accessibility and ease like never before as you discover the heart of our website's user-centric design. You dont need to create an account or pay money to experience the greatness of Pickone. </p>
            </div>
        </div>
        <div className='grid grid-cols-12 px-80 ml-10 py-16 bg-gray-900'>
            <div className='grid col-span-8 items-center'>
                <h1 className='flex text-[42px] font-semibold'>Giveaway Wheel</h1>
                <p className='-mt-32'> Imagine a digital wheel filled with the names you've entered, just waiting to bestow luck upon a winner. With a simple spin, you can bring an element of fun and randomness to your giveaways. Watch as the wheel whirls and lands on a name, transforming your selections into an exciting game of chance. Ready to see who fortune favors? Give our Giveaway Wheel a spin and let the anticipation begin!</p>
            </div>
            <div className='grid justify-center items-center col-span-3'>
                <img src="images/wheel.png" className='w-[270px]' alt="" />
            </div>
        </div>
        <div className='flex flex-col bg-slate-950 pb-20'>
            <h1 className='m-auto text-4xl font-semibold pt-10 pb-16'>
                Start to pick!
            </h1>
            <div className='flex flex-row justify-evenly'>
                <div className='border-[4px] border-slate-700 shadow-2xl transition-all rounded-md w-72 h-[42vh] border-solid hover:border-[7px] hover:border-yellow-500'>
                    <img className="w-32 -mt-24 m-auto"
                    src="images/wheel.png " alt="" 
                    />
                    <p className='w-60 m-auto mt-2'>
                    With a simple spin, you can bring an element of fun and randomness to your giveaways. Watch as the wheel whirls and lands on a name, transforming your selections into an exciting game of chance. Give our Giveaway Wheel a spin and let the anticipation begin!
                    </p>
                    <div className='flex h-24 w-full justify-center items-center'>
                        <button className='flex h-12 justify-center bg-slate-700 items-center rounded-3xl w-48 hover:bg-yellow-600'>
                            Giveaway Wheel
                        </button>
                    </div>
                </div>
                <div className='border-[4px] border-slate-700 shadow-2xl transition-all rounded-md w-72 h-[42vh] border-solid hover:border-[7px] hover:border-green-500'>
                    <img className='w-32 -mt-6 m-auto' src="images/logo.png" alt="" />
                    <p className='w-60 m-auto mt-5'>
                    Have a list of names competing for a prize? Let us add a dash of randomness to your giveaways. With our intuitive tool, you can effortlessly pick a winner from the pool of names entered by you or your participants. Try it now and elevate your giveaways to a whole new level of thrill!
                    </p>
                    <div className='flex h-24 w-full justify-center items-center'>
                        <button className='flex h-12 justify-center bg-slate-700 items-center transition-all outline-none outline-0 rounded-3xl w-48 hover:bg-green-600'>
                            Random Picker
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default Home