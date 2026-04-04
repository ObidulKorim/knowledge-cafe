import CoverImage1 from '../../../assets/images/2.png';
import CoverImage2 from '../../../assets/images/3.png'
import CoverImage3 from '../../../assets/images/4.jpg'
import boy1 from '../../../assets/images/boy1.png';
import boy2 from '../../../assets/images/boy2.png';
import girl1 from '../../../assets/images/girl1.jpg';
const Blogs = () => {
    return (
        <div className='container mx-auto flex justify-between pt-6 px-36 mb-6 gap-6'>
            {/* first container  */}
            <div className='flex flex-col gap-5'>
                <div>
                    <div>
                        <img className='w-11/12' src={CoverImage1} alt="" />
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-4 py-4 items-center'>
                            <div>
                                <img className='w-16 ' src={boy1} alt="" />
                            </div>
                            <div>
                                <h5 className='text-xl font-bold'>Mr. Mahim</h5>
                                <p className='opacity-50'>Mar 14 (4 days ago)</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <p className='opacity-50'>05 Min read</p>
                            <span className='opacity-50'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                            </svg>
                            </span>
                        </div>
                    </div>
                    <div className='flex flex-col space-y-5 mt-4 border-b-2 border-gray-400/50 pb-8'>
                        <p className='text-4xl'>
                            How to get your first job as a self-
                            <br />
                            thought programmer
                        </p>
                        <p className='flex gap-4 opacity-50 text-lg'>
                            <span>#beginners</span>
                            <span>#programming</span>
                        </p>
                        <a href=""><span className=' text-indigo-800 underline text-xl'>Mark as read</span></a>
                    </div>

                </div>

                {/* second container  */}

                <div>
                    <div>
                        <img className='w-11/12' src={CoverImage2} alt="" />
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-4 py-4 items-center'>
                            <div>
                                <img className='w-16 ' src={boy2} alt="" />
                            </div>
                            <div>
                                <h5 className='text-xl font-bold'>Mr. Mahfuz</h5>
                                <p className='opacity-50'>Mar 14 (4 days ago)</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <p className='opacity-50'>10 Min read</p>
                            <span className='opacity-50'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                            </svg>
                            </span>
                        </div>
                    </div>
                    <div className='flex flex-col space-y-5 mt-4 border-b-2 border-gray-400/50 pb-8'>
                        <p className='text-4xl'>
                            How to get your first job as a self-
                            <br />
                            thought programmer
                        </p>
                        <p className='flex gap-4 opacity-50 text-lg'>
                            <span>#beginners</span>
                            <span>#programming</span>
                        </p>
                        <a href=""><span className=' text-indigo-800 underline text-xl'>Mark as read</span></a>
                    </div>

                </div>

                {/* third container  */}

                <div className='mb-16'>
                    <div>
                        <img className='w-11/12' src={CoverImage3} alt="" />
                    </div>
                    <div className='flex justify-between items-center'>
                        <div className='flex gap-4 py-4 items-center'>
                            <div>
                                <img className='w-16 ' src={girl1} alt="" />
                            </div>
                            <div>
                                <h5 className='text-xl font-bold'>Mrs. Monali</h5>
                                <p className='opacity-50'>Mar 14 (4 days ago)</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <p className='opacity-50'>12 Min read</p>
                            <span className='opacity-50'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
                            </svg>
                            </span>
                        </div>
                    </div>
                    <div className='flex flex-col space-y-5 mt-4 pb-8'>
                        <p className='text-4xl'>
                            How to get your first job as a self-
                            <br />
                            thought programmer
                        </p>
                        <p className='flex gap-4 opacity-50 text-lg'>
                            <span>#beginners</span>
                            <span>#programming</span>
                        </p>
                        <a href=""><span className=' text-indigo-800 underline text-xl'>Mark as read</span></a>
                    </div>

                </div>

            </div>


            {/* for the right side slide */}
            <div className='flex flex-col gap-6'>
                <div className='bg-indigo-200 text-indigo-500 text-xl font-extrabold rounded-md px-6 py-4'>
                    <h3>Spent time on read : <span>177 Min</span></h3>
                </div>
                <div className='flex flex-col bg-gray-200 gap-4 p-6 rounded-md'>
                    <h3 className='text-xl font-extrabold'>Bookmarked Blogs : <span>8</span></h3>
                    <p className='p-5 bg-white text-lg rounded-md'>Master Microsoft power platform
                        <br />
                        and become an in demand!</p>
                    <p className='p-5 bg-white text-lg rounded-md'>Master Microsoft power platform
                        <br />
                        and become an in demand!</p>
                    <p className='p-5 bg-white text-lg rounded-md'>Master Microsoft power platform
                        <br />
                        and become an in demand!</p>
                    <p className='p-5 bg-white text-lg rounded-md'>Master Microsoft power platform
                        <br />
                        and become an in demand!</p>
                    <p className='p-5 bg-white text-lg rounded-md'>Master Microsoft power platform
                        <br />
                        and become an in demand!</p>
                    <p className='p-5 bg-white text-lg rounded-md'>Master Microsoft power platform
                        <br />
                        and become an in demand!</p>
                </div>
            </div>
        </div>

    );
};

export default Blogs;