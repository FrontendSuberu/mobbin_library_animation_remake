import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
  const libWrapper = document.querySelector(".library");
  let libText = document.querySelectorAll(".content");



  // scrolltrigger to pin the element to the viewport
  ScrollTrigger.create({
    trigger: libWrapper,
    start: "top top",
    end: "bottom 200px",
    pin: true,
    // pinSpacing: false,
    markers: true
  })

});
