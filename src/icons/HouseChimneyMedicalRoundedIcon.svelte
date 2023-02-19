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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-house-chimney-medical {customClass}"><path d="M15.5 10H15v-.5C15 8.121 13.879 7 12.5 7h-1A2.502 2.502 0 0 0 9 9.5v.5h-.5A2.502 2.502 0 0 0 6 12.5v1C6 14.879 7.121 16 8.5 16H9v.5c0 1.379 1.121 2.5 2.5 2.5h1c1.379 0 2.5-1.121 2.5-2.5V16h.5c1.379 0 2.5-1.121 2.5-2.5v-1c0-1.379-1.121-2.5-2.5-2.5Zm.5 3.5c0 .275-.225.5-.5.5H14a1 1 0 0 0-1 1v1.5c0 .275-.225.5-.5.5h-1a.501.501 0 0 1-.5-.5V15a1 1 0 0 0-1-1H8.5a.501.501 0 0 1-.5-.5v-1c0-.275.225-.5.5-.5H10a1 1 0 0 0 1-1V9.5c0-.275.225-.5.5-.5h1c.275 0 .5.225.5.5V11a1 1 0 0 0 1 1h1.5c.275 0 .5.225.5.5v1Zm6-7.776V2a1 1 0 1 0-2 0v2.367L14.797.855a4.98 4.98 0 0 0-5.594 0L2.204 5.579A4.99 4.99 0 0 0 0 9.724V19c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5V9.724a4.992 4.992 0 0 0-2-3.999ZM22 19c0 1.654-1.346 3-3 3H5c-1.654 0-3-1.346-3-3V9.724c0-.999.494-1.929 1.322-2.486l7-4.724c.51-.345 1.094-.517 1.678-.517s1.168.172 1.678.517l7.001 4.724A2.994 2.994 0 0 1 22 9.724V19Z"/></svg>
  