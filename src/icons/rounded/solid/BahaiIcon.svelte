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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m12 21.215 3.025 2.415a1.176 1.176 0 0 0 1.887-.687l.765-3.795 3.87-.095a1.176 1.176 0 0 0 1.004-1.739l-1.853-3.399 2.904-2.56a1.176 1.176 0 0 0-.349-1.977l-3.604-1.412.579-3.827a1.177 1.177 0 0 0-1.538-1.291l-3.669 1.235L13.004.78a1.176 1.176 0 0 0-2.008 0L8.979 4.084 5.31 2.849A1.176 1.176 0 0 0 3.772 4.14l.579 3.827L.747 9.379a1.176 1.176 0 0 0-.349 1.977l2.904 2.56-1.853 3.399a1.176 1.176 0 0 0 1.004 1.739l3.87.095.765 3.795a1.176 1.176 0 0 0 1.887.687L12 21.216Z"/></svg>
  