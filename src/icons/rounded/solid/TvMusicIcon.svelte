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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19 2H5C2.243 2 0 4.243 0 7v7c0 2.757 2.243 5 5 5h6v1H8a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-3v-1h6c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5Zm-4 6h-1v4.5a2.5 2.5 0 1 1-2-2.45V8c0-1.103.897-2 2-2h1a1 1 0 1 1 0 2Z"/></svg>
  