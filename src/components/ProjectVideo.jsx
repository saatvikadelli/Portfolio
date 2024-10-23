const LoopingVideo = ({ src }) => {
    return (
      <div className="w-full rounded-lg overflow-hidden shadow-lg">
        <video 
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={src} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  };
  
  export default LoopingVideo;