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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M0 7v-.974c0-2.757 2.243-5 5-5h2.528c.463 0 .927.109 1.341.316l3.156 1.578c.138.069.292.105.446.105h6.528a5.007 5.007 0 0 1 4.892 3.974H0Zm24 2v9.026c0 2.757-2.243 5-5 5H5c-2.757 0-5-2.243-5-5V9h24Zm-8 7a1 1 0 0 0-1-1H9c-1.308.005-1.307 1.995 0 2h6a1 1 0 0 0 1-1Z"/></svg>
  