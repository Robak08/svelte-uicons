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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M16.151 24H7.917A5.923 5.923 0 0 1 2 18.083V17a1 1 0 1 1 2 0v1.083A3.921 3.921 0 0 0 7.917 22h8.234A3.854 3.854 0 0 0 20 18.151a3.857 3.857 0 0 0-2.839-3.714L6.315 11.492A5.859 5.859 0 0 1 2 5.848 5.856 5.856 0 0 1 7.849 0h8.234A5.923 5.923 0 0 1 22 5.917V7a1 1 0 1 1-2 0V5.917A3.921 3.921 0 0 0 16.083 2H7.849A3.854 3.854 0 0 0 4 5.849a3.857 3.857 0 0 0 2.839 3.714l10.846 2.945A5.859 5.859 0 0 1 22 18.152a5.856 5.856 0 0 1-5.849 5.849Z"/></svg>
  