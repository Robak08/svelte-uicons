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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M21 0a1 1 0 0 0-1 1v10H4V1C3.994-.308 2.006-.307 2 1v22c.006 1.308 1.994 1.307 2 0V13h16v10c.006 1.308 1.995 1.307 2 0V1a1 1 0 0 0-1-1Z"/></svg>
  