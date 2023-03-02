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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0Zm2.901 16.754A4.018 4.018 0 0 1 12 18H9a1 1 0 1 1 0-2h3c.554 0 1.068-.222 1.45-.623.382-.402.576-.93.547-1.486C13.942 12.849 12.971 12 11.83 12H9a1 1 0 0 1-1-1V8c0-1.103.897-2 2-2h4a1 1 0 1 1 0 2h-4v2h1.83c2.224 0 4.054 1.663 4.165 3.786a3.971 3.971 0 0 1-1.094 2.968Z"/></svg>
  