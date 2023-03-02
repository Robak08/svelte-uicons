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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20.24 4.915a8.325 8.325 0 0 0 3.315-1.083 1 1 0 0 0-1.1-1.668A6.508 6.508 0 0 1 20 2.931V1a1 1 0 0 0-2 0v1.931a6.526 6.526 0 0 1-2.451-.767 1 1 0 0 0-1.1 1.668 8.343 8.343 0 0 0 3.345 1.088c-2.021.523-3.008 1.888-3.832 3.823C13 11 11 11 7 11c-3.86 0-7 2.641-7 6.5S3.14 24 7 24c10.645 0 17-7.5 17-14.257a5 5 0 0 0-3.76-4.828ZM19 8.5a1 1 0 0 1-1-1V4.95a10.126 10.126 0 0 0 2 0V7.5a1 1 0 0 1-1 1Z"/></svg>
  