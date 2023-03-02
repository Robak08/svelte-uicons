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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19 0H5C2.243 0 0 2.243 0 5v14c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5V5c0-2.757-2.243-5-5-5Zm0 20H9a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2Zm1.707-9.105a.997.997 0 0 1-1.414 0L18 9.602V15a1 1 0 0 1-2 0V9.602l-1.293 1.293a.997.997 0 0 1-1.414 0L12 9.602V15a1 1 0 0 1-2 0V9.602l-1.293 1.293a.999.999 0 1 1-1.414-1.414l1.614-1.614a2.965 2.965 0 0 1 4.187 0l.907.907.907-.907a2.965 2.965 0 0 1 4.187 0l1.614 1.614a.999.999 0 0 1 0 1.414Z"/></svg>
  