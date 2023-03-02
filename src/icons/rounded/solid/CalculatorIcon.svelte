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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M17 7a1 1 0 0 1-1 1H8a1 1 0 0 1 0-2h8a1 1 0 0 1 1 1zm6-2v14a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V5a5.006 5.006 0 0 1 5-5h12a5.006 5.006 0 0 1 5 5zM7 18a1 1 0 1 0-1 1 1 1 0 0 0 1-1zm0-4a1 1 0 1 0-1 1 1 1 0 0 0 1-1zm4 4a1 1 0 1 0-1 1 1 1 0 0 0 1-1zm0-4a1 1 0 1 0-1 1 1 1 0 0 0 1-1zm8 4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 1-1zm-5-3a1 1 0 1 0-1-1 1 1 0 0 0 1 1zm5-1a1 1 0 1 0-1 1 1 1 0 0 0 1-1zm0-7a3 3 0 0 0-3-3H8a3 3 0 0 0 0 6h8a3 3 0 0 0 3-3z"/></svg>
  