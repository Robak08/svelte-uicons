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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19 20H5a5.006 5.006 0 0 1-5-5V9a5.006 5.006 0 0 1 5-5h14a5.006 5.006 0 0 1 5 5v6a5.006 5.006 0 0 1-5 5zM5 6a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3zm7 10a4 4 0 1 1 4-4 4 4 0 0 1-4 4zm0-6a2 2 0 1 0 2 2 2 2 0 0 0-2-2zM5 8a1 1 0 1 0 1 1 1 1 0 0 0-1-1zm13 1a1 1 0 1 0 1-1 1 1 0 0 0-1 1zM5 14a1 1 0 1 0 1 1 1 1 0 0 0-1-1zm13 1a1 1 0 1 0 1-1 1 1 0 0 0-1 1z"/></svg>
  