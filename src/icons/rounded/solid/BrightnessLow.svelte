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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5Zm0-13c.83 0 1.5-.67 1.5-1.5S12.83 1 12 1s-1.5.67-1.5 1.5S11.17 4 12 4Zm0 19c.83 0 1.5-.67 1.5-1.5S12.83 20 12 20s-1.5.67-1.5 1.5.67 1.5 1.5 1.5ZM4 12c0-.83-.67-1.5-1.5-1.5S1 11.17 1 12s.67 1.5 1.5 1.5S4 12.83 4 12Zm19 0c0-.83-.67-1.5-1.5-1.5S20 11.17 20 12s.67 1.5 1.5 1.5S23 12.83 23 12Zm-4.5-5c.83 0 1.5-.67 1.5-1.5S19.33 4 18.5 4 17 4.67 17 5.5 17.67 7 18.5 7Zm-13 13c.83 0 1.5-.67 1.5-1.5S6.33 17 5.5 17 4 17.67 4 18.5 4.67 20 5.5 20Zm0-13C6.33 7 7 6.33 7 5.5S6.33 4 5.5 4 4 4.67 4 5.5 4.67 7 5.5 7ZM20 18.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5.67 1.5 1.5 1.5 1.5-.67 1.5-1.5Z"/></svg>
  