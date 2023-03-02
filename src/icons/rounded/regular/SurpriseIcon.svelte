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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 24A12.013 12.013 0 0 1 0 12C.6-3.9 23.4-3.894 24 12a12.013 12.013 0 0 1-12 12Zm0-22A10.011 10.011 0 0 0 2 12c.5 13.248 19.5 13.244 20 0A10.011 10.011 0 0 0 12 2Zm0 12a3 3 0 0 0 0 6 3 3 0 0 0 0-6ZM8.5 8a1.5 1.5 0 0 0 0 3 1.5 1.5 0 0 0 0-3Zm7 0a1.5 1.5 0 0 0 0 3 1.5 1.5 0 0 0 0-3Z"/></svg>
  