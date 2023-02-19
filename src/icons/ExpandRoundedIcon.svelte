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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-expand {customClass}"><path d="M19 24h-2a1 1 0 0 1 0-2h2a3 3 0 0 0 3-3v-2a1 1 0 0 1 2 0v2a5.006 5.006 0 0 1-5 5ZM1 8a1 1 0 0 1-1-1V5a5.006 5.006 0 0 1 5-5h2a1 1 0 0 1 0 2H5a3 3 0 0 0-3 3v2a1 1 0 0 1-1 1ZM7 24H5a5.006 5.006 0 0 1-5-5v-2a1 1 0 0 1 2 0v2a3 3 0 0 0 3 3h2a1 1 0 0 1 0 2ZM23 8a1 1 0 0 1-1-1V5a3 3 0 0 0-3-3h-2a1 1 0 0 1 0-2h2a5.006 5.006 0 0 1 5 5v2a1 1 0 0 1-1 1Z"/></svg>
  