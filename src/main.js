import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  let libText = gsap.utils.toArray(".content");
  const container = document.querySelector(".library")
  const total = libText.length;

  gsap.set(libText, {
    yPercent: 400,
    opacity: 0,
  });

  ScrollTrigger.create({
    trigger: container,
    start: "top top",
    end: "bottom bottom",
    // end: () => "+=" + libText.length * 150,
    // toggleActions: "play none play reverse",
    // markers: true,
    onUpdate: (self) => {
      if (self.isActive) {
        const p = self.progress; // 0 → 1 for entire scroll range
        const slice = 1 / total; // portion of progress for each element

        libText.forEach((el, i) => {
          let local = (p - i * slice) / slice;
          local = Math.min(Math.max(local, 0), 1); // clamp between 0–1

          gsap.set(el, {
            opacity: local,
            yPercent: 400 * (1 - local),
          });
        });
      }
    },

      // ✅ Force it to stay at the final frame when scrolled to end
    onLeave: () => {
      gsap.set(libText, { yPercent: 0, opacity: 1 });
    },
  });
});
