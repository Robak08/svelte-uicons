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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 12a1 1 0 0 1-2 0A10.011 10.011 0 0 0 12 2a1 1 0 0 1 0-2 12.013 12.013 0 0 1 12 12zm-8 1a1 1 0 0 0 0-2h-2.277a2 2 0 0 0-.723-.723V7a1 1 0 0 0-2 0v3.277A1.994 1.994 0 1 0 13.723 13zM1.827 6.784a1 1 0 1 0 1 1 1 1 0 0 0-1-1zM2 12a1 1 0 1 0-1 1 1 1 0 0 0 1-1zm10 10a1 1 0 1 0 1 1 1 1 0 0 0-1-1zM4.221 3.207a1 1 0 1 0 1 1 1 1 0 0 0-1-1zM7.779.841a1 1 0 1 0 1 1 1 1 0 0 0-1-1zM1.827 15.216a1 1 0 1 0 1 1 1 1 0 0 0-1-1zm2.394 3.577a1 1 0 1 0 1 1 1 1 0 0 0-1-1zm3.558 2.366a1 1 0 1 0 1 1 1 1 0 0 0-1-1zm14.394-5.943a1 1 0 1 0 1 1 1 1 0 0 0-1-1zm-2.394 3.577a1 1 0 1 0 1 1 1 1 0 0 0-1-1zm-3.558 2.366a1 1 0 1 0 1 1 1 1 0 0 0-1-1z"/></svg>
  