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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M0 20.465 5.647 12 0 3.535h4.235L9.882 12l-5.647 8.465H0z"/><path d="M5.647 20.465 11.294 12 5.647 3.535h4.235l11.294 16.93h-4.235l-3.529-5.291-3.53 5.291H5.647zM19.294 15.527l-1.882-2.822H24v2.822h-4.706zm-2.823-4.232-1.882-2.822H24v2.822h-7.529z"/></svg>
  