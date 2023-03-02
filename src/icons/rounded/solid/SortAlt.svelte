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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12.707 17.707a.999.999 0 0 1 0 1.414l-4.293 4.293c-.39.39-.902.585-1.414.585s-1.024-.195-1.414-.585l-4.293-4.293a.999.999 0 1 1 1.414-1.414L6 21V1a1 1 0 1 1 2 0v20l3.293-3.293a.999.999 0 0 1 1.414 0Zm10-12.828L18.414.586a2.003 2.003 0 0 0-2.828 0l-4.293 4.293a.999.999 0 1 0 1.414 1.414L16 3v20a1 1 0 1 0 2 0V3l3.293 3.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414Z"/></svg>
  