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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-window-maximize {customClass}"><path d="M19 1H5C2.24 1 0 3.24 0 6v12c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V6c0-2.76-2.24-5-5-5ZM5 3h14c1.65 0 3 1.35 3 3v2H2V6c0-1.65 1.35-3 3-3Zm14 18H5c-1.65 0-3-1.35-3-3v-8h20v8c0 1.65-1.35 3-3 3Z"/></svg>
  