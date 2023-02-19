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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-house-chimney-blank {customClass}"><path d="M22 5.724V1.987a1 1 0 1 0-2 0v2.379L14.797.855a4.98 4.98 0 0 0-5.594 0L2.204 5.579A4.99 4.99 0 0 0 0 9.724V19c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5V9.724a4.992 4.992 0 0 0-2-3.999ZM22 19c0 1.654-1.346 3-3 3H5c-1.654 0-3-1.346-3-3V9.724c0-.999.494-1.929 1.322-2.486l7-4.724c.51-.345 1.094-.517 1.678-.517s1.168.172 1.678.517l7.001 4.724A2.994 2.994 0 0 1 22 9.724V19Z"/></svg>
  