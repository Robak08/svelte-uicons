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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 24A12 12 0 1 0 0 12a12.013 12.013 0 0 0 12 12ZM6.269 12.4l5.087-5.15a.9.9 0 0 1 1.288 0l5.087 5.15a.924.924 0 0 1-.644 1.575H6.913a.924.924 0 0 1-.644-1.575Z"/></svg>
  