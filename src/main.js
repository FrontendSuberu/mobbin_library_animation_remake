import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

document.addEventListener("DOMContentLoaded", function () {
  gsap.registerPlugin(ScrollTrigger);

  let libText = gsap.utils.toArray(".content");
  const total = libText.length;

  gsap.set(libText, { yPercent: 400 });

  ScrollTrigger.create({
    trigger: libText[0],
    start: "top 500px",
    endTrigger: libText[libText.length - 1],
    end: () => "+=" + libText.length * 150,
    markers: true,
    onUpdate: (self) => {
      if (self.isActive) {
        const p = self.progress; // 0 → 1 for entire scroll range
        const slice = 1 / total;

        sections.forEach((el, i) => {
          // map global progress into each element’s slice (0–1)
          let local = (p - i * slice) / slice;
          local = Math.min(Math.max(local, 0), 1); // clamp between 0–1

          gsap.set(el, {
            yPercent: 400 * (1 - local),
          });
        });
      }
    },
  });
});
