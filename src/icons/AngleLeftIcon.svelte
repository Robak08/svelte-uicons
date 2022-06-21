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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-angle-left {customClass}"><path d="M17.17 24a1 1 0 0 1-.71-.29l-8.17-8.17a5 5 0 0 1 0-7.08L16.46.29a1 1 0 1 1 1.42 1.42L9.71 9.88a3 3 0 0 0 0 4.24l8.17 8.17a1 1 0 0 1 0 1.42 1 1 0 0 1-.71.29Z"/></svg>
  