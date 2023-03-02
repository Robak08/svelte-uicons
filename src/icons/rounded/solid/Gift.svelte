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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M2 15h9v9H7a5 5 0 0 1-5-5Zm22-4a2 2 0 0 1-2 2h-9V8.957c-.336.026-.671.043-1 .043s-.664-.017-1-.043V13H2a2 2 0 0 1-2-2 4 4 0 0 1 4-4h1.738A5.137 5.137 0 0 1 4 3a1 1 0 0 1 2 0c0 2.622 2.371 3.53 4.174 3.841A9.332 9.332 0 0 1 9 3a3 3 0 0 1 6 0 9.332 9.332 0 0 1-1.174 3.841C15.629 6.53 18 5.622 18 3a1 1 0 0 1 2 0 5.137 5.137 0 0 1-1.738 4H20a4 4 0 0 1 4 4ZM11 3a7.71 7.71 0 0 0 1 3.013A7.71 7.71 0 0 0 13 3a1 1 0 0 0-2 0Zm2 21h4a5 5 0 0 0 5-5v-4h-9Z"/></svg>
  