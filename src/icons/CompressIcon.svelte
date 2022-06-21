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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-compress {customClass}"><path d="M7 0a1 1 0 0 0-1 1v2a3 3 0 0 1-3 3H1a1 1 0 0 0 0 2h2a5.006 5.006 0 0 0 5-5V1a1 1 0 0 0-1-1ZM23 16h-2a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 2 0v-2a3 3 0 0 1 3-3h2a1 1 0 0 0 0-2ZM21 8h2a1 1 0 0 0 0-2h-2a3 3 0 0 1-3-3V1a1 1 0 0 0-2 0v2a5.006 5.006 0 0 0 5 5ZM3 16H1a1 1 0 0 0 0 2h2a3 3 0 0 1 3 3v2a1 1 0 0 0 2 0v-2a5.006 5.006 0 0 0-5-5Z"/></svg>
  