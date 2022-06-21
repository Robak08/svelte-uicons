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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-arrow-small-up {customClass}"><path d="m17.71 9.88-4.3-4.29a2 2 0 0 0-2.82 0l-4.3 4.29a1 1 0 0 0 0 1.41 1 1 0 0 0 1.42 0L11 8v11a1 1 0 0 0 2 0V8l3.29 3.29a1 1 0 1 0 1.42-1.41Z"/></svg>
  