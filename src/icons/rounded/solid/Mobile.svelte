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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M16 0H8a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h8a5.006 5.006 0 0 0 5-5V5a5.006 5.006 0 0 0-5-5zM9 8a3 3 0 0 1 6 0v4a1 1 0 0 1-2 0v-1h-2v1a1 1 0 0 1-2 0zm3 14a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm3-5H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2zm-4-8V8a1 1 0 0 1 2 0v1z"/></svg>
  