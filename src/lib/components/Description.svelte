<script lang="ts">
   import { browser } from "$app/environment";
   import gsap from "gsap";
   import { onMount } from "svelte";
   import ScrollTrigger from "gsap/dist/ScrollTrigger";
   import { CustomEase } from "gsap/dist/CustomEase";
   import Button from "./shared/Button.svelte";

   let phrase =
      "Helping brands to standout in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.";

   onMount(() => {
      if (browser) {
         gsap.registerPlugin(ScrollTrigger, CustomEase);
         CustomEase.create("someEase", ".76,.1,.24,1");
         let wordAnim = gsap.from(".desc-word", {
            duration: 0.5,
            y: 100,
            opacity: 0,
            stagger: 0.02,
            ease: "someEase",
         });

         gsap.from(".desc-container", {
            scrollTrigger: {
               trigger: ".desc-container",
               start: "top bottom",

               onEnter: () => {
                  wordAnim.play();
               },
               onLeaveBack: () => {
                  wordAnim.progress(0);
               },
            },
         });
      }
   });
</script>

<div
   class="px-[clamp(2.5em,8vw,8em)] mx-auto max-w-[100em] flex gap-12 justify-between relative"
>
   <p class="text-4xl leading-[1.3] gap-2 desc-container">
      {#each phrase.split(" ") as word}
         <span class="mr-[10px] inline-block overflow-hidden relative">
            <span class="desc-word block">
               {word}
            </span>
         </span>
      {/each}
   </p>
   <p class="text-lg w-4/5">
      The combination of my passion for design, code & interaction positions me
      in a unique place in the web design world.
   </p>
   <div
      data-scroll
      data-scroll-speed={"0.1"}
      class=" absolute top-[50%] right-[clamp(2.5em,8vw,8em)]
      "
   >
      <Button
         classes="w-[180px] h-[180px] flex items-center justify-center bg-Background rounded-full text-white"
      >
         <p class="text-center">About me</p>
      </Button>
   </div>
</div>
