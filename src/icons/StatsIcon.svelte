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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-stats {customClass}"><path d="M23 22H3a1 1 0 0 1-1-1V1a1 1 0 0 0-2 0v20a3 3 0 0 0 3 3h20a1 1 0 0 0 0-2Z"/><path d="M15 20a1 1 0 0 0 1-1v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 1 1ZM7 20a1 1 0 0 0 1-1v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 1 1ZM19 20a1 1 0 0 0 1-1V7a1 1 0 0 0-2 0v12a1 1 0 0 0 1 1ZM11 20a1 1 0 0 0 1-1V7a1 1 0 0 0-2 0v12a1 1 0 0 0 1 1Z"/></svg>
  