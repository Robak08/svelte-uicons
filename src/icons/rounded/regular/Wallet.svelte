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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M21 6H5a3.012 3.012 0 0 1-2.235-.999A2.995 2.995 0 0 1 5 4h18a1 1 0 1 0 0-2H5a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h16a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3Zm1 13c0 .551-.448 1-1 1H5c-1.654 0-3-1.346-3-3V6.998A5.012 5.012 0 0 0 5 8h16c.552 0 1 .449 1 1v10Zm-2-5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"/></svg>
  