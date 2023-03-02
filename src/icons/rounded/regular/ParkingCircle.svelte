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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M8 19a1 1 0 0 1-1-1V9c0-2.206 1.794-4 4-4h2.5C15.981 5 18 7.019 18 9.5S15.981 14 13.5 14H9v4a1 1 0 0 1-1 1Zm1-7h4.5c1.379 0 2.5-1.122 2.5-2.5S14.879 7 13.5 7H11c-1.103 0-2 .897-2 2v3Zm3 12C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12Zm0-22C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2Z"/></svg>
  