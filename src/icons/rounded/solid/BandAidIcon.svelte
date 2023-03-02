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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M5 19a5.006 5.006 0 0 1-5-5v-4a5.006 5.006 0 0 1 5-5zM7 5h10v14H7zm4 9a1 1 0 1 0-1 1 1 1 0 0 0 1-1zm2-4a1 1 0 1 0 1-1 1 1 0 0 0-1 1zm0 4a1 1 0 1 0 1-1 1 1 0 0 0-1 1zm-4-4a1 1 0 1 0 1-1 1 1 0 0 0-1 1zm10-5v14a5.006 5.006 0 0 0 5-5v-4a5.006 5.006 0 0 0-5-5z"/></svg>
  