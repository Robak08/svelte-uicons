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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20.723 7H22a2 2 0 0 0 2-2 4 4 0 0 0-4-4H5a5.006 5.006 0 0 0-5 5v6.515a6.954 6.954 0 0 0 2.05 4.949l.95.95V19.5a3.5 3.5 0 0 0 7 0V19h5v.5a3.5 3.5 0 0 0 7 0V19h1a1 1 0 0 0 1-1v-3.407a7.009 7.009 0 0 0-.922-3.472ZM2 7h6v2H2Zm6 12.5a1.5 1.5 0 0 1-3 0V19h3Zm5-2.5H4.414l-.95-.95A4.967 4.967 0 0 1 2 12.515V11h6a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H2.172A3 3 0 0 1 5 3h15a2 2 0 0 1 2 2h-5a4 4 0 0 0-4 4Zm7.7-6H15V9a2 2 0 0 1 2-2h1.419Zm-.7 8.5a1.5 1.5 0 0 1-3 0V19h3Zm2-2.5h-7v-4h6.739A5 5 0 0 1 22 14.593Z"/></svg>
  