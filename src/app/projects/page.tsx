import React from 'react';

const page = () => {
    return (
        <div>
            <div className=' m-5 p-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 justify-items-center'>
                <div className=' text-center'>
                    <div className='card w-96 bg-base-100 shadow-xl hover:opacity-50 cursor-pointer'>
                        <figure>
                            <img src={'./resource/hsup_logo.png'} alt='hsup_logo'/>
                        </figure>
                        <div className='card-body'>
                            <h2 className='card-title'>Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default page;
