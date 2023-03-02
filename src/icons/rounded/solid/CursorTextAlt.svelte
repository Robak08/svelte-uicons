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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M13 9v3h1a1 1 0 0 1 0 2h-1v1a1 1 0 0 0 1 1 1 1 0 0 1 0 2 2.981 2.981 0 0 1-2-.78 2.981 2.981 0 0 1-2 .78 1 1 0 0 1 0-2 1 1 0 0 0 1-1v-1h-1a1 1 0 0 1 0-2h1V9a1 1 0 0 0-1-1 1 1 0 0 1 0-2 2.981 2.981 0 0 1 2 .78A2.981 2.981 0 0 1 14 6a1 1 0 0 1 0 2 1 1 0 0 0-1 1Zm11 12a2.993 2.993 0 0 1-5.816 1H5.816A2.993 2.993 0 1 1 2 18.184V5.816A2.993 2.993 0 1 1 5.816 2h12.368A2.993 2.993 0 1 1 22 5.816v12.368A2.99 2.99 0 0 1 24 21Zm-4-2.816V5.816A2.987 2.987 0 0 1 18.184 4H5.816A2.987 2.987 0 0 1 4 5.816v12.368A2.987 2.987 0 0 1 5.816 20h12.368A2.987 2.987 0 0 1 20 18.184Z"/></svg>
  