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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 0A12.013 12.013 0 0 0 0 12c.6 15.9 23.4 15.893 24 0A12.013 12.013 0 0 0 12 0ZM6.5 7A1.581 1.581 0 0 1 8 8.65c.41-3.617 6.167-.78.465 3.494a.743.743 0 0 1-.93 0C6.692 11.468 5 9.948 5 8.65A1.581 1.581 0 0 1 6.5 7Zm11.342 8.542A6.827 6.827 0 0 1 12 19a6.836 6.836 0 0 1-5.848-3.458A1 1 0 0 1 7.2 14.024 15.4 15.4 0 0 0 12 15a15.4 15.4 0 0 0 4.792-.976 1 1 0 0 1 1.05 1.518Zm-1.377-3.4a.743.743 0 0 1-.93 0c-5.7-4.279.059-7.109.465-3.494.41-3.615 6.167-.778.465 3.496Z"/></svg>
  