let oldScroll = 0;

export function scrollToTop(currentScroll: number): boolean {
   let scrollTop = currentScroll < oldScroll;
   oldScroll = currentScroll;
   return scrollTop;
}