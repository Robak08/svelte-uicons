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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M10 11a1 1 0 1 1 0 2 1 1 0 0 1 0-2Zm-8 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm11 1a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM6 11a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm12 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2ZM8.707 5.293 11 3v5a1 1 0 1 0 2 0V3l2.293 2.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L13.414.586a2.001 2.001 0 0 0-2.828 0L7.293 3.879a.999.999 0 1 0 1.414 1.414Zm6.586 13.414L13 21v-5a1 1 0 1 0-2 0v5l-2.293-2.293a.999.999 0 1 0-1.414 1.414l3.293 3.293c.39.39.902.585 1.414.585s1.024-.195 1.414-.585l3.293-3.293a.999.999 0 1 0-1.414-1.414Z"/></svg>
  