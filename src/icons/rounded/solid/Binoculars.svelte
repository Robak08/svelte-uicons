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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 18.5c0 3.033-2.467 5.5-5.5 5.5S13 21.533 13 18.5s2.467-5.5 5.5-5.5 5.5 2.467 5.5 5.5ZM5.5 13C2.467 13 0 15.467 0 18.5S2.467 24 5.5 24s5.5-2.467 5.5-5.5S8.533 13 5.5 13ZM20 4V2.5a2.5 2.5 0 1 0-5 0V4h5Zm-1 2H5a5 5 0 0 0-5 5v2.418C1.371 11.935 3.326 11 5.5 11s4.129.935 5.5 2.418V10c0-.551.449-1 1-1s1 .449 1 1v3.418C14.371 11.935 16.326 11 18.5 11s4.129.935 5.5 2.418V11a5 5 0 0 0-5-5ZM9 4V2.5A2.5 2.5 0 0 0 6.5 0h-.008a2.527 2.527 0 0 0-2.518 2.51L3.97 4H9Z"/></svg>
  