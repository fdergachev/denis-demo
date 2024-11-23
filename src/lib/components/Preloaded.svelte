<script lang="ts">
   import { browser } from "$app/environment";
   import { onDestroy, onMount } from "svelte";
   import { gsap } from "gsap";
   import { CustomEase } from "gsap/dist/CustomEase";

   let preloadRef: HTMLElement;
   let wordsRef: HTMLElement;
   let initialCurve: string;
   let targetCurve: string;
   let pathRef: SVGPathElement;
   const words = [
      "Hello",
      "Bonjour",
      "Ciao",
      "Olà",
      "やあ",
      "Hallå",
      "Guten tag",
      "Hallo",
   ];
   $: index = 0;
   $: {
      if (index < words.length - 1)
         setTimeout(
            () => {
               index++;
            },
            index == 0 ? 1000 : 150,
         );
   }

   export function unmountAnimn() {
      if (browser) {
         gsap.registerPlugin(CustomEase);
         CustomEase.create("someEase", ".76,.1,.24,1");
         return new Promise((resolve) => {
            gsap.to(preloadRef, {
               duration: 1,
               y: "-100%",
               ease: "someEase",
               onComplete: resolve,
            });
            gsap.to(pathRef, {
               attr: { d: targetCurve },
               duration: 1,
               ease: "someEase",
            });
         });
      }
   }
   onMount(() => {
      if (browser) {
         const width = window.innerWidth;
         const height = window.innerHeight;
         initialCurve = `M0 0 L${width} 0 L${width} ${height} Q${width / 2} ${height + 300} 0 ${height} L0 0`;
         targetCurve = `M0 0 L${width} 0 L${width} ${height} Q${width / 2} ${height} 0 ${height} L0 0`;
         gsap.to(wordsRef, {
            duration: 0.2,
            delay: 0.2,
            opacity: 1,
         });
      }
   });
</script>

<div
   bind:this={preloadRef}
   class="fixed w-[100vw] h-[100vh] bg-Background flex items-center justify-center text-center z-[52] text-white"
>
   <div bind:this={wordsRef} class="flex gap-2 items-center opacity-0 z-50">
      <div class="h-3 w-3 bg-white rounded-full"></div>
      <p class="text-4xl">{words[index]}</p>
   </div>
   <svg class="absolute left-0 top-0 w-full h-[calc(100%+300px)]">
      <path class="fill-Background" bind:this={pathRef} d={initialCurve} />
   </svg>
</div>
