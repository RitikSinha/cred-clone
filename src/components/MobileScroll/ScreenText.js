import React, { useRef, useEffect, useState } from "react";

const ScreenText = ({ screen, setCurrentImg, i }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const setItemVisible = (e) => {
    if (e[0]?.isIntersecting) {
      setIsVisible(!isVisible);
      setCurrentImg(i);
    }
  };

  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.6,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(setItemVisible, options);
    const curr = ref.current;
    if (curr) {
      observer.observe(curr);
    }

    return () => {
      if (curr) {
        observer.unobserve(curr);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`screen-text ${isVisible ? "text-visible" : ""}`} ref={ref}>
      <div className="screen-heading">{screen.heading}</div>
      <div className="mobile-mockup-wrapper only-mobile">
        <div className="mobile-mockup ">
          <div className="mobile-mockup-screen flex absolute-center">
            <img
              src={screen.mobile_img}
              className="mobile-screen-img slide-in-right "
              key={screen.mobile_img}
              alt="some"
            />
          </div>
        </div>
      </div>
      <div className="screen-description">{screen.description}</div>
    </div>
  );
};

export default ScreenText;
