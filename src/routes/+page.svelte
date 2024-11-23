<script lang="ts">
   import { browser } from "$app/environment";
   import Header from "$lib/components/Header.svelte";
   import ScrollTrigger from "gsap/dist/ScrollTrigger";
   import gsap from "gsap";
   import { onMount } from "svelte";
   import ProjectList from "$lib/components/projects-list/ProjectList.svelte";
   import Description from "$lib/components/Description.svelte";
   import Slider from "$lib/components/Slider.svelte";
   import SphereShade from "$lib/components/SphereShade.svelte";
   import Footer from "$lib/components/Footer.svelte";
   import Preloaded from "$lib/components/Preloaded.svelte";

   let scrollY = 0;
   let tween: GSAPTween;
   let xPercent = 0;
   let direction = -1;
   let isLoading = true;
   let unmountAnimn: any;
   setTimeout(async () => {
      if (browser) {
         document.body.style.cursor = "default";
         window.scrollTo(0, 0);
      }
      await unmountAnimn();
      isLoading = false;
   }, 2000);
   onMount(() => {
      if (browser) {
         gsap.registerPlugin(ScrollTrigger);

         gsap.to(".marquee-body", {
            scrollTrigger: {
               start: 0,
               end: window.innerHeight,
               trigger: document.documentElement,
               scrub: 0.25,
               onUpdate: (e: any) => {
                  direction = e.direction * -1;
               },
            },
            x: "-=300px",
         });

         let marqueeItems = gsap.utils.toArray(".marquee-item");
         const animation = () => {
            if (xPercent <= -100) {
               xPercent = 0;
            }
            if (xPercent > 0) {
               xPercent = -100;
            }
            gsap.set(marqueeItems[0]!, { xPercent: xPercent });
            gsap.set(marqueeItems[1]!, { xPercent: xPercent });
            xPercent += 0.1 * direction;
            requestAnimationFrame(animation);
         };
         requestAnimationFrame(animation);

         // basically the same thing as above

         // gsap.registerPlugin(ScrollTrigger);
         // tween = gsap.to(".marquee-item", {
         //    x: "-100%",
         //    duration: 8,
         //    repeat: -1,
         //    ease: "none",
         //    scrollTrigger: {
         //       trigger: ".marquee-item",
         //       onUpdate: (self) => {
         //          if (self.direction === -1) {
         //             tween.timeScale(1); // Scroll up, reverse animation
         //          } else {
         //             tween.timeScale(-1); // Scroll down, play animation normally
         //          }
         //       },
         //    },
         //    onReverseComplete: function () {
         //       //just jump ahead 100 iterations (or whatever).
         //       tween.totalTime(tween.duration() * 1000).resume();
         //    },
         // });
         // tween.play();
      }
   });
</script>

<svelte:window bind:scrollY />
<div class="overflow-hidden">
   {#if isLoading}
      <Preloaded bind:unmountAnimn />
   {/if}
   <div
      class="h-[100dvh] w-[100vw] overflow-x-hidden main-back text-white flex items-center justify-end relative"
   >
      <Header />
      <div data-scroll data-scroll-speed={"0.08"}>
         <div class="h-6 w-6 mb-24">
            <svg
               class="w-full h-full object-cover"
               width="9"
               height="9"
               viewBox="0 0 9 9"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
               ><path
                  d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
                  fill="white"
               ></path></svg
            >
         </div>

         <p class="text-3xl mr-[500px]">
            Freelance <br />
            Designer & Developer
         </p>
      </div>
      <div
         class="absolute bottom-10 left-0 flex items-center text-[230px] font-medium flex-nowrap marquee-body"
      >
         <p class="marquee-item whitespace-nowrap">
            Frontend Developer -&nbsp;
         </p>
         <p class="marquee-item whitespace-nowrap">
            Frontend Developer -&nbsp;
         </p>
      </div>
   </div>
   <div class="my-40">
      <Description />
   </div>
   <div class="my-40">
      <ProjectList />
   </div>

   <Slider />
   <Footer />
</div>

<style>
   .main-back {
      background-image: url("$lib/images/main6.jpg");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
   }
</style>
