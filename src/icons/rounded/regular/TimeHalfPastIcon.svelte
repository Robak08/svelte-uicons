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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M11 13.723a1.984 1.984 0 0 1 0-3.446V7a1 1 0 0 1 2 0v3.277a1.984 1.984 0 0 1 0 3.446V16a1 1 0 0 1-2 0zM12 0a1 1 0 0 0 0 2 10 10 0 0 1 0 20 1 1 0 0 0 0 2 12 12 0 0 0 0-24zM1.827 6.784a1 1 0 1 0 1 1 1 1 0 0 0-1-1zM2 12a1 1 0 1 0-1 1 1 1 0 0 0 1-1zm2.221-8.793a1 1 0 1 0 1 1 1 1 0 0 0-1-1zM7.779.841a1 1 0 1 0 1 1 1 1 0 0 0-1-1zM1.827 15.216a1 1 0 1 0 1 1 1 1 0 0 0-1-1zm2.394 3.577a1 1 0 1 0 1 1 1 1 0 0 0-1-1zm3.558 2.366a1 1 0 1 0 1 1 1 1 0 0 0-1-1z"/></svg>
  