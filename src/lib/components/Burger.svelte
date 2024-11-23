<script>
   import Button from "./shared/Button.svelte";

   export let openned = false;
   export let node;
</script>

<div
   bind:this={node}
   on:click={() => (openned = !openned)}
   class="cursor-pointer m-5 right-0 fixed z-[51] scale-0 top-0"
>
   <Button
      classes="rounded-full  bg-Dark flex items-center justify-center w-20 h-20"
   >
      <div class="burger" class:active={openned}></div>
   </Button>
</div>

<style>
   .burger {
      width: 100%;
   }
   .burger::after,
   .burger::before {
      content: "";
      display: block;
      width: 40%;
      height: 1px;
      background-color: white;
      margin: auto;
      position: relative;
      transition: all 0.3s cubic-bezier(0.76, 0, 0.24, 1);
   }
   .burger::after {
      top: -5px;
   }
   .burger::before {
      top: 5px;
   }
   .burger.active::after {
      top: -1px;
      transform: rotate(45deg);
   }
   .burger.active::before {
      top: 1px;
      transform: rotate(-45deg);
   }
</style>
