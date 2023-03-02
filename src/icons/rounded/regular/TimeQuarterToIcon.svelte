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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 12a12 12 0 0 1-24 0 1 1 0 0 1 2 0A10 10 0 1 0 12 2a1 1 0 0 1 0-2 12.013 12.013 0 0 1 12 12zm-13.723-1H8a1 1 0 0 0 0 2h2.277A1.994 1.994 0 1 0 13 10.277V7a1 1 0 0 0-2 0v3.277a2 2 0 0 0-.723.723zm-8.45-2.216a1 1 0 1 0-1-1 1 1 0 0 0 1 1zm2.394-3.577a1 1 0 1 0-1-1 1 1 0 0 0 1 1zm3.558-2.366a1 1 0 1 0-1-1 1 1 0 0 0 1 1z"/></svg>
  