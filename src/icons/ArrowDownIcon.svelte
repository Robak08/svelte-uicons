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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-arrow-down {customClass}"><path d="M18.05 17.79a1 1 0 0 0-1.42 0L13 21.42V1a1 1 0 0 0-1-1 1 1 0 0 0-1 1v20.41l-3.62-3.62A1 1 0 1 0 6 19.2l3.92 3.92a3 3 0 0 0 4.24 0l3.92-3.92a1 1 0 0 0-.03-1.41Z"/></svg>
  