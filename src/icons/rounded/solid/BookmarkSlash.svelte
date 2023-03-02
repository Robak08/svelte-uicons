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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23.707 22.293 21 19.586V6c0-2.757-2.243-5-5-5H8c-1.485 0-2.876.66-3.816 1.77L1.707.293A.999.999 0 1 0 .293 1.707l18.99 18.99.02.02 2.99 2.99a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414ZM4.703 8.789A1 1 0 0 0 3 9.5v10.767c0 1.126.676 2.121 1.722 2.537.33.131.671.194 1.01.194.737 0 1.459-.303 2-.875l4.281-4.762a1 1 0 0 0-.041-1.38L4.703 8.789Z"/></svg>
  