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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M4.395 16.061A3 3 0 0 1 5 16h1V.1A5 5 0 0 0 2 5v12.025a4.955 4.955 0 0 1 2.395-.964ZM22 18H5a3 3 0 1 0 0 6h12a5 5 0 0 0 5-5v-1Zm0-13v11H8V0h5v10.348c0 .623.791.89 1.169.395L15.5 9l1.331 1.743c.378.495 1.169.228 1.169-.395V.101A5 5 0 0 1 22 5Z"/></svg>
  