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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 0A12.013 12.013 0 0 0 0 12c.6 15.9 23.4 15.893 24 0A12.013 12.013 0 0 0 12 0Zm0 22A10.011 10.011 0 0 1 2 12c.5-13.248 19.5-13.244 20 0a10.011 10.011 0 0 1-10 10ZM7 9.5a1.5 1.5 0 0 1 3 0 1.5 1.5 0 0 1-3 0Zm7 0a1.5 1.5 0 0 1 3 0 1.5 1.5 0 0 1-3 0Zm2 3.5H8a3 3 0 0 0 0 6h8a3 3 0 0 0 0-6Zm-3 2v2h-2v-2Zm-6 1a1 1 0 0 1 1-1h1v2H8a1 1 0 0 1-1-1Zm9 1h-1v-2h1a1 1 0 0 1 0 2Z"/></svg>
  