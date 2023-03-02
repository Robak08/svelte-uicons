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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M13 2.046V1a1 1 0 0 0-2 0v1.046C5.401 2.553 1 7.272 1 13a10.95 10.95 0 0 0 2.668 7.173C2.822 20.621 2 21.49 2 23a1 1 0 0 0 2 0c0-1 .858-1.194 1.11-1.229.07-.008.138-.023.203-.044 1.854 1.424 4.173 2.272 6.687 2.272s4.835-.849 6.689-2.274c.06.021.124.036.189.045.263.036 1.122.229 1.122 1.229a1 1 0 0 0 2 0c0-1.51-.821-2.378-1.668-2.827A10.95 10.95 0 0 0 23 12.999c0-5.728-4.401-10.447-10-10.954ZM16 14h-3v3a1 1 0 0 1-2 0v-3H8a1 1 0 0 1 0-2h3V9a1 1 0 0 1 2 0v3h3a1 1 0 0 1 0 2Zm8-9.5a1 1 0 0 1-2 0c0-1.212-.976-2.5-2.785-2.5a1 1 0 0 1 0-2C21.898 0 24 1.977 24 4.5Zm-23 1a1 1 0 0 1-1-1C0 1.977 2.102 0 4.785 0a1 1 0 0 1 0 2C2.976 2 2 3.288 2 4.5a1 1 0 0 1-1 1Z"/></svg>
  