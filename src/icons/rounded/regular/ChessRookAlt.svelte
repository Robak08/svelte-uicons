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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19 18V8.829A3.006 3.006 0 0 0 21 6V3a3 3 0 0 0-3-3h-1a2.987 2.987 0 0 0-2 .766A2.987 2.987 0 0 0 13 0h-2a2.987 2.987 0 0 0-2 .766A2.987 2.987 0 0 0 7 0H6a3 3 0 0 0-3 3v3a3.006 3.006 0 0 0 2 2.829V18a3 3 0 0 0 0 6h14a3 3 0 0 0 0-6ZM6 7a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 0 2 0V3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1a1 1 0 0 0 2 0V3a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1 1 1 0 0 0-1 1v10H7V8a1 1 0 0 0-1-1Zm13 15H5a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2Zm-9-10v-2a2 2 0 0 1 4 0v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1Z"/></svg>
  