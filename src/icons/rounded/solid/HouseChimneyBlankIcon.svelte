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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M22 5.735V1.987a1 1 0 1 0-2 0v2.379L14.797.855a4.98 4.98 0 0 0-5.594 0L2.204 5.579A4.99 4.99 0 0 0 0 9.724V19c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5V9.724a4.988 4.988 0 0 0-2-3.989Z"/></svg>
  