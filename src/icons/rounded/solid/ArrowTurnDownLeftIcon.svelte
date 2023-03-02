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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23 2c-.55 0-1 .45-1 1v8c0 1.65-1.35 3-3 3H2.58l5.14-5.3c.38-.4.37-1.03-.02-1.41a.996.996 0 0 0-1.41.02L.88 12.88a2.997 2.997 0 0 0-.01 4.23l5.41 5.59c.2.2.46.3.72.3s.5-.09.7-.28c.4-.38.41-1.02.02-1.41l-5.14-5.3H19c2.76 0 5-2.24 5-5V3c0-.55-.45-1-1-1Z"/></svg>
  