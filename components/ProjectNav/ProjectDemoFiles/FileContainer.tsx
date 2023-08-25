import React from 'react';

const FileContainer = () => {
  return (
    <div className="w-full overflow-hidden sm:w-3/4 md:w-1/2 lg:w-1/3 mx-auto">
      <div className="relative aspect-w-16 aspect-h-9">
        <iframe
          className="absolute inset-0 w-full h-full"
          src="your-iframe-source-url"
          title="Responsive Iframe"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

export default FileContainer;
