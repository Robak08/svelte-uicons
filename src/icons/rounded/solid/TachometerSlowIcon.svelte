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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20.047 4.076C8.4-5.635-6.66 9.523 3.189 21.105a2.318 2.318 0 0 0 3.964-.465l.613-1.1a1 1 0 0 1 .874-.514h6.823a1 1 0 0 1 .874.514l.629 1.133a2.316 2.316 0 0 0 3.9.486 12.057 12.057 0 0 0-.819-17.083ZM12 15a2.008 2.008 0 0 1-1.932-2.518L6.293 8.707a1 1 0 0 1 1.414-1.414l3.775 3.775A2 2 0 1 1 12 15Z"/></svg>
  