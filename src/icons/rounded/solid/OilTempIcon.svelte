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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M8 14a4 4 0 0 1 3-3.858V3a3 3 0 0 1 3-3h2a1 1 0 0 1 0 2h-2a1 1 0 0 0-1 1v1h3a1 1 0 0 1 0 2h-3v4.142A3.993 3.993 0 1 1 8 14Zm14.332 7.489a2.2 2.2 0 0 1-3.39-.822 1 1 0 0 0-1.884 0 2.279 2.279 0 0 1-4.116 0 1 1 0 0 0-1.884 0 2.279 2.279 0 0 1-4.116 0 1 1 0 0 0-1.884 0 2.2 2.2 0 0 1-3.39.822 1 1 0 0 0-1.336 1.489A4.185 4.185 0 0 0 6 22.774a4.334 4.334 0 0 0 6 0 4.334 4.334 0 0 0 6 0 4.185 4.185 0 0 0 5.668.2 1 1 0 0 0-1.336-1.489ZM21 18a3.985 3.985 0 0 0 2.668-1.022 1 1 0 0 0-1.336-1.489 2.2 2.2 0 0 1-2.73.032 1 1 0 0 0-1.2 1.6A4.348 4.348 0 0 0 21 18ZM3 18a4.354 4.354 0 0 0 2.6-.881 1 1 0 0 0-1.2-1.6 2.2 2.2 0 0 1-2.73-.032 1 1 0 0 0-1.338 1.491A3.985 3.985 0 0 0 3 18Z"/></svg>
  