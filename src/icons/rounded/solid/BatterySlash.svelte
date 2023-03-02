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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M21.784 16H23a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-1.101A5.01 5.01 0 0 0 17 4H5.414L1.707.293A1 1 0 1 0 .292 1.707l22.001 22a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414l-3.582-3.582A5.949 5.949 0 0 0 21.784 16Zm-6.026 4H5c-2.757 0-5-2.243-5-5V9c0-1.317.512-2.516 1.347-3.41L15.758 20Z"/></svg>
  