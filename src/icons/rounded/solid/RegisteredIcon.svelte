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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12.998 11H9V8c0-.552.449-1 1-1h3a2.001 2.001 0 0 1 .005 4h-.007ZM24 12c0 6.617-5.383 12-12 12S0 18.617 0 12 5.383 0 12 0s12 5.383 12 12Zm-7.143 4.485-2.285-3.808a4.006 4.006 0 0 0 2.427-3.678c0-2.206-1.794-4-4-4h-3c-1.654 0-3 1.346-3 3v9a1 1 0 1 0 2 0v-4h3.434l2.709 4.515a1 1 0 0 0 1.715-1.03Z"/></svg>
  