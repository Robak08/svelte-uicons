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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M16 0h-.13a2.02 2.02 0 0 0-1.941 1.532 2 2 0 0 1-3.858 0A2.02 2.02 0 0 0 8.13 0H8a5.006 5.006 0 0 0-5 5v16a3 3 0 0 0 3 3h2.13a2.02 2.02 0 0 0 1.941-1.532 2 2 0 0 1 3.858 0A2.02 2.02 0 0 0 15.87 24H18a3 3 0 0 0 3-3V5a5.006 5.006 0 0 0-5-5Zm2 22-2.143-.063A4 4 0 0 0 8.13 22H6a1 1 0 0 1-1-1v-4h2a1 1 0 0 0 0-2H5V5a3 3 0 0 1 3-3l.143.063A4.01 4.01 0 0 0 12 5a4.071 4.071 0 0 0 3.893-3H16a3 3 0 0 1 3 3v10h-2a1 1 0 0 0 0 2h2v4a1 1 0 0 1-1 1Z"/><path d="M13 15h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2Z"/></svg>
  