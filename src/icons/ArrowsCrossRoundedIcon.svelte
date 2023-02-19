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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-arrows-cross {customClass}"><path d="M.293 1.707A.999.999 0 1 1 1.707.293l8 8a.999.999 0 1 1-1.414 1.414l-8-8ZM21 0h-5a1 1 0 1 0 0 2h4.586L.293 22.293a.999.999 0 1 0 1.414 1.414L22 3.414V8a1 1 0 1 0 2 0V3c0-1.654-1.346-3-3-3Zm2 15a1 1 0 0 0-1 1v4.586l-6.293-6.293a.999.999 0 1 0-1.414 1.414L20.586 22H16a1 1 0 1 0 0 2h5c1.654 0 3-1.346 3-3v-5a1 1 0 0 0-1-1Z"/></svg>
  