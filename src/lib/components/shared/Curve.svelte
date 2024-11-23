<script lang="ts">
   import { browser } from "$app/environment";
   import { tweened } from "svelte/motion";
   import { gsap } from "gsap";
   import { onMount } from "svelte";
   import { CustomEase } from "gsap/dist/CustomEase";

   let initialPath: string;
   let targetPath: string;
   let curveTween: GSAPTween;
   export let openned = false;
   onMount(() => {
      if (browser) {
         CustomEase.create("someEase", ".76,.1,.24,1");
         curveTween = gsap.to(".path", {
            attr: { d: targetPath },
            duration: 0.8,
            ease: "someEase",
         });
      }
   });
   $: {
      if (curveTween && openned && browser) {
         curveTween.play();
      } else if (curveTween && browser) {
         curveTween.reverse();
      }
   }
   if (browser) {
      initialPath = `M100 0 L100 ${window.innerHeight} Q-100 ${window.innerHeight / 2} 100 0`;
      targetPath = `M100 0 L100 ${window.innerHeight} Q100 ${window.innerHeight / 2} 100 0`;
   }
</script>

<svg>
   <path class="path" d={initialPath}> </path>
</svg>

<style>
   svg {
      position: absolute;
      top: 0;
      left: -99px;
      width: 100px;
      height: 100%;
      stroke: none;
      fill: rgb(41, 41, 41);
   }
</style>
