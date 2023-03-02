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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M16 10a1 1 0 0 1 0-2h8V7c0-2.757-2.243-5-5-5h-1V1a1 1 0 0 0-2 0v1H8V1a1 1 0 0 0-2 0v1H5C2.243 2 0 4.243 0 7v1h8a1 1 0 0 1 0 2H0v9c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5v-9h-8Zm-4 11a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-5a1 1 0 0 1-2 0V9a1 1 0 0 1 2 0v7Z"/></svg>
  