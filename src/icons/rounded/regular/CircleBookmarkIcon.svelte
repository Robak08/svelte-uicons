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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0Zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10Zm2-16h-4C8.346 6 7 7.346 7 9v7.271a1.72 1.72 0 0 0 1.066 1.595 1.718 1.718 0 0 0 1.882-.374L12 15.44l2.052 2.052a1.724 1.724 0 0 0 1.882.374A1.72 1.72 0 0 0 17 16.271V9c0-1.654-1.346-3-3-3Zm1 9.612-3-3-3 3V9c0-.551.448-1 1-1h4c.552 0 1 .449 1 1v6.612Z"/></svg>
  