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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M21.77 8.948a1.238 1.238 0 0 1-.7-1.7 3.239 3.239 0 0 0-4.315-4.316 1.239 1.239 0 0 1-1.7-.7 3.239 3.239 0 0 0-6.1 0 1.238 1.238 0 0 1-1.7.7 3.239 3.239 0 0 0-4.321 4.317 1.237 1.237 0 0 1-.7 1.7 3.24 3.24 0 0 0 0 6.1 1.238 1.238 0 0 1 .705 1.7 3.238 3.238 0 0 0 4.311 4.317 1.238 1.238 0 0 1 1.7.7 3.239 3.239 0 0 0 6.1 0 1.238 1.238 0 0 1 1.7-.7 3.239 3.239 0 0 0 4.316-4.315 1.239 1.239 0 0 1 .7-1.7 3.239 3.239 0 0 0 0-6.1Z"/></svg>
  