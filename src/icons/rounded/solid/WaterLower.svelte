<script>
  export let size = "100%";
  export let strokeWidth = 0;
  let customClass = "";
  export { customClass as class };
  
  if (size !== "100%") {
    size = size.slice(-1) === 'x' 
    ? size.slice(0, size.length -1) + 'em'
    : parseInt(size) + 'px';
  }
  </script>
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M.332 17.978A4.185 4.185 0 0 0 6 17.774a4.334 4.334 0 0 0 6 0 4.334 4.334 0 0 0 6 0 4.185 4.185 0 0 0 5.668.2 1 1 0 1 0-1.335-1.489 2.2 2.2 0 0 1-3.39-.822 1.006 1.006 0 0 0-1.886 0 2.278 2.278 0 0 1-4.114 0 1.006 1.006 0 0 0-1.886 0 2.278 2.278 0 0 1-4.114 0 1.006 1.006 0 0 0-1.886 0 2.2 2.2 0 0 1-3.389.822 1 1 0 0 0-1.336 1.493Zm22 3.511a2.2 2.2 0 0 1-3.39-.822 1.006 1.006 0 0 0-1.886 0 2.278 2.278 0 0 1-4.114 0 1.006 1.006 0 0 0-1.886 0 2.278 2.278 0 0 1-4.114 0 1.006 1.006 0 0 0-1.886 0 2.2 2.2 0 0 1-3.389.822 1 1 0 0 0-1.335 1.489A4.185 4.185 0 0 0 6 22.774a4.334 4.334 0 0 0 6 0 4.334 4.334 0 0 0 6 0 4.185 4.185 0 0 0 5.668.2 1 1 0 1 0-1.335-1.489ZM8.3 8.708l3 3a1 1 0 0 0 1.414 0l3-3A1 1 0 0 0 14.3 7.293l-1.295 1.293V1a1 1 0 0 0-2 0v7.586l-1.3-1.293a1 1 0 0 0-1.414 1.415Z"/></svg>
  