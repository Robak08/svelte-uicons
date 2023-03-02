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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M22.918 1.082c-2.58-2.58-8.743-.04-11.1 2.316a6.2 6.2 0 0 0-.635 8L.294 22.292a1 1 0 1 0 1.414 1.414L12.6 12.816a6.179 6.179 0 0 0 8-.635c2.358-2.357 4.9-8.519 2.318-11.099Z"/></svg>
  