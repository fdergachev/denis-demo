<script lang="ts">
   import { onMount } from "svelte";
   import Burger from "./Burger.svelte";
   import NavMenu from "./NavMenu.svelte";
   import { gsap } from "gsap";
   import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
   import { browser } from "$app/environment";
   import Magnetic from "./shared/Magnetic.svelte";
   let openned = false;

   const navRefs = [
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
   let burgerRef: HTMLElement;
   onMount(() => {
      if (browser) {
         gsap.registerPlugin(ScrollTrigger);
         gsap.to(burgerRef, {
            scrollTrigger: {
               trigger: document.documentElement,
               start: 0,
               end: window.innerHeight,
               onLeave: () => {
                  gsap.to(burgerRef, {
                     scale: 1,
                     duration: 0.25,
                     ease: "power1.out",
                  });
               },
               onEnterBack: () => {
                  if (openned) openned = !openned;
                  gsap.to(burgerRef, {
                     scale: 0,
                     duration: 0.25,
                     ease: "power1.out",
                  });
               },
            },
         });
      }
   });
</script>

<nav
   class="absolute top-0 left-0 flex justify-between text-white pt-8 px-12 w-full"
>
   <a class="flex items-center main-link">
      <p class="copy">©</p>
      <div
         class="flex overflow-hidden whitespace-nowrap relative name ml-[5px]"
      >
         <p class="pl-[0.3em]">Coded by</p>
         <p class="pl-[0.3em]">Dennis</p>
         <p class="absolute left-[135px] pl-[0.3em]">Somesurname</p>
      </div>
   </a>
   <div class="flex">
      {#each navRefs as item, index (item)}
         <Magnetic>
            <div
               class="[&:hover>div]:scale-100 relative flex flex-col cursor-pointer"
            >
               <a class="p-4" href={item.href}>{item.name}</a>
               <div
                  class="w-[5px] h-[5px] absolute bg-white rounded-full top-[45px] left-1/2 -translate-x-1/2 scale-0 [transition:all_0.2s_cubic-bezier(0.76,0,0.24,1)]"
               ></div>
            </div>
         </Magnetic>
      {/each}
   </div>
</nav>
<Burger bind:node={burgerRef} bind:openned />
<NavMenu bind:openned />

<style>
   /* .copy {
      transform: rotate(360deg);
   } */
   .main-link {
      cursor: pointer;
      transition: all 0.5s cubic-bezier(0.76, 0, 0.24, 1);
   }
   .main-link .name {
      transition: all 0.5s cubic-bezier(0.76, 0, 0.24, 1);
   }
   p {
      transition: transform 0.5s cubic-bezier(0.76, 0, 0.24, 1);
   }
   .main-link:hover .copy {
      transform: rotate(360deg);
   }
   .main-link:hover .name {
      padding-right: 45px;
   }
   .main-link:hover .name *:nth-child(1) {
      transform: translateX(-100%);
   }
   .main-link:hover .name *:nth-child(2) {
      transform: translateX(-80px);
   }
   .main-link:hover .name *:nth-child(3) {
      transform: translateX(-82px);
   }
</style>
