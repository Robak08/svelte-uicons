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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M9 9a1 1 0 0 1 1-1h1V7a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2h-1v1a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1-1-1zm7 5H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2zm-4 4H8a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2zm9-11v12a5.006 5.006 0 0 1-5 5H8a5.006 5.006 0 0 1-5-5V7a5.006 5.006 0 0 1 5-5h.171A3.006 3.006 0 0 1 11 0h2a3.006 3.006 0 0 1 2.829 2H16a5.006 5.006 0 0 1 5 5zm-2 0a3 3 0 0 0-3-3h-1a1 1 0 0 1-1-1 1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1 1 1 0 0 1-1 1H8a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3z"/></svg>
  