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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M9 8.5v2a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5Zm8.5-.5h-2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5Zm-10 16a3.5 3.5 0 0 0 0-7 3.5 3.5 0 0 0 0 7ZM24 20a1 1 0 0 1-1 1H12.977c.431-7.288-10.1-8.2-10.955-.986A5 5 0 0 1 0 16V5a5.006 5.006 0 0 1 5-5h12a5.006 5.006 0 0 1 5 5v14h1a1 1 0 0 1 1 1ZM11 8.5A2.5 2.5 0 0 0 8.5 6h-4A2.5 2.5 0 0 0 2 8.5v2A2.5 2.5 0 0 0 4.5 13h4a2.5 2.5 0 0 0 2.5-2.5Zm9 0A2.5 2.5 0 0 0 17.5 6h-2A2.5 2.5 0 0 0 13 8.5v2a2.5 2.5 0 0 0 2.5 2.5h2a2.5 2.5 0 0 0 2.5-2.5Z"/></svg>
  