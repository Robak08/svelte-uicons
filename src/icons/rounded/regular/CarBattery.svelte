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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M10 12a1 1 0 0 1-1 1H5a1 1 0 0 1 0-2h4a1 1 0 0 1 1 1Zm9-1h-1v-1a1 1 0 0 0-2 0v1h-1a1 1 0 0 0 0 2h1v1a1 1 0 0 0 2 0v-1h1a1 1 0 0 0 0-2Zm5-2v8a5.006 5.006 0 0 1-5 5H5a5.006 5.006 0 0 1-5-5V9a4.006 4.006 0 0 1 3-3.873V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1.127A4.006 4.006 0 0 1 24 9Zm-2 0a2 2 0 0 0-2-2 1 1 0 0 1-1-1V4h-4v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V4H5v2a1 1 0 0 1-1 1 2 2 0 0 0-2 2v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3Z"/></svg>
  