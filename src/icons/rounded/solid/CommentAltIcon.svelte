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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20 0H4a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h2.9l4.451 3.763a1 1 0 0 0 1.292 0L17.1 20H20a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4ZM7 5h5a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2Zm10 10H7a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2Zm0-4H7a1 1 0 0 1 0-2h10a1 1 0 0 1 0 2Z"/></svg>
  