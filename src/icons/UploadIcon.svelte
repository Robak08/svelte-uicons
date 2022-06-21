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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-upload {customClass}"><path d="M11.007 2.578 11 18.016a1 1 0 0 0 1 1 1 1 0 0 0 1-1l.007-15.421 2.912 2.913a1 1 0 0 0 1.414 0 1 1 0 0 0 0-1.414L14.122.879a3 3 0 0 0-4.244 0L6.667 4.091a1 1 0 0 0 0 1.414 1 1 0 0 0 1.414 0Z"/><path d="M22 17v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-4a1 1 0 0 0-1-1 1 1 0 0 0-1 1v4a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3v-4a1 1 0 0 0-1-1 1 1 0 0 0-1 1Z"/></svg>
  