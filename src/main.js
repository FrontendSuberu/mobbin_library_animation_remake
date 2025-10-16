import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  let libText = gsap.utils.toArray(".content");
  let libTexts = document.querySelectorAll(".content");
  const total = libText.length;

  gsap.from(libText, {
    yPercent: 400,
    opacity: 0,
  });

  ScrollTrigger.create({
    trigger: libText[0],
    start: "120px 500px",
    end: () => "+=" + libText.length * 150,
    toggleActions: "play none play reverse",
    markers: true,
    onUpdate: (self) => {
      if (self.isActive) {
        const p = self.progress; // 0 → 1 for entire scroll range
        const slice = 1 / total; // portion of progress for each element

        libTexts.forEach((el, i) => {
          let local = (p - i * slice) / slice;
          local = Math.min(Math.max(local, 0), 1); // clamp between 0–1

          gsap.set(el, {
            opacity: local,
            yPercent: 400 * (1 - local),
          });
        });
      }
    },
  });
});
