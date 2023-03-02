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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20 0h-9a1 1 0 1 0 0 2h9c.179 0 .352.024.518.068L.293 22.293a.999.999 0 1 0 1.414 1.414L21.932 3.482c.044.165.068.339.068.518v9a1 1 0 1 0 2 0V4c0-2.206-1.794-4-4-4Z"/></svg>
  