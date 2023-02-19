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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-arrow-circle-down {customClass}"><path d="M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0Zm0 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1-10 10Zm5.707-8.879a1 1 0 0 0-1.414 0L13 16.413 12.993 6a1 1 0 0 0-2 0L11 16.414l-3.293-3.293a1 1 0 1 0-1.438 1.389l.024.025 3.585 3.586a3 3 0 0 0 4.243 0l3.586-3.586a1 1 0 0 0 0-1.414Z"/></svg>
  