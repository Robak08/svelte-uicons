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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m23.641 10.76-1.009-3.025A3.994 3.994 0 0 0 18.838 5H16.9A5.009 5.009 0 0 0 12 1H5a5.006 5.006 0 0 0-5 5v13.5a3.517 3.517 0 0 0 6 2.447 3.517 3.517 0 0 0 6-2.447V19h3v.5a3.5 3.5 0 0 0 7 0v-1.037A4 4 0 0 0 24 15v-2.026a7 7 0 0 0-.359-2.214Zm-2.906-2.392L21.612 11H17V7h1.838a2 2 0 0 1 1.897 1.368ZM2 6a3 3 0 0 1 3-3h7a3 3 0 0 1 3 3v11H2Zm1.5 15A1.5 1.5 0 0 1 2 19.5V19h3v.5A1.5 1.5 0 0 1 3.5 21Zm6.5-1.5a1.5 1.5 0 0 1-3 0V19h3Zm10 0a1.5 1.5 0 0 1-3 0V19h3Zm0-2.5h-3v-4h5v2a2 2 0 0 1-2 2Z"/></svg>
  