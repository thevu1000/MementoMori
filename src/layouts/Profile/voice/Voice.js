import React, { useState, useRef } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh, faVolumeMute } from "@fortawesome/free-solid-svg-icons";
import styles from "./Voice.module.scss";

const cx = classNames.bind(styles);

function Voice({ datas }) {
  const [isPlaying, setIsPlaying] = useState(null);
  const audioRefs = useRef([]);

  const handlePlay = (index, src) => {
    if (audioRefs.current[index]) {
      audioRefs.current[index].pause();
      audioRefs.current[index].currentTime = 0;
    }

    const audio = new Audio(src);
    audioRefs.current[index] = audio;

    audio.play();
    setIsPlaying(index);

    audio.onended = () => {
      setIsPlaying(null);
    };
  };


  return (
    <div className={cx("voice-wrap")}>
      {datas &&
        datas.map((content, index) => (
          <div key={index} className={cx("voice-item")}>
            <h3 className={cx("voice-title")}>{content.title}</h3>
            {content.subTitle && (
              <h4 className={cx("voice-sub-title")}>{content.subTitle}</h4>
            )}
            <div className={cx("voice-content")}>
              {content.voice ? (
                <>
                  <FontAwesomeIcon
                    className={cx("speaker-item", {
                      playing: isPlaying === index,
                    })}
                    icon={faVolumeHigh}
                    onClick={() => handlePlay(index, content.voice)}
                  />
                  <p className={cx("voice-paragraph")}>{content.text}</p>

                </>
              ) : (
                <>
                  <FontAwesomeIcon
                    className={cx("mute-icon")}
                    icon={faVolumeMute}
                  />
                  <p className={cx("voice-paragraph", "disabled")}>
                    {content.text}
                  </p>
                </>
              )}
            </div>
          </div>
        ))}
    </div>
  );
}

export default Voice;
