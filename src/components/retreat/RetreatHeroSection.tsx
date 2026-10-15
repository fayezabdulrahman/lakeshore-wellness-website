import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowRight, Pause, Play } from "lucide-react";
import { retreat, retreatContent, retreatMedia } from "../../data/retreat";

export function RetreatHeroSection() {
  const content = retreatContent.hero;
  const videoRef = useRef<HTMLVideoElement>(null);
  const [autoplayEnabled, setAutoplayEnabled] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);
  const userStarted = useRef(false);
  const userPaused = useRef(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (
      navigator as Navigator & { connection?: { saveData?: boolean } }
    ).connection;
    const updatePreference = () => {
      const enabled = !preference.matches && !connection?.saveData;
      setAutoplayEnabled(enabled);
      if (!enabled) videoRef.current?.pause();
    };
    updatePreference();

    if (preference.addEventListener) {
      preference.addEventListener("change", updatePreference);
      return () => preference.removeEventListener("change", updatePreference);
    }

    preference.addListener(updatePreference);
    return () => preference.removeListener(updatePreference);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || videoFailed) return;

    video.defaultMuted = true;
    video.muted = true;
    video.playsInline = true;
    video.autoplay = autoplayEnabled;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");

    const syncPlayback = () => {
      const playbackRequested = autoplayEnabled || userStarted.current;
      if (
        playbackRequested &&
        !document.hidden &&
        !userPaused.current
      ) {
        void video
          .play()
          .then(() => setPlaying(true))
          .catch(() => setPlaying(false));
      } else {
        video.pause();
      }
    };
    const pausePlayback = () => video.pause();

    syncPlayback();
    video.addEventListener("loadeddata", syncPlayback);
    video.addEventListener("canplay", syncPlayback);
    document.addEventListener("visibilitychange", syncPlayback);
    window.addEventListener("pageshow", syncPlayback);
    window.addEventListener("pagehide", pausePlayback);
    return () => {
      video.removeEventListener("loadeddata", syncPlayback);
      video.removeEventListener("canplay", syncPlayback);
      document.removeEventListener("visibilitychange", syncPlayback);
      window.removeEventListener("pageshow", syncPlayback);
      window.removeEventListener("pagehide", pausePlayback);
      video.pause();
    };
  }, [autoplayEnabled, videoFailed]);

  function toggleVideo() {
    const video = videoRef.current;
    if (!video) return;
    if (!video.paused) {
      userStarted.current = false;
      userPaused.current = true;
      video.pause();
    } else {
      userStarted.current = true;
      userPaused.current = false;
      video.muted = true;
      void video
        .play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    }
  }

  return (
    <section className="retreat-hero" aria-labelledby="retreat-heading">
      <img
        className="retreat-hero-backdrop retreat-hero-poster"
        src={retreatMedia.house.src}
        alt=""
        width={retreatMedia.house.width}
        height={retreatMedia.house.height}
        fetchPriority="high"
      />
      {!videoFailed && (
        <video
          className="retreat-hero-backdrop retreat-hero-video"
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
          onPlaying={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onError={() => setVideoFailed(true)}
        >
          <source src={retreatMedia.video} type="video/mp4" />
        </video>
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
          {!videoFailed && (
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
