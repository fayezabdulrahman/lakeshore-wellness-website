import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowRight, Pause, Play } from "lucide-react";
import { retreat, retreatContent, retreatMedia } from "../../data/retreat";

export function RetreatHeroSection() {
  const content = retreatContent.hero;
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loadVideo, setLoadVideo] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const userPaused = useRef(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection;
    const updatePreference = () => {
      const enabled = !preference.matches && !connection?.saveData;
      setLoadVideo(enabled);
      if (!enabled) videoRef.current?.pause();
    };
    updatePreference();
    preference.addEventListener("change", updatePreference);
    return () => preference.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!loadVideo || !video || videoFailed) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !userPaused.current) {
        void video.play().catch(() => setPlaying(false));
      } else {
        video.pause();
      }
    });
    observer.observe(video);
    return () => {
      observer.disconnect();
      video.pause();
    };
  }, [loadVideo, videoFailed]);

  function toggleVideo() {
    const video = videoRef.current;
    if (!video) return;
    if (playing) {
      userPaused.current = true;
      video.pause();
    } else {
      userPaused.current = false;
      void video.play().catch(() => setPlaying(false));
    }
  }

  return (
    <section className="retreat-hero" aria-labelledby="retreat-heading">
      <img
        className="retreat-hero-backdrop"
        src={retreatMedia.house.src}
        alt=""
        width={retreatMedia.house.width}
        height={retreatMedia.house.height}
        fetchPriority="high"
      />
      {loadVideo && !videoFailed && (
        <video
          className="retreat-hero-backdrop"
          ref={videoRef}
          src={retreatMedia.video}
          poster={retreatMedia.house.src}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onError={() => setVideoFailed(true)}
        />
      )}
      <div className="shell retreat-hero-content">
        <p className="eyebrow motion-intro">{retreat.name}</p>
        <h1 className="motion-intro" id="retreat-heading">
          {content.heading}
          <br />
          <em>{content.headingEmphasis}</em>
        </h1>
        <p className="retreat-hero-lead motion-intro">
          {content.description}
        </p>
        <div className="retreat-hero-actions motion-intro">
          <a className="button retreat-button-light" href="#retreat-enquiry">
            {content.enquiryLabel} <ArrowRight size={17} />
          </a>
          <a className="text-link" href="#retreat-programme">
            {content.programmeLabel} <ArrowDown size={16} />
          </a>
        </div>
        <div className="retreat-hero-foot">
          <span>{content.caption}</span>
          {loadVideo && !videoFailed && (
            <button
              className="retreat-video-toggle"
              type="button"
              onClick={toggleVideo}
              aria-label={
                playing
                  ? content.videoControls.pauseAccessibleLabel
                  : content.videoControls.playAccessibleLabel
              }
            >
              {playing ? <Pause size={16} /> : <Play size={16} />}
              <span>
                {playing
                  ? content.videoControls.pauseLabel
                  : content.videoControls.playLabel}
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
