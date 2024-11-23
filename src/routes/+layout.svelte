<script>
   import { browser } from "$app/environment";
   import LocomotiveScroll from "locomotive-scroll";
   import "../app.css";

   // import "locomotive-scroll/bundled/locomotive-scroll.css";
   if (browser) {
      /* Locomotive scroll instance */
      const locomotiveScroll = new LocomotiveScroll();
   }
</script>

<slot />
