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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M7.424 21a4.99 4.99 0 0 0 9.152 0ZM22.392 12.549l-1.736-5.723A9.321 9.321 0 0 0 2.58 7.28l-1.348 5.537A5 5 0 0 0 6.09 19h11.517a5 5 0 0 0 4.785-6.451Z"/></svg>
  