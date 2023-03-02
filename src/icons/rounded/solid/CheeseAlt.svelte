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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 11.51c0-.51-.07-1.02-.2-1.51H2.67c-.78 0-1.46.45-1.79 1.13C.44 12.37 0 14.07 0 16c0 2.3.62 4.28 1.14 5.54A3.99 3.99 0 0 0 4.83 24h13.96c2.96 0 5.2-2.24 5.2-5v-7.49ZM22.85 8H2.67c-.18 0-.36.02-.53.04 1-1.98 2.81-4.77 5.9-7.08C9.7-.28 11.99-.32 13.75.85l4.2 3.13 3.64 2.72c.49.37.91.81 1.26 1.3Z"/></svg>
  