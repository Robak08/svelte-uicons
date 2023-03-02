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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 0A12.013 12.013 0 0 0 0 12c.6 15.9 23.4 15.893 24 0A12.013 12.013 0 0 0 12 0ZM8.5 11a1.5 1.5 0 0 1 0-3 1.5 1.5 0 0 1 0 3Zm4 9h-1.731a1 1 0 0 1 0-2H12.5a.5.5 0 0 0 0-1H12a1 1 0 0 1 0-2h.5a.5.5 0 0 0 0-1h-1.731a1 1 0 0 1 0-2H12.5a2.507 2.507 0 0 1 1.987 4 2.507 2.507 0 0 1-1.987 4Zm3-9a1.5 1.5 0 0 1 0-3 1.5 1.5 0 0 1 0 3Z"/></svg>
  