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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m2.31 17.192 5.5 5.5a4.22 4.22 0 0 1-5.5-5.5zM7.327 1.98a1 1 0 0 0-.4-1.96A10.689 10.689 0 0 0 .213 4.145 1 1 0 0 0 1.82 5.334 8.641 8.641 0 0 1 7.327 1.98zM23.2 16.023a1 1 0 0 0-1.191.762 8.638 8.638 0 0 1-3.317 5.407 1 1 0 0 0 1.18 1.616 10.7 10.7 0 0 0 4.09-6.593 1 1 0 0 0-.762-1.192zM20.167 5.247l1.54-1.54a1 1 0 1 0-1.414-1.414l-1.542 1.542a8.456 8.456 0 0 0-9.822-.5l-5.5 3.4a5.026 5.026 0 0 0-.912 7.829l6.959 6.959a5.026 5.026 0 0 0 7.839-.926l3.6-5.876a8.543 8.543 0 0 0-.748-9.474z"/></svg>
  