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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M1 24a1 1 0 0 1-1-1V4a4 4 0 0 1 4-4h7a4 4 0 0 1 4 4v5a4 4 0 0 1-4 4H2v10a1 1 0 0 1-1 1zM20 4h-3v5a6.006 6.006 0 0 1-6 6h-.444A3.987 3.987 0 0 0 14 17h6a4 4 0 0 0 4-4V8a4 4 0 0 0-4-4z"/></svg>
  