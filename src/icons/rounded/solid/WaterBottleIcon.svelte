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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20 8.016c.152-2.593-3.127-3.163-5-4.016V2a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2v2L6.514 5a3.219 3.219 0 0 0-1.939 5H15a1 1 0 0 1 0 2H4.574a3.828 3.828 0 0 0 0 4H15a1 1 0 0 1 0 2H4.574A3.991 3.991 0 0 0 8 24h8a4.006 4.006 0 0 0 2.618-7 3.993 3.993 0 0 0 0-6A4.007 4.007 0 0 0 20 8.016Z"/></svg>
  