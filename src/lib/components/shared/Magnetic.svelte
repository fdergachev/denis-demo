<script lang="ts">
   import { browser } from "$app/environment";
   import gsap from "gsap";
   import { onMount } from "svelte";

   export let classes: string = "";

   let magneticRef: HTMLElement;
   let xTo: GSAPTween;
   let yTo: GSAPTween;
   onMount(() => {
      if (browser) {
         xTo = gsap.quickTo(magneticRef, "x", {
            duration: 1,
            ease: "elastic.out(1, 0.3)",
         });
         yTo = gsap.quickTo(magneticRef, "y", {
            duration: 1,
            ease: "elastic.out(1, 0.3)",
         });
      }
   });
   const handleMouseMove = (event) => {
      event.preventDefault();
      const { clientX, clientY } = event;
      const { width, height, left, top } = magneticRef.getBoundingClientRect();

      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x);
      yTo(y);
   };
   const handleMouseLeave = (event) => {
      event.preventDefault();
      xTo(0);
      yTo(0);
   };
</script>

<div
   bind:this={magneticRef}
   on:mousemove={handleMouseMove}
   on:mouseleave={handleMouseLeave}
   class={classes}
>
   <slot></slot>
</div>
