import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export const useScroll = () => {
  const controls = useAnimation();
  const [element, view] = useInView({ threshold: 0.6 });
  if (view) {
    controls.start("visible");
  }
  return [element, controls];
};

export const slide = {
  hidden: {
    x: "100%",
  },
  visible: {
    x: "0%",
    transition: {
      delay: 1,
      duration: 0.5,
    },
  },
};
export const nothing = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 0.1,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

export const fadeRight = {
  hidden: {
    opacity: 0,
    x: "-20%",
  },
  visible: {
    opacity: 1,
    x: "0%",
    transition: {
      duration: 1,
    },
  },
};

export const fadeIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 0.5,
      when: "beforeChildren",
    },
  },
};

export const slideLeft = {
  hidden: {
    x: "0%",
  },
  visible: {
    x: "-100%",
    transition: {
      duration: 0.5,
      type: "tween",
    },
  },
};

export const burgerLine1 = {
  hidden: {
    rotate: "0deg",
  },
  visible: {
    rotate: "45deg",
    y: "10px",
    transition: {
      duration: 0.1,
      type: "tween",
    },
  },
};

export const burgerLine2 = {
  visible: {
    width: "0px",
    transition: {
      duration: 0.1,
      type: "tween",
    },
  },
};

export const burgerLine3 = {
  hidden: {
    rotate: "0deg",
  },
  visible: {
    rotate: "-45deg",
    y: "-10px",
    transition: {
      duration: 0.1,
      type: "tween",
    },
  },
};

export const navSlide = {
  visible: {
    width: "50vw",
    transition: {
      duration: 0.5,
    },
  },
};

export const projectFade = {
  hidden: {
    x: "-100%",
  },
  visible: {
    x: "0%",
    transition: {
      duration: 0.25,
    },
  },
};

export const line = {
  hidden: {
    x: "-100%",
  },
  visible: {
    x: "0%",
    transition: {
      duration: 0.75,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
};

export function swipe(value) {
  let animation = {
    hidden: {
      x: "-100%",
    },
    visible: {
      x: `-${value}%`,
      transition: {
        duration: 0.5,
      },
    },
  };
  return animation;
}

export const skillColor = {
  hidden: {
    color: "#4830e6",
  },
  visible: {
    color: "white",
    transition: {},
  },
};

export const arrow = {
  hidden: {
    y: "0%",
  },
  visible: {
    y: "200%",
    transition: {
      duration: 1,
      delay: 3,
      yoyo: Infinity,
      type: "tween",
    },
  },
};
