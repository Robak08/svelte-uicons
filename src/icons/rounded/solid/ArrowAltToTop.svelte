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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20 0H4a1 1 0 0 0 0 2h7.652a.765.765 0 0 0-.204.148L7.087 6.65C6.595 7.148 6.944 8 7.639 8H11v15a1 1 0 0 0 2 0V8h3.361c.695 0 1.044-.852.552-1.35l-4.361-4.502A.765.765 0 0 0 12.348 2H20a1 1 0 1 0 0-2Z"/></svg>
  