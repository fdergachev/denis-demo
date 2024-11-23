<script lang="ts">
   import { twMerge } from "tailwind-merge";
   import gsap from "gsap";
   import { CustomEase } from "gsap/dist/CustomEase";
   import { onMount } from "svelte";
   import Magnetic from "./Magnetic.svelte";

   export let classes: string = "";
   export let darker: boolean = false;

   let circleRef: HTMLElement;
   let timeline: GSAPTimeline;
   let timeoutId: number;
   onMount(() => {
      gsap.registerPlugin(CustomEase);
      CustomEase.create("someEase", ".76,.1,.24,1");
      timeline = gsap.timeline({ paused: true });
      timeline.to(
         circleRef,
         {
            top: "-25%",
            width: "150%",
            duration: 0.4,
            ease: "power3.in",
         },
         "enter",
      );
      timeline.to(
         circleRef,
         {
            top: "-150%",
            width: "125%",
            duration: 0.25,
         },
         "exit",
      );
   });
   const handleMouseEnter = () => {
      if (timeoutId) {
         clearTimeout(timeoutId);
      }
      timeline.tweenFromTo("enter", "exit"); // from enters start time until exits start time
   };
   const handleMouseLeave = () => {
      timeoutId = setTimeout(() => {
         timeline.play();
      }, 200);
   };
</script>

<Magnetic>
   <div
      class={twMerge(
         "relative overflow-hidden cursor-pointer flex items-center justify-center",
         classes,
      )}
      on:mouseenter={handleMouseEnter}
      on:mouseleave={handleMouseLeave}
   >
      <div class="relative z-[10] w-full">
         <slot></slot>
      </div>

      <div
         bind:this={circleRef}
         class="absolute h-[150%] w-[100%] rounded-[50%] top-full bg-Accent"
         style={darker ? "background-color: rgb(51, 75, 211)" : ""}
      ></div>
   </div>
</Magnetic>
