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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M4 20h16a2 2 0 0 1 2 2 2 2 0 0 1-2 2H4a2 2 0 0 1-2-2 2 2 0 0 1 2-2ZM21 2v4a3.006 3.006 0 0 1-2 2.829V18H5V8.829A3.006 3.006 0 0 1 3 6V2a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2v2a1 1 0 0 0 2 0V2a2 2 0 0 1 2-2 2 2 0 0 1 2 2v2a1 1 0 0 0 2 0V2a2 2 0 0 1 2-2h1a2 2 0 0 1 2 2Zm-7 9a2 2 0 0 0-4 0v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1Z"/></svg>
  