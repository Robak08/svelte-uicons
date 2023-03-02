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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M9 10a1 1 0 1 1 1 1 1 1 0 0 1-1-1zm5 1a1 1 0 1 0-1-1 1 1 0 0 0 1 1zm-4 2a1 1 0 1 0 1 1 1 1 0 0 0-1-1zm4 2a1 1 0 1 0-1-1 1 1 0 0 0 1 1zm10-5v4a5.006 5.006 0 0 1-5 5H5a5.006 5.006 0 0 1-5-5v-4a5.006 5.006 0 0 1 5-5h14a5.006 5.006 0 0 1 5 5zM7 7v10h10V7zM5 17V7a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3zm17-7a3 3 0 0 0-3-3v10a3 3 0 0 0 3-3z"/></svg>
  