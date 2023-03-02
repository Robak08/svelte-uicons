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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M21 17H10v2a1 1 0 0 1-2 0v-2H6v2a1 1 0 0 1-2 0v-2H3a3 3 0 0 0 0 6h18a3 3 0 0 0 0-6zM21 9H10v2a1 1 0 0 1-2 0V9H6v2a1 1 0 0 1-2 0V9H3a3 3 0 0 0 0 6h18a3 3 0 0 0 0-6zM21 1H10v2a1 1 0 0 1-2 0V1H6v2a1 1 0 0 1-2 0V1H3a3 3 0 0 0 0 6h18a3 3 0 0 0 0-6z"/></svg>
  