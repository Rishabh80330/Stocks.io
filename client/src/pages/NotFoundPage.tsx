import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const NotFound = ({ underConstruction = false }) => {
    useEffect(() => {
        document.title = 'Not Found | Stocks.io';
    }, []);

    return (
        <div className='bg-white dark:bg-darkBg w-full h-screen text-center flex items-center'>
            <div className='max-w-2xl mx-auto py-64 bg-white dark:bg-darkBg flex items-center justify-center'>
                <div className='p-6'>
                    <div>
                        <span className='text-xs font-medium text-blue-600 uppercase dark:text-blue-400'>Error 404</span>
                        {underConstruction ? (
                            <h1 className='block mt-2 text-2xl font-semibold text-gray-800 dark:text-white hover:text-gray-600'>
                                Oops! <code className='text-red-900 dark:text-red-600'>{window.location.pathname}</code> is currently under maintenance.
                            </h1>
                        ) : (
                            <h1 className='block mt-2 text-2xl font-semibold text-gray-800 dark:text-white hover:text-gray-600'>
                                Oops! Couldn't find the the page <code className='text-red-900 dark:text-red-600'>{window.location.pathname}</code>
                            </h1>
                        )}
                    </div>

                    <div className='mt-8'>
                        <Link
                            to='/'
                            className='px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md dark:bg-blue-800 hover:bg-blue-500 dark:hover:bg-blue-700 focus:outline-none focus:bg-blue-500 dark:focus:bg-blue-700'>
                            Back to Home Page
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
