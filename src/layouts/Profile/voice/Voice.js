import React, { useState, useRef, useEffect } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh, faVolumeMute } from "@fortawesome/free-solid-svg-icons";
import styles from "./Voice.module.scss";

const cx = classNames.bind(styles);

function Voice({ datas }) {
  const [isPlaying, setIsPlaying] = useState(null);
  const audioRefs = useRef({});

  const handlePlay = (index, src) => {
    // Pause currently playing audio if it's not the same index
    if (isPlaying !== null && isPlaying !== index) {
      audioRefs.current[isPlaying]?.pause();
      audioRefs.current[isPlaying].currentTime = 0;
    }

    // If there's an existing audio object, use it; otherwise, create a new one
    const audio = audioRefs.current[index] || new Audio(src);
    audioRefs.current[index] = audio;

    audio.play();
    setIsPlaying(index);

    // On audio end, reset isPlaying state
    audio.onended = () => {
      setIsPlaying(null);
    };
  };

  // Cleanup audio references on component unmount
  useEffect(() => {
    return () => {
      Object.values(audioRefs.current).forEach(audio => audio.pause());
    };
  }, []);

  return (
    <div className={cx("voice-wrap")}>
      {datas?.map((content, index) => (
        <div key={index} className={cx("voice-item")}>
          <h3 className={cx("voice-title")}>{content.title}</h3>
          {content.subTitle && (
            <h4 className={cx("voice-sub-title")}>{content.subTitle}</h4>
          )}
          <div className={cx("voice-content")}>
            {content.voice ? (
              <>
                <FontAwesomeIcon
                  className={cx("speaker-item", { playing: isPlaying === index })}
                  icon={faVolumeHigh}
                  onClick={() => handlePlay(index, content.voice)}
                />
                <p className={cx("voice-paragraph")}>{content.text}</p>
              </>
            ) : (
              <>
                <FontAwesomeIcon className={cx("mute-icon")} icon={faVolumeMute} />
                <p className={cx("voice-paragraph", "disabled")}>{content.text}</p>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Voice;
