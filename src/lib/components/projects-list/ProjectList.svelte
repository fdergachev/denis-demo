<script lang="ts">
   import Button from "../shared/Button.svelte";
   import OutlineButton from "../shared/OutlineButton.svelte";
   import Modal from "./Modal.svelte";
   import ProjectsListItem from "./ProjectsListItem.svelte";

   const projects: { title: string; src: string; color: string }[] = [
      {
         title: "C2 Montreal",
         src: "c2montreal.png",
         color: "#000000",
      },
      {
         title: "Office Studio",
         src: "officestudio.png",
         color: "#8C8C8C",
      },
      {
         title: "Locomotive",
         src: "locomotive.png",
         color: "#EFE8D3",
      },
      {
         title: "Silencio",
         src: "silencio.png",
         color: "#706D63",
      },
   ];
   let modal = { active: false, index: 0 };
</script>

<div
   class="px-[clamp(2.5em,8vw,8em)] mx-auto max-w-[100em] flex flex-col items-center"
>
   <div class="px-[clamp(2.5em,8vw,8em)] pb-[clamp(1.5em,4vw,2.5em)] w-full">
      <p class="text-[0.6em] uppercase text-Secondary tracking-wider text-left">
         Recent work
      </p>
   </div>

   {#each projects as project, index (project.title)}
      <ProjectsListItem projects={{ data: project, index }} bind:modal />
   {/each}
   <Modal {projects} bind:modal />
   <div class="mt-[100px]">
      <Button classes=" bg-transparent rounded-full">
         <OutlineButton classList="">More work</OutlineButton>
      </Button>
   </div>
</div>
