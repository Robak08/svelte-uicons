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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M10 23a1 1 0 0 1-1 1H1a1 1 0 0 1 0-2h8a1 1 0 0 1 1 1zM1 20h6a1 1 0 0 0 0-2H1a1 1 0 0 0 0 2zM1 16h4a1 1 0 0 0 0-2H1a1 1 0 0 0 0 2z"/><path d="M12 0A12 12 0 0 0 0 12c0 .061.008.12.009.181A2.966 2.966 0 0 1 1 12h4a2.99 2.99 0 0 1 2.78 4.116 2.975 2.975 0 0 1 2 4 2.949 2.949 0 0 1 2.039 3.875c.061 0 .12.009.181.009a12 12 0 0 0 0-24zm3.707 15.707a1 1 0 0 1-1.414 0l-3-3A1 1 0 0 1 11 12V7a1 1 0 0 1 2 0v4.586l2.707 2.707a1 1 0 0 1 0 1.414z"/></svg>
  