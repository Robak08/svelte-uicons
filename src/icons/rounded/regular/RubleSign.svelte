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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M14.5 15c4.136 0 7.5-3.364 7.5-7.5S18.636 0 14.5 0H10C7.243 0 5 2.243 5 5v8H3a1 1 0 1 0 0 2h2v2H3a1 1 0 1 0 0 2h2v4a1 1 0 1 0 2 0v-4h8a1 1 0 1 0 0-2H7v-2h7.5ZM7 5c0-1.654 1.346-3 3-3h4.5C17.533 2 20 4.468 20 7.5S17.533 13 14.5 13H7V5Z"/></svg>
  