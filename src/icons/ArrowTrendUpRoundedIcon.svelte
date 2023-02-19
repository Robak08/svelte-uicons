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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-arrow-trend-up {customClass}"><path d="M21 6h-6a1 1 0 1 0 0 2h5.586l-6.562 6.562a1.45 1.45 0 0 1-2.047 0l-2.539-2.539a3.451 3.451 0 0 0-4.875 0l-4.27 4.27a.999.999 0 1 0 1.414 1.414l4.27-4.27c.547-.547 1.5-.547 2.047 0l2.539 2.539a3.451 3.451 0 0 0 4.875 0l6.563-6.562V15a1 1 0 1 0 2 0V9c0-1.654-1.346-3-3-3Z"/></svg>
  