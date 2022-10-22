import React from 'react';

const LoadingSpiners = () => {
    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-gray-900"></div>
        </div>
    );
};

export default LoadingSpiners;