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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M21 5.127V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v1h-2V4a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v1.127A4.006 4.006 0 0 0 0 9v8a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V9a4.006 4.006 0 0 0-3-3.873ZM9 13H5a1 1 0 0 1 0-2h4a1 1 0 0 1 0 2Zm10 0h-1v1a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2Z"/></svg>
  