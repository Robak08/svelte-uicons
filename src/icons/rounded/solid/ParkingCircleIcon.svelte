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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0Zm1.5 14H9v4a1 1 0 1 1-2 0V9c0-2.206 1.794-4 4-4h2.5C15.981 5 18 7.019 18 9.5S15.981 14 13.5 14ZM16 9.5c0 1.378-1.121 2.5-2.5 2.5H9V9c0-1.103.897-2 2-2h2.5C14.879 7 16 8.122 16 9.5Z"/></svg>
  