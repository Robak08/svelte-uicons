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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-graphic-tablet {customClass}"><path d="M19 4H7a5.006 5.006 0 0 0-5 5v2H1a1 1 0 0 0 0 2h1v2a5.006 5.006 0 0 0 5 5h12a5.006 5.006 0 0 0 5-5V9a5.006 5.006 0 0 0-5-5ZM4 15v-2a1 1 0 0 0 0-2V9a3 3 0 0 1 3-3v12a3 3 0 0 1-3-3Zm18 0a3 3 0 0 1-3 3H9V6h10a3 3 0 0 1 3 3Z"/></svg>
  