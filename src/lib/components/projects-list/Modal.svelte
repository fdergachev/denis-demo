<script lang="ts">
   import gsap from "gsap";
   import { onMount } from "svelte";
   import { CustomEase } from "gsap/dist/CustomEase";

   export let projects: { title: string; src: string; color: string }[];
   export let modal = { active: false, index: 0 };

   let images: any = import.meta.glob("$lib/images/*.png", { eager: true });
   images = Object.values(images).map((image: any) => image.default);
   let modalBody: HTMLElement;
   let cursor: HTMLElement;
   let cursorLabel: HTMLElement;
   let tween: GSAPTween;
   let tweenCursor: GSAPTween;
   let tweenCursorLabel: GSAPTween;
   onMount(() => {
      gsap.registerPlugin(CustomEase);
      CustomEase.create("someEase", ".76,.1,.24,1");
      tween = gsap.from(modalBody, {
         scale: 0,
         duration: 0.4,
         ease: "someEase",
      });
      tweenCursor = gsap.from(cursor, {
         scale: 0,
         duration: 0.4,
         ease: "someEase",
      });
      tweenCursorLabel = gsap.from(cursorLabel, {
         scale: 0,
         duration: 0.4,
         ease: "someEase",
      });

      const moveContainerX = gsap.quickTo(modalBody, "left", {
         duration: 0.8,
         ease: "power3",
      });
      const moveContainerY = gsap.quickTo(modalBody, "top", {
         duration: 0.8,
         ease: "power3",
      });
      const moveCursorX = gsap.quickTo(cursor, "left", {
         duration: 0.5,
         ease: "power3",
      });
      const moveCursorY = gsap.quickTo(cursor, "top", {
         duration: 0.5,
         ease: "power3",
      });
      const moveCursorLabelX = gsap.quickTo(cursorLabel, "left", {
         duration: 0.45,
         ease: "power3",
      });
      const moveCursorLabelY = gsap.quickTo(cursorLabel, "top", {
         duration: 0.45,
         ease: "power3",
      });
      window.addEventListener("mousemove", (e) => {
         moveContainerX(e.pageX);
         moveContainerY(e.pageY);
         moveCursorX(e.pageX);
         moveCursorY(e.pageY);
         moveCursorLabelX(e.pageX);
         moveCursorLabelY(e.pageY);
      });
   });
   $: {
      if (tween && modal.active) {
         tween.play();
         tweenCursor.play();
         tweenCursorLabel.play();
      } else if (tween) {
         tween.reverse();
         tweenCursor.reverse();
         tweenCursorLabel.reverse();
      }
   }
</script>

<div>
   <div
      bind:this={modalBody}
      class="absolute w-[400px] h-[350px] top-1/2 left-1/2 overflow-hidden flex items-center justify-center -translate-x-1/2 -translate-y-1/2 pointer-events-none"
   >
      <!-- transalte here -->
      <div
         class="absolute w-full h-full [transition:top_0.5s_cubic-bezier(0.76,0,0.24,1)]"
         style={`top: ${modal.index * -100}%`}
      >
         {#each projects as project, index (project.title)}
            <div
               style:background={project.color}
               class="relative h-full flex items-center justify-center"
            >
               <!-- TODO: finish this -->
               <img src={images[index]} alt="" class="w-[300px] h-auto" />
            </div>
         {/each}
      </div>
   </div>
   <div
      bind:this={cursor}
      class="w-20 h-20 bg-Accent rounded-full -translate-x-1/2 -translate-y-1/2 absolute pointer-events-none"
   ></div>
   <div
      bind:this={cursorLabel}
      class="text-white w-20 h-20 flex items-center bg-transparent -translate-x-1/2 -translate-y-1/2 justify-center rounded-full absolute pointer-events-none"
   >
      View
   </div>
</div>
