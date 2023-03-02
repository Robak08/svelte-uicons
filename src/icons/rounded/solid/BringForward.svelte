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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M11 16H5c-2.76 0-5-2.24-5-5V5c0-2.76 2.24-5 5-5h6c2.76 0 5 2.24 5 5v6c0 2.76-2.24 5-5 5Zm8 8h-6c-2.76 0-5-2.24-5-5 0-.55.45-1 1-1h2c3.86 0 7-3.14 7-7V9c0-.55.45-1 1-1 2.76 0 5 2.24 5 5v6c0 2.76-2.24 5-5 5Z"/></svg>
  