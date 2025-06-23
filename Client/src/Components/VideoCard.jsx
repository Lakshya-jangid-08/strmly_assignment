import React from 'react'

function VideoCard({ data }) {
  if (!data) return null;

  return (
    <div className="bg-white rounded-xl shadow-md p-4 my-4 max-w-xl">
      <div className="mb-2 font-bold text-lg">{data.title}</div>
      <div className="mb-2 text-gray-700 text-sm">{data.description}</div>
      <div className="mb-2">
        <h1 className='text-md font-semibold text-gray-800'>
          {data.creator?.name}
        </h1>
        <h3 className='text-xs text-gray-600'>
          {data.creator?.email}
        </h3>
      </div>
      <div className="mb-2 text-xs text-gray-500">
        Uploaded: {data.uploadDate}
      </div>
      <div className="bg-gray-200 rounded p-2 text-center text-gray-600 text-xs">
        Video URL: <a href={data.videoUrl} className='text-sky-500 underline'>Link</a> 
      </div>
    </div>
  )
}

export default VideoCard