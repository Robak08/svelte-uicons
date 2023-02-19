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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-y {customClass}"><path d="M21.633.226a1 1 0 0 0-1.407.142L12 10.421 3.774.367a1 1 0 0 0-1.549 1.265L11 12.357V23c.005 1.308 1.995 1.307 2 0V12.357l8.774-10.724a1 1 0 0 0-.142-1.407Z"/></svg>
  