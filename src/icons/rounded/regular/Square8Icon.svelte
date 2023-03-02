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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M14.519 11.419A3.483 3.483 0 0 0 15.5 9c0-1.93-1.57-3.5-3.5-3.5S8.5 7.07 8.5 9c0 .939.377 1.789.981 2.419C8.585 12.153 8 13.254 8 14.5c0 2.206 1.794 4 4 4s4-1.794 4-4c0-1.246-.585-2.347-1.481-3.081ZM10.5 9c0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5-.673 1.5-1.5 1.5-1.5-.673-1.5-1.5Zm1.5 7.5c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2ZM19 0H5C2.243 0 0 2.243 0 5v14c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5V5c0-2.757-2.243-5-5-5Zm3 19c0 1.654-1.346 3-3 3H5c-1.654 0-3-1.346-3-3V5c0-1.654 1.346-3 3-3h14c1.654 0 3 1.346 3 3v14Z"/></svg>
  