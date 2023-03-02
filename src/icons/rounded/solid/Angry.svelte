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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 0A12.013 12.013 0 0 0 0 12c.6 15.9 23.4 15.893 24 0A12.013 12.013 0 0 0 12 0ZM5 8a1 1 0 0 1 1-1c3.286 0 4.008 2.5 4 3.474a1.5 1.5 0 1 1-2.53-1.06A2.289 2.289 0 0 0 6 9a1 1 0 0 1-1-1Zm12.746 9.666a1 1 0 0 1-1.411.081 6.357 6.357 0 0 0-8.671 0 1 1 0 0 1-1.33-1.494 8.375 8.375 0 0 1 11.332 0 1 1 0 0 1 .08 1.413ZM18 9a2.3 2.3 0 0 0-1.471.413A1.5 1.5 0 1 1 14 10.474C13.992 9.5 14.714 7 18 7a1 1 0 0 1 0 2Z"/></svg>
  