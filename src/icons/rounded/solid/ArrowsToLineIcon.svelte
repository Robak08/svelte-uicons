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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 12a1 1 0 0 1-1 1H1a1 1 0 1 1 0-2h22a1 1 0 0 1 1 1ZM10.586 8.414c.39.39.902.585 1.414.585s1.024-.195 1.414-.585l3.293-3.293a.999.999 0 1 0-1.414-1.414L13 6V1a1 1 0 1 0-2 0v5L8.707 3.707a.999.999 0 1 0-1.414 1.414l3.293 3.293Zm2.828 7.172a2.003 2.003 0 0 0-2.828 0l-3.293 3.293a.999.999 0 1 0 1.414 1.414L11 18v5a1 1 0 1 0 2 0v-5l2.293 2.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414l-3.293-3.293Z"/></svg>
  