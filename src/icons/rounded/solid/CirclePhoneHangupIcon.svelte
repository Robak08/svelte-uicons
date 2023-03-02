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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0Zm6.947 12.905c0 .605-.49 1.095-1.095 1.095l-1.56-.205c-.605 0-1.095-.49-1.095-1.095l-.148-1.578c-1.939-.868-3.968-.91-6.099 0L8.802 12.7c0 .605-.49 1.095-1.095 1.095L6.147 14c-.605 0-1.095-.49-1.095-1.095l-.053-1.038c0-.747.314-1.416.804-1.906 2.711-2.711 9.874-2.517 12.391 0 .49.49.805 1.159.804 1.906l-.053 1.038Z"/></svg>
  