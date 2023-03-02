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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M17 0H8v16h14V5a5 5 0 0 0-5-5ZM4.395 16.061A3.013 3.013 0 0 1 5 16h1V.1A5 5 0 0 0 2 5v12.025a4.952 4.952 0 0 1 2.395-.964ZM22 18H5a3 3 0 0 0 0 6h12a5 5 0 0 0 5-5Z"/></svg>
  