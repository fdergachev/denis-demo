<script lang="ts">
   import main6 from "$lib/images/main6.jpg";
   import { onMount } from "svelte";
   import Link from "./shared/Link.svelte";
   import OutlineButton from "./shared/OutlineButton.svelte";
   import { browser } from "$app/environment";
   import gsap from "gsap";
   import ScrollTrigger from "gsap/dist/ScrollTrigger";
   import { CustomEase } from "gsap/dist/CustomEase";
   import Button from "./shared/Button.svelte";
   import Magnetic from "./shared/Magnetic.svelte";

   let bodyRef: HTMLElement;
   let arrowRef: HTMLElement;
   let buttonRef: HTMLElement;
   let containerRef: HTMLElement;
   onMount(() => {
      if (browser) {
         gsap.registerPlugin(ScrollTrigger, CustomEase);
         CustomEase.create("someEase", ".76,.1,.24,1");
         gsap.from(arrowRef, {
            rotate: 45,
            scrollTrigger: {
               trigger: bodyRef,
               start: "top bottom",
               end: "bottom bottom",
               scrub: 1,
            },
         });
         gsap.from(buttonRef, {
            x: -200,
            scrollTrigger: {
               trigger: bodyRef,
               start: "top bottom",
               end: "bottom bottom",
               scrub: 1,
            },
         });
         gsap.from(containerRef, {
            translateY: "-500px",
            scrollTrigger: {
               trigger: bodyRef,
               start: "top bottom",
               end: "bottom bottom",
               scrub: 0,
            },
         });
      }
   });
</script>

<footer bind:this={bodyRef} class=" bg-BackgroundDark text-white">
   <div bind:this={containerRef}>
      <div class="mx-auto max-w-[100em] pt-[200px] px-[clamp(2.5em,8vw,8em)]">
         <div
            class="relative flex flex-col pb-[100px] border-b border-Secondary leading-[1.1]"
         >
            <span class="flex items-center">
               <div class="w-[100px] h-[100px] rounded-full overflow-hidden">
                  <img class="w-full h-full object-cover" src={main6} alt="" />
               </div>
               <h2 class="text-[5vw] ml-[.3em]">Let's work</h2>
            </span>
            <h2 class="text-[5vw]">together</h2>
            <div
               bind:this={buttonRef}
               class="absolute bottom-[-90px] right-[clamp(2.5em,8vw,8em)]"
            >
               <Button
                  classes="w-[180px] h-[180px] flex items-center justify-center bg-Accent rounded-full text-white "
                  darker
               >
                  <p class="text-center">Get in touch</p>
               </Button>
            </div>
            <div bind:this={arrowRef} class="absolute top-1/3 right-0">
               <svg
                  width="9"
                  height="9"
                  viewBox="0 0 9 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style="transform: scale(2) rotate(90deg);"
                  ><path
                     d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
                     fill="white"
                  >
                  </path>
               </svg>
            </div>
         </div>
         <div class=" flex gap-5 mt-[100px]">
            <Button classes="bg-transparent rounded-full">
               <OutlineButton dark>info@somemail.com</OutlineButton>
            </Button>
            <Button classes=" bg-transparent rounded-full">
               <OutlineButton dark>+386 123 456 78</OutlineButton>
            </Button>
         </div>
      </div>
      <div class="mt-[200px] mx-auto max-w-[110em] p-6 flex justify-between">
         <div class="flex gap-5">
            <div class="flex flex-col gap-4">
               <p class="text-[gray]">Version</p>
               <div>
                  <Link>2022 © Edition</Link>
               </div>
            </div>
            <div class="flex flex-col gap-4">
               <p class="text-[gray]">Time</p>
               <div>
                  <Link>11:49 PM GMT+2</Link>
               </div>
            </div>
         </div>
         <div class="flex flex-col gap-4">
            <p class="text-[gray]">socials</p>
            <div class="flex gap-5">
               <Magnetic><Link>Awwwards</Link></Magnetic>
               <Magnetic><Link>Instagram</Link></Magnetic>
               <Magnetic><Link>Dribble</Link></Magnetic>
               <Magnetic><Link>LinkedIn</Link></Magnetic>
            </div>
         </div>
      </div>
   </div>
</footer>
