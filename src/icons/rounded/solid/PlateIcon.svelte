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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 0A12.013 12.013 0 0 0 0 12c.63 15.908 23.373 15.9 24 0A12.013 12.013 0 0 0 12 0Zm0 21C.077 20.548.08 3.451 12 3a1 1 0 0 1 0 2 7.008 7.008 0 0 0-7 7c.294 9.251 13.707 9.249 14 0a1 1 0 0 1 2 0 9.01 9.01 0 0 1-9 9Z"/></svg>
  