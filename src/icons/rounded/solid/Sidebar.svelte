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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M9 2H5C2.243 2 0 4.243 0 7v10c0 2.757 2.243 5 5 5h4V2ZM4 6h1a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2Zm1 10H4a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2Zm0-4H4a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2Zm19-5v10c0 2.757-2.243 5-5 5h-8V2h8c2.757 0 5 2.243 5 5Z"/></svg>
  