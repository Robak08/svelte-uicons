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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M14 11v7a2 2 0 1 0-4 0v-7h4ZM10 1v3a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V1a1 1 0 1 1 2 0v1h2V1a1 1 0 1 1 2 0v1h2V1a1 1 0 1 1 2 0Zm14 0v3a3 3 0 0 1-3 3h-4a3 3 0 0 1-3-3V1a1 1 0 1 1 2 0v1h2V1a1 1 0 1 1 2 0v1h2V1a1 1 0 1 1 2 0Zm-2 19V10a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v14h2a4 4 0 0 0 4-4ZM8 10a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v10a4 4 0 0 0 4 4h2V10Z"/></svg>
  