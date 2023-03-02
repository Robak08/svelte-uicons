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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M21 7a3 3 0 0 0 0 6 2.955 2.955 0 0 0 .628-.069 12.192 12.192 0 0 1-9.47 9.053.948.948 0 0 1-.791-.213A1.016 1.016 0 0 1 11 20.99v-1.061a10 10 0 0 0 7.905-5.4 4.978 4.978 0 0 1 0-9.052A10 10 0 1 0 9 19.949v1.041a3.013 3.013 0 0 0 1.085 2.316 2.95 2.95 0 0 0 2.431.646A14.27 14.27 0 0 0 24 10a3 3 0 0 0-3-3zM10 8a2 2 0 1 1-2 2 2 2 0 0 1 2-2z"/></svg>
  