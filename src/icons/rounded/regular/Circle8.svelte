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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M14.519 11.418A3.482 3.482 0 0 0 15.5 9c0-1.93-1.57-3.5-3.5-3.5S8.5 7.07 8.5 9c0 .939.377 1.789.981 2.419C8.585 12.153 8 13.254 8 14.5c0 2.206 1.794 4 4 4s4-1.794 4-4c0-1.247-.585-2.347-1.481-3.082ZM10.5 9c0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5-.673 1.5-1.5 1.5-1.5-.673-1.5-1.5Zm1.5 7.5c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2ZM12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0Zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10Z"/></svg>
  