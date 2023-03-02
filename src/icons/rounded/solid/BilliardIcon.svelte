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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 6a6 6 0 1 0 6 6 6.006 6.006 0 0 0-6-6zm2.857 4.515-3 5a1 1 0 1 1-1.714-1.03L12.234 11H10a1 1 0 0 1 0-2h4a1 1 0 0 1 .857 1.515zM12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0zm0 20a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z"/></svg>
  