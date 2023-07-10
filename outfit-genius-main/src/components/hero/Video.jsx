import BgVideo from '../../assets/BackgroundVideo.mp4';

export default function Video() {
  return (
    <div id='video-main'>
    <video src={BgVideo} autoPlay loop muted id='video'/>
    </div>
  );
}
