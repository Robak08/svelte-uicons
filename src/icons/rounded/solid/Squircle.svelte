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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M15.18.18c4.59.42 8.23 4.05 8.64 8.64.12 1.34.18 2.41.18 3.18s-.06 1.83-.18 3.18a9.545 9.545 0 0 1-8.64 8.64c-1.37.12-2.41.18-3.18.18s-1.81-.06-3.18-.18a9.545 9.545 0 0 1-8.64-8.64C.06 13.84 0 12.77 0 12s.06-1.83.18-3.18A9.545 9.545 0 0 1 8.82.18C10.19.06 11.23 0 12 0s1.81.06 3.18.18Z"/></svg>
  