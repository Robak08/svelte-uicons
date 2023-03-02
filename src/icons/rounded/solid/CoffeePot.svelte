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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 13a1 1 0 0 1-2 0 25.235 25.235 0 0 0-1.748-9.111A3.093 3.093 0 0 0 17 2v3H3.523L2.072 1.372A1.007 1.007 0 0 1 3 0h14.463a4.963 4.963 0 0 1 4.65 3.157A27.247 27.247 0 0 1 24 13Zm-3.027 5.47C20.3 11.987 18.235 8.383 17.261 7H3.739a18.948 18.948 0 0 0-2.381 5H15a1 1 0 0 1 0 2H.79a33.33 33.33 0 0 0-.763 4.47A5.043 5.043 0 0 0 5 24h11a5.043 5.043 0 0 0 4.973-5.53Z"/></svg>
  