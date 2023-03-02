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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 4v1a4 4 0 0 1-4 4H7v2h2a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2h2V9H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4zm3 1h2a1 1 0 0 1 1 1v2a1 1 0 0 0 2 0V6a3 3 0 0 0-3-3h-2a1 1 0 0 0 0 2zm-4 14H8a1 1 0 0 1-1-1v-2a1 1 0 0 0-2 0v2a3 3 0 0 0 3 3h3a1 1 0 0 0 0-2zm13-4v5a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4v-5a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4zm-4 5a1 1 0 1 0-1 1 1 1 0 0 0 1-1z"/></svg>
  