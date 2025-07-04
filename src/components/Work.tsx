import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "CraftMyCv",
    category: "Resume Builder",
    tools: "Python, Streamlit, SpaCy",
    image: "/images/project1.webp",
    video: "craftmycv.mp4",
    link: "https://craftmycvv.streamlit.app/",
  },
  {
    title: "Freelancing Website",
    category: "Photo Editing Marketplace",
    tools: "Node.js, MongoDB, Stripe",
    image: "/images/picdits.png",
    video: "picdits.mp4",
    link: "",
  },
  {
    title: "Event Management Platform",
    category: "Event Booking Platform",
    tools: "React, Express, MongoDB",
    image: "/images/eventwebsite.png",
    link: "",
  },
];

const Work = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  useLayoutEffect(() => {
    let resizeTimeout: number | undefined;

    function setTranslateX() {
      const boxes = document.getElementsByClassName("work-box");
      const container = document.querySelector(".work-container");
      if (!boxes.length || !container) return 0;
      const rectLeft = container.getBoundingClientRect().left;
      const boxRect = boxes[0].getBoundingClientRect();
      const parentWidth = boxes[0].parentElement?.getBoundingClientRect().width || 0;
      const padding = parseInt(window.getComputedStyle(boxes[0]).padding || "0") / 2;
      return boxRect.width * boxes.length - (rectLeft + parentWidth) + padding;
    }

    function createTimeline() {
  const translateX = setTranslateX();
  if (timelineRef.current) {
    timelineRef.current.scrollTrigger?.kill();
    timelineRef.current.kill();
  }
  timelineRef.current = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: "bottom top",
      scrub: 1.2, // Increased for smoother, more eased scroll
      pin: true,
      pinType: !ScrollTrigger.isTouch ? "transform" : "fixed",
      id: "work",
      anticipatePin: 1, // Helps with pinning smoothness
    },
  });
  timelineRef.current.to(".work-flex", {
    x: -translateX,
    ease: "power3.inOut", // Smoother easing
    force3D: true,        // Hardware acceleration
  });
}

    // Wait for images to load before calculating
    // ...existing code...
const images = document.querySelectorAll(".work-box img");
let loaded = 0;
const onLoad = () => {
  loaded++;
  if (loaded === images.length) createTimeline();
};
images.forEach((img) => {
  const image = img as HTMLImageElement;
  if (image.complete) loaded++;
  else image.addEventListener("load", onLoad);
});
if (loaded === images.length) createTimeline();

function handleResize() {
  clearTimeout(resizeTimeout);
  resizeTimeout = window.setTimeout(() => {
    createTimeline();
  }, 150);
}
window.addEventListener("resize", handleResize);

return () => {
  window.removeEventListener("resize", handleResize);
  images.forEach((img) => {
    (img as HTMLImageElement).removeEventListener("load", onLoad);
  });
  if (timelineRef.current) {
    timelineRef.current.scrollTrigger?.kill();
    timelineRef.current.kill();
  }
};
// ...existing code...
  }, []);

  return (
    <div className="work-section" id="work" ref={sectionRef}>
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex" style={{ willChange: "transform" }}>
          {projects.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and Features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage
                image={project.image}
                alt={project.title}
                video={project.video}
                link={project.link}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
