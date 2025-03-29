# 📜 Luxury Watch Dial Face Landing Page – Scroll Animation Prompt

## 🎯 **Goal:**
Create a luxury watch dial face landing page with a high-end, modern aesthetic using smooth scroll animations similar to the Apple iPhone landing page. Use **Next.js**, **Tailwind CSS**, and **Framer Motion** (or **GSAP**) for the animations.

---

## ✅ **1. Hero Section Setup:**
- Create a full-screen **div** for the video section showcasing the watch dial face.
- Use a dark, gradient background to give a premium feel.
- Center the video vertically and horizontally.
- Set the video container to `position: sticky` so it stays pinned while scrolling.

```jsx
<div className="relative overflow-hidden bg-gradient-to-b from-black to-gray-900">
  {/* Video Section */}
  <div className="video-section h-screen w-full">
    <motion.video
      className="w-full h-full object-cover"
      autoPlay
      loop
      muted
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      src="/path-to-luxury-watch-video.mp4"
    />
  </div>
</div>
```

---

## ✅ **2. Parallax Scroll Animation:**
- Use **Framer Motion** or **GSAP** to adjust the `translateY` property of the video based on scroll position.
- Start with the video positioned slightly below the viewport and translate it upwards as the user scrolls.

```jsx
useEffect(() => {
  gsap.to(".video-section", {
    scrollTrigger: {
      trigger: ".video-section",
      start: "top top",
      end: "+=100%",
      pin: true,
      scrub: true,
    },
    y: "-50%",
    ease: "none",
  });
}, []);
```

---

## ✅ **3. Opacity + Scale Effect:**
- As the video comes into view, gradually increase opacity and scale up the size.

```jsx
<motion.video
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1, ease: "easeInOut" }}
  src="/path-to-luxury-watch-video.mp4"
/>
```

---

## ✅ **4. Dynamic Text Animation (Sync with Scroll):**
- Add accompanying text that fades in and translates as the video scrolls.
- Pin the text and fade it out as the scroll progresses.

```jsx
<motion.div
  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  <h2 className="text-4xl font-bold">Timeless Elegance</h2>
  <p className="text-lg mt-4">Crafted to Perfection</p>
</motion.div>
```

**GSAP Example:**
```jsx
useEffect(() => {
  gsap.fromTo(
    ".text-section",
    { y: 50, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: ".video-section",
        start: "top center",
        end: "bottom center",
        scrub: true,
      },
    }
  );
}, []);
```

---

## ✅ **5. Scroll Completion Transition:**
- When the video section ends, transition smoothly to the next section with a fade-out or slide-up effect.

```jsx
gsap.to(".video-section", {
  scrollTrigger: {
    trigger: ".video-section",
    start: "bottom center",
    end: "bottom top",
    scrub: true,
  },
  opacity: 0,
  y: -50,
});
```

---

## ✅ **6. Performance Optimization:**
- Use `will-change: transform, opacity` for GPU-accelerated rendering.
- Optimize video loading with `lazy loading`.
- Use the `next/image` component to manage image rendering efficiently.

---

## ✅ **7. Example Final Code Structure:**
```jsx
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const VideoSection = () => {
  useEffect(() => {
    gsap.to(".video-section", {
      scrollTrigger: {
        trigger: ".video-section",
        start: "top top",
        end: "+=200%",
        pin: true,
        scrub: true,
      },
      y: "-20%",
    });

    gsap.fromTo(
      ".text-section",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: ".video-section",
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Video */}
      <div className="video-section h-screen w-full bg-black">
        <motion.video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          src="/path-to-luxury-watch-video.mp4"
        />

        {/* Text Overlay */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold">Timeless Elegance</h2>
          <p className="text-lg mt-4">Crafted to Perfection</p>
        </motion.div>
      </div>
    </div>
  );
};

export default VideoSection;
```

---

## ✅ **Summary of Effects:**
✅ Sticky Video → Parallax Scroll  
✅ Fade + Scale Animation → On Scroll  
✅ Pinning Effect → Keeps Video Centered  
✅ Text Sync → Fades and Translates with Scroll  
✅ Smooth Exit Transition → Fade Out  

---

👉 **Would you like to adjust or refine any part?** 😎

