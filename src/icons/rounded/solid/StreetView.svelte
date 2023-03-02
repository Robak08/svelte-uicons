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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M9.5 2.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0ZM7 12v-2c0-2.206 1.794-4 4-4h2c2.206 0 4 1.794 4 4v2a3.006 3.006 0 0 1-2 2.829V19a1 1 0 1 1-2 0v-4h-2v4a1 1 0 1 1-2 0v-4.171A3.006 3.006 0 0 1 7 12Zm11.203 3.587a.998.998 0 0 0-1.203.979v2.372c0 1.563-1.198 2.889-2.757 2.991-.701.046-1.449.071-2.243.071s-1.542-.025-2.243-.071C8.197 21.827 7 20.502 7 18.938v-2.372a.998.998 0 0 0-1.203-.979C2.059 16.362 0 17.752 0 19.5 0 22.592 6.221 24 12 24s12-1.408 12-4.5c0-1.748-2.059-3.138-5.797-3.913Z"/></svg>
  