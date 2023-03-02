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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M17.87 7.87c1.11-1.1 2.82-1.2 4.14-.11.65.54.97 1.39.97 2.23V19a3.99 3.99 0 0 1-4 3.99H10.1c-1.17 0-2.3-.61-2.81-1.66-.58-1.18-.36-2.52.56-3.45l1.47-1.47-7.44-7.5a3 3 0 0 1 0-4.24l2.83-2.83a3 3 0 0 1 4.24 0l7.45 7.5 1.47-1.48Z"/></svg>
  