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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M21 0H7C4.243 0 2 2.243 2 5v18c.006 1.308 1.994 1.307 2 0V13h13c1.308-.006 1.307-1.994 0-2H4V5c0-1.654 1.346-3 3-3h14c1.308-.006 1.307-1.994 0-2Z"/></svg>
  