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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19 0H5C2.243 0 0 2.243 0 5v14c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5V5c0-2.757-2.243-5-5-5ZM5.5 20a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 5.5 20Zm0-13a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 5.5 7Zm13 13a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 18.5 20Zm0-13a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 18.5 7Z"/></svg>
  