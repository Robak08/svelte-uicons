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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M8 13v3H5c-2.76 0-5-2.24-5-5V5c0-2.76 2.24-5 5-5h6c2.76 0 5 2.24 5 5v3h-3c-2.76 0-5 2.24-5 5Zm11-5h-3v3c0 2.76-2.24 5-5 5H8v3c0 2.76 2.24 5 5 5h6c2.76 0 5-2.24 5-5v-6c0-2.76-2.24-5-5-5Z"/></svg>
  