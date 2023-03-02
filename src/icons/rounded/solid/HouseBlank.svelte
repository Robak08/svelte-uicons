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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19 24H5c-2.757 0-5-2.243-5-5V9.724c0-1.665.824-3.215 2.204-4.145L9.203.855a4.98 4.98 0 0 1 5.594 0l7 4.724A4.992 4.992 0 0 1 24 9.724V19c0 2.757-2.243 5-5 5Z"/></svg>
  