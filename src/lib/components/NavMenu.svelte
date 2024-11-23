<script lang="ts">
   import { browser } from "$app/environment";
   import gsap from "gsap";
   import { onMount } from "svelte";
   import { CustomEase } from "gsap/dist/CustomEase";
   import Curve from "./shared/Curve.svelte";
   import Link from "./shared/Link.svelte";
   import Magnetic from "./shared/Magnetic.svelte";

   export let openned = false;
   const navRefs = [
      {
         name: "Home",
         href: "/",
      },
      {
         name: "Work",
         href: "/work",
      },
      {
         name: "About",
         href: "/about",
      },
      {
         name: "Contact",
         href: "/contact",
      },
   ];
   let menuTween: GSAPTween;
   let linkTween: GSAPTween;
   onMount(() => {
      if (browser) {
         gsap.registerPlugin(CustomEase);
         CustomEase.create("someEase", ".76,.1,.24,1");
         menuTween = gsap.to(".nav-menu", {
            duration: 0.8,
            xPercent: 0,
            x: 0,
            ease: "someEase",
         });
         linkTween = gsap.from(".nav-menu-item", {
            duration: 0.8,
            x: "80px",
            ease: "someEase",
            stagger: 0.1,
         });
      }
   });

   $: {
      if (menuTween && openned && browser) {
         menuTween.play();
         linkTween.play();
      } else if (menuTween && browser) {
         menuTween.reverse();
         linkTween.reverse();
      }
   }
</script>

<!-- class:hidden={!openned} -->
<div
   class="fixed h-[100dvh] text-white bg-Background z-50 nav-menu right-0 top-0 translate-x-[calc(100%+100px)]"
>
   <Curve bind:openned />
   <div class="p-[100px] flex justify-between flex-col h-full">
      <nav class="flex flex-col gap-3 text-[56px] mt-20">
         <div class="border-b-[1px] border-Secondary mb-10">
            <p class="uppercase text-[11px] text-Secondary my-[11px]">
               Navigation
            </p>
         </div>

         {#each navRefs as item, index (item)}
            <div>
               <Magnetic classes="inline-block">
                  <div class="nav-menu-item relative inline-block">
                     <div
                        class="absolute -left-[30px] top-1/2 -translate-y-1/2 -translate-x-1/2 w-0 h-0 bg-white rounded-full [transition:all_0.3s_cubic-bezier(0.76,0,0.24,1)]"
                     ></div>
                     <a
                        class="no-underline text-white font-light"
                        href={item.href}
                     >
                        {item.name}
                     </a>
                  </div>
               </Magnetic>
            </div>
         {/each}
      </nav>
      <div class="flex justify-between gap-10 text-[12px]">
         <Magnetic><Link>Awwwards</Link></Magnetic>
         <Magnetic><Link>LinkedIn</Link></Magnetic>
         <Magnetic><Link>Dribble</Link></Magnetic>
         <Magnetic><Link>Instagram</Link></Magnetic>
      </div>
   </div>
</div>

<style>
   .nav-menu-item:hover div {
      width: 10px;
      height: 10px;
   }
</style>
