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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M4.395 16.061A4.955 4.955 0 0 0 2 17.025V5A5 5 0 0 1 6 .1V16H5a3 3 0 0 0-.605.061ZM2 21a3 3 0 0 0 3 3h11v-6H5a3 3 0 0 0-3 3Zm14 3h1a5 5 0 0 0 5-5v-1h-6v6Zm1-24H8v16h7V9.6l-1.293 1.293a.999.999 0 1 1-1.414-1.414l1.613-1.613a2.966 2.966 0 0 1 4.188 0l1.613 1.614a.999.999 0 1 1-1.414 1.414L17 9.601v6.4h5V5a5 5 0 0 0-5-5Z"/></svg>
  