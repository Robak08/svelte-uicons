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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m21.781 22.375-7.543-9.429 7.594-11.391a1.001 1.001 0 0 0-1.664-1.11L12.465 12H4V1a1 1 0 0 0-2 0v11.978c0 .008-.004.014-.004.022 0 .008.004.014.004.022V23a1 1 0 1 0 2 0v-9h8.519l7.7 9.625a.996.996 0 0 0 1.405.156 1 1 0 0 0 .156-1.406Z"/></svg>
  