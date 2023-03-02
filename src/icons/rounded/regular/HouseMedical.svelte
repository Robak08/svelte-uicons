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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M15.461 10h-.5v-.5c0-1.379-1.122-2.5-2.5-2.5h-1a2.503 2.503 0 0 0-2.5 2.5v.5h-.5a2.503 2.503 0 0 0-2.5 2.5v1c0 1.379 1.122 2.5 2.5 2.5h.5v.5c0 1.379 1.122 2.5 2.5 2.5h1c1.378 0 2.5-1.121 2.5-2.5V16h.5c1.378 0 2.5-1.121 2.5-2.5v-1c0-1.379-1.122-2.5-2.5-2.5Zm.5 3.5a.5.5 0 0 1-.5.5h-1.5a1 1 0 0 0-1 1v1.5a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5V15a1 1 0 0 0-1-1h-1.5a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h1.5a1 1 0 0 0 1-1V9.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5V11a1 1 0 0 0 1 1h1.5a.5.5 0 0 1 .5.5v1Zm5.797-7.921-7-4.724a4.98 4.98 0 0 0-5.594 0L2.165 5.579A4.993 4.993 0 0 0-.039 9.724V19c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5V9.724a4.995 4.995 0 0 0-2.203-4.145ZM21.961 19c0 1.654-1.346 3-3 3h-14c-1.654 0-3-1.346-3-3V9.724c0-.999.494-1.928 1.322-2.486l7.001-4.724c.51-.345 1.094-.517 1.678-.517s1.168.172 1.678.517l7 4.724a2.994 2.994 0 0 1 1.322 2.486V19Z"/></svg>
  