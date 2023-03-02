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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m22.824 17.179-1.611-1.611-2.322 2.322a.997.997 0 0 1-1.414 0 .999.999 0 0 1 0-1.414l2.322-2.322-1.414-1.414-2.323 2.323a.997.997 0 0 1-1.414 0 .999.999 0 0 1 0-1.414l2.323-2.323-1.414-1.414-2.323 2.323a.997.997 0 0 1-1.414 0 .999.999 0 0 1 0-1.414l2.323-2.323-1.415-1.414-2.322 2.322a.997.997 0 0 1-1.414 0 .999.999 0 0 1 0-1.414l2.322-2.322-1.466-1.466-2.323 2.323a.997.997 0 0 1-1.414 0 .999.999 0 0 1 0-1.414L8.434 2.79 6.823 1.179C5.656.012 3.986-.322 2.467.311A3.93 3.93 0 0 0 0 4.002v14.991A5.013 5.013 0 0 0 5.007 24h14.991c1.646 0 3.061-.945 3.691-2.467s.298-3.189-.866-4.354Zm-10.4.204A1 1 0 0 1 11.5 18H7a1 1 0 0 1-1-1v-4.5a1 1 0 0 1 1.707-.707l4.5 4.5a1 1 0 0 1 .217 1.09Z"/></svg>
  