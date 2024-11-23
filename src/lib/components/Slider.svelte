<script lang="ts">
   import { browser } from "$app/environment";
   import c2 from "$lib/images/c2.jpg";
   import decimal from "$lib/images/decimal.jpg";
   import funny from "$lib/images/funny.jpg";
   import google from "$lib/images/google.jpg";
   import maven from "$lib/images/maven.jpg";
   import panda from "$lib/images/panda.jpg";
   import powell from "$lib/images/powell.jpg";
   import wix from "$lib/images/wix.jpg";
   import gsap from "gsap";
   import { onMount } from "svelte";
   import ScrollTrigger from "gsap/dist/ScrollTrigger";
   import SphereShade from "./SphereShade.svelte";
   import CustomEase from "gsap/dist/CustomEase";

   const slider1 = [
      {
         color: "#e3e5e7",
         src: c2,
      },
      {
         color: "#d6d7dc",
         src: decimal,
      },
      {
         color: "#e3e3e3",
         src: funny,
      },
      {
         color: "#21242b",
         src: google,
      },
   ];

   const slider2 = [
      {
         color: "#d4e3ec",
         src: maven,
      },
      {
         color: "#e5e0e1",
         src: panda,
      },
      {
         color: "#d7d4cf",
         src: powell,
      },
      {
         color: "#e1dad6",
         src: wix,
      },
   ];

   let scroll1Ref: Element;
   let scroll2Ref: Element;
   let scrollBodyRef: Element;
   let sphereRef: any;

   onMount(() => {
      if (browser) {
         gsap.registerPlugin(ScrollTrigger, CustomEase);
         CustomEase.create("someEase", ".76,.1,.24,1");

         gsap.to(scroll1Ref, {
            x: "+=150px",
            scrollTrigger: {
               trigger: scrollBodyRef,
               start: "top bottom",
               end: "bottom top",
               scrub: 0.25,
            },
         });
         gsap.to(scroll2Ref, {
            x: "-=150px",
            scrollTrigger: {
               trigger: scrollBodyRef,
               start: "top bottom",
               end: "bottom top",
               scrub: 0.25,
            },
         });
         gsap.to(sphereRef, {
            height: 0,
            scrollTrigger: {
               trigger: scrollBodyRef,
               start: "top bottom",
               end: "+=200%",
               scrub: 1,
            },
            ease: "someEase",
         });
      }
   });
</script>

<div class="overflow-x-hidden bg-white z-20 relative pb-[100px]">
   <div bind:this={scrollBodyRef} class="flex flex-col gap-[3vw]">
      <div
         bind:this={scroll1Ref}
         class="flex gap-[3vw] w-[120vw] left-[-10vw] relative"
      >
         {#each slider1 as slide (slide.color)}
            <div
               class="w-1/4 h-[15vw] flex items-center justify-center"
               style="background-color: {slide.color}"
            >
               <div class="relative w-4/5 h-4/5">
                  <img
                     class="absolute left-0 top-0 w-full h-full object-cover"
                     src={slide.src}
                     alt="slide"
                  />
               </div>
            </div>
         {/each}
      </div>
      <div
         bind:this={scroll2Ref}
         class="flex gap-[3vw] w-[120vw] left-[-10vw] relative"
      >
         {#each slider2 as slide (slide.color)}
            <div
               class="w-1/4 h-[15vw] flex items-center justify-center"
               style="background-color: {slide.color}"
            >
               <div class="relative w-4/5 h-4/5">
                  <img
                     class="absolute left-0 top-0 w-full h-full object-cover"
                     src={slide.src}
                     alt="slide"
                  />
               </div>
            </div>
         {/each}
      </div>
   </div>
</div>

<div bind:this={sphereRef} class="relative h-[50px] z-20 bg-white">
   <div class="overflow-x-hidden w-full">
      <div
         class="absolute bg-white h-[1550%] w-[120%] left-[-10%] rounded-[0px_0px_50%_50%] [box-shadow:0px_60px_50px_rgba(0,0,0,0.75);] z-10"
      ></div>
   </div>
</div>

<!-- <SphereShade bind:body={sphereRef} /> -->
