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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M16 12.5v1c0 .275-.225.5-.5.5H14a1 1 0 0 0-1 1v1.5c0 .275-.225.5-.5.5h-1a.501.501 0 0 1-.5-.5V15a1 1 0 0 0-1-1H8.5a.501.501 0 0 1-.5-.5v-1c0-.275.225-.5.5-.5H10a1 1 0 0 0 1-1V9.5c0-.275.225-.5.5-.5h1c.275 0 .5.225.5.5V11a1 1 0 0 0 1 1h1.5c.275 0 .5.225.5.5Zm8-2.776V19c0 2.757-2.243 5-5 5H5c-2.757 0-5-2.243-5-5V9.724c0-1.665.824-3.215 2.204-4.145L9.203.855a4.98 4.98 0 0 1 5.594 0L20 4.366V2a1 1 0 1 1 2 0v3.724c1.256.941 2 2.418 2 3.999ZM18 12.5c0-1.379-1.121-2.5-2.5-2.5H15v-.5C15 8.121 13.879 7 12.5 7h-1A2.502 2.502 0 0 0 9 9.5v.5h-.5A2.502 2.502 0 0 0 6 12.5v1C6 14.879 7.121 16 8.5 16H9v.5c0 1.379 1.121 2.5 2.5 2.5h1c1.379 0 2.5-1.121 2.5-2.5V16h.5c1.379 0 2.5-1.121 2.5-2.5v-1Z"/></svg>
  