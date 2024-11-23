<script lang="ts">
   import { twMerge } from "tailwind-merge";
   export let classList: string = "";
   export let dark: boolean = false;
</script>

<button
   class={twMerge(
      "rounded-full py-4 px-16 border border-Background",
      classList,
   )}
   style="border-color: {dark ? 'white' : ''}; color: {dark ? 'white' : ''}"
>
   <p class="my-4">
      <slot></slot>
   </p>
</button>
