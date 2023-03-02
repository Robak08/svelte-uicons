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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 8H4V4a4 4 0 0 1 8 0h1a1 1 0 0 1 0 2h-1v2Zm-2 8H6a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2Zm7-12a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm6 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm0 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-3-6a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm0 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-4 10v3a5 5 0 0 1-5 5H5a5 5 0 0 1-5-5v-3c0-2.35 1.196-4.606 3.036-6h9.928C14.804 11.394 16 13.65 16 16Zm-6-2H6a3 3 0 1 0 0 6h4a3 3 0 1 0 0-6Z"/></svg>
  