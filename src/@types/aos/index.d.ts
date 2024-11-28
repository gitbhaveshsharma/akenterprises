declare module 'aos' {
  interface AOSOptions {
    offset?: number; // Offset from the original trigger point in px
    duration?: number; // Values from 0 to 3000, with step 50ms
    easing?: string; // Default easing for AOS animations
    delay?: number; // Delay animation for each element in ms
    once?: boolean; // Whether animation should happen only once
    mirror?: boolean; // Whether elements should animate out while scrolling past them
    anchorPlacement?: string; // Anchor placement (e.g., 'top-bottom', 'center-center', etc.)
  }

  interface AOS {
    init: (options?: AOSOptions) => void;
    refresh: () => void;
    refreshHard: () => void;
  }

  const AOS: AOS;
  export default AOS;
}
