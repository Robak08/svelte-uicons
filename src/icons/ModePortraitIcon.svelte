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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-mode-portrait {customClass}"><path d="M23 16a1 1 0 0 0-1 1v2a3 3 0 0 1-3 3h-2a1 1 0 0 0 0 2h2a5.006 5.006 0 0 0 5-5v-2a1 1 0 0 0-1-1ZM1 8a1 1 0 0 0 1-1V5a3 3 0 0 1 3-3h2a1 1 0 0 0 0-2H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1ZM7 22H5a3 3 0 0 1-3-3v-2a1 1 0 0 0-2 0v2a5.006 5.006 0 0 0 5 5h2a1 1 0 0 0 0-2ZM19 0h-2a1 1 0 0 0 0 2h2a3 3 0 0 1 3 3v2a1 1 0 0 0 2 0V5a5.006 5.006 0 0 0-5-5ZM12 11a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0-6a2 2 0 1 1-2 2 2 2 0 0 1 2-2Z"/><path d="M18 20a1 1 0 0 0 1-1 6.006 6.006 0 0 0-6-6h-2a6.006 6.006 0 0 0-6 6 1 1 0 0 0 2 0 4 4 0 0 1 4-4h2a4 4 0 0 1 4 4 1 1 0 0 0 1 1Z"/></svg>
  