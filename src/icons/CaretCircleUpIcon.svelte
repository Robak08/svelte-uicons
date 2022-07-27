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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-caret-circle-up {customClass}"><path d="M12 0A12 12 0 1 1 0 12 12.013 12.013 0 0 1 12 0Zm0 22A10 10 0 1 0 2 12a10.011 10.011 0 0 0 10 10Zm5.731-9.6-5.087-5.15a.9.9 0 0 0-1.288 0L6.269 12.4a.924.924 0 0 0 .644 1.575h10.174a.924.924 0 0 0 .644-1.575Z"/></svg>
  