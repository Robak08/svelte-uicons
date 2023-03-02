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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M2 9.67A3.508 3.508 0 0 1 .05 5.89C.34 4.22 1.83 3 3.6 3h9.8c1.77 0 3.26 1.21 3.55 2.89.25 1.44-.4 2.81-1.54 3.55-.27.17-.41.49-.41.8V17c0 2.21-1.79 4-4 4H6c-2.21 0-4-1.79-4-4V9.67Zm21.95-3.78C23.66 4.22 22.17 3 20.4 3h-2.67c.6.71 1.02 1.58 1.19 2.55a5.56 5.56 0 0 1-1.92 5.2V17c0 1.54-.58 2.94-1.54 4H18c2.21 0 4-1.79 4-4V9.67c1.4-.66 2.22-2.18 1.95-3.78Z"/></svg>
  