import React from 'react'

export const LoadingPage = () => {
    return (
        <div className='min-h-[calc(100vh-133px)] flex items-center justify-center'>
            <div>
                <span className="loading loading-bars loading-xs"></span>
                <span className="loading loading-bars loading-sm"></span>
                <span className="loading loading-bars loading-md"></span>
                <span className="loading loading-bars loading-lg"></span>
                <span className="loading loading-bars loading-xl"></span>
            </div>
        </div>
    )
}
