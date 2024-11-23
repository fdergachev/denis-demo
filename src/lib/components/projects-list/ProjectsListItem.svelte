<script lang="ts">
   export let projects: {
      data: { title: string; src: string; color: string };
      index: number;
   };
   export let modal = { active: false, index: 0 };
</script>

<a
   class="cursor-pointer w-full px-[clamp(2.5em,8vw,8em)] py-[50px] flex justify-between items-center border-t border-[rgb(201,201,201)] last-of-type:border-b item"
   on:mouseenter={() => ((modal.active = true), (modal.index = projects.index))}
   on:mouseleave={() => (
      (modal.active = false), (modal.index = projects.index)
   )}
>
   <h1 class="text-[calc(clamp(3.25em,7vw,8em)*.75)]">{projects.data.title}</h1>
   <p class="text-[1em]">Design & Development</p>
</a>

<style>
   .item:hover * {
      opacity: 0.33;
   }
   .item:hover h1 {
      transform: translateX(calc(-0.1 * clamp(2.5em, 8vw, 8em)));
   }
   .item:hover p {
      transform: translateX(calc(0.1 * clamp(2.5em, 8vw, 8em)));
   }
   .item,
   .item * {
      transition: all 0.3s cubic-bezier(0.7, 0, 0.3, 1); /*cubic-bezier(0.76, 0, 0.24, 1)*/
   }
</style>
