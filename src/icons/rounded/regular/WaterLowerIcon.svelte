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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M21 24a4.375 4.375 0 0 1-3-1.226 4.334 4.334 0 0 1-6 0 4.334 4.334 0 0 1-6 0 4.184 4.184 0 0 1-5.668.2 1 1 0 0 1 1.336-1.489 2.2 2.2 0 0 0 3.387-.816 1.007 1.007 0 0 1 1.89 0 2.279 2.279 0 0 0 4.11 0 1.009 1.009 0 0 1 1.89 0 2.279 2.279 0 0 0 4.11 0 1.007 1.007 0 0 1 1.89 0 2.2 2.2 0 0 0 3.388.816 1 1 0 1 1 1.335 1.489A3.989 3.989 0 0 1 21 24ZM21 19a4.375 4.375 0 0 1-3-1.226 4.334 4.334 0 0 1-6 0 4.334 4.334 0 0 1-6 0 4.184 4.184 0 0 1-5.668.2 1 1 0 0 1 1.336-1.489 2.2 2.2 0 0 0 3.387-.816 1.007 1.007 0 0 1 1.89 0 2.279 2.279 0 0 0 4.11 0 1.006 1.006 0 0 1 1.89 0 2.279 2.279 0 0 0 4.11 0 1.009 1.009 0 0 1 1.89 0 2.2 2.2 0 0 0 3.388.816 1 1 0 1 1 1.335 1.489A3.989 3.989 0 0 1 21 19ZM8.3 8.708l3 3a1 1 0 0 0 1.414 0l3-3A1 1 0 0 0 14.3 7.293l-1.295 1.293V1a1 1 0 0 0-2 0v7.586l-1.3-1.293a1 1 0 0 0-1.414 1.415Z"/></svg>
  