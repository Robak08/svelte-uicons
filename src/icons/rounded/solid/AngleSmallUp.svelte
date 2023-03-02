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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m19.061 13.439-4.586-4.585a3.583 3.583 0 0 0-4.95 0l-4.586 4.585a1.5 1.5 0 0 0 2.122 2.122l4.586-4.586a.5.5 0 0 1 .707 0l4.585 4.586a1.5 1.5 0 0 0 2.122-2.122Z"/></svg>
  