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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M10 12h7a1 1 0 1 1 0 2h-7a1 1 0 1 1 0-2Zm-1 6a1 1 0 0 0 1 1h10a1 1 0 1 0 0-2H10a1 1 0 0 0-1 1Zm1-9h4a1 1 0 1 0 0-2h-4a1 1 0 1 0 0 2Zm13 13H10a1 1 0 1 0 0 2h13a1 1 0 1 0 0-2ZM9.122 3.293 6.415.586C5.66-.17 4.342-.17 3.586.586L.879 3.293a.999.999 0 1 0 1.414 1.414L4 3v20a1 1 0 1 0 2 0V3l1.708 1.707a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414Z"/></svg>
  