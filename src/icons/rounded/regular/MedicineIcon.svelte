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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m16 7-.023-1.177A2.992 2.992 0 0 0 15 0H9a2.993 2.993 0 0 0-1 5.816V7a5.006 5.006 0 0 0-5 5v7a5.006 5.006 0 0 0 5 5h8a5.006 5.006 0 0 0 5-5v-7a5.006 5.006 0 0 0-5-5zM9 2h6a1 1 0 0 1 0 2H9a1 1 0 0 1 0-2zm10 17a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3h1a1 1 0 0 0 1-1V6h3.973L14 8.014A1 1 0 0 0 15 9h1a3 3 0 0 1 3 3zm-3-4a1 1 0 0 1-1 1h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2v-2a1 1 0 0 1 2 0v2h2a1 1 0 0 1 1 1z"/></svg>
  