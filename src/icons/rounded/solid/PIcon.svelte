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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M3 24a1 1 0 0 1-1-1V5c0-2.757 2.243-5 5-5h7.5C18.636 0 22 3.364 22 7.5S18.636 15 14.5 15H4v8a1 1 0 0 1-1 1Zm1-11h10.5c3.033 0 5.5-2.468 5.5-5.5S17.533 2 14.5 2H7C5.346 2 4 3.346 4 5v8Z"/></svg>
  