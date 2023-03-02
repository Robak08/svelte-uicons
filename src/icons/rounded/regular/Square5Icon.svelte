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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 18H9a1 1 0 1 1 0-2h3c.554 0 1.069-.222 1.451-.624.381-.401.575-.929.546-1.484C13.942 12.849 12.97 12 11.83 12H9a1 1 0 0 1-1-1V8c0-1.103.897-2 2-2h4a1 1 0 0 1 0 2h-4v2h1.83c2.224 0 4.053 1.663 4.164 3.786a3.972 3.972 0 0 1-1.092 2.967A4.016 4.016 0 0 1 12 18Zm12 1V5c0-2.757-2.243-5-5-5H5C2.243 0 0 2.243 0 5v14c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5ZM19 2c1.654 0 3 1.346 3 3v14c0 1.654-1.346 3-3 3H5c-1.654 0-3-1.346-3-3V5c0-1.654 1.346-3 3-3h14Z"/></svg>
  