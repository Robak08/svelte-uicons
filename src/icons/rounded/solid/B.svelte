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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M15.5 24H7c-2.757 0-5-2.243-5-5V5c0-2.757 2.243-5 5-5h5.5C16.084 0 19 2.916 19 6.5a6.484 6.484 0 0 1-1.99 4.677C19.868 11.86 22 14.436 22 17.5c0 3.584-2.916 6.5-6.5 6.5ZM4 13v6c0 1.654 1.346 3 3 3h8.5c2.481 0 4.5-2.019 4.5-4.5S17.981 13 15.5 13H4Zm0-2h8.5c2.481 0 4.5-2.019 4.5-4.5S14.981 2 12.5 2H7C5.346 2 4 3.346 4 5v6Z"/></svg>
  