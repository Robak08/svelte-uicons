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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M10.5 1.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S12.83 3 12 3s-1.5-.67-1.5-1.5ZM17 3c.83 0 1.5-.67 1.5-1.5S17.83 0 17 0s-1.5.67-1.5 1.5S16.17 3 17 3Zm5-3c-.83 0-1.5.67-1.5 1.5S21.17 3 22 3s1.5-.67 1.5-1.5S22.83 0 22 0ZM7 3c.83 0 1.5-.67 1.5-1.5S7.83 0 7 0 5.5.67 5.5 1.5 6.17 3 7 3ZM2 0C1.17 0 .5.67.5 1.5S1.17 3 2 3s1.5-.67 1.5-1.5S2.83 0 2 0Zm15.31 17.28L13 21.43V6c0-.55-.45-1-1-1s-1 .45-1 1v15.42l-4.31-4.15a.996.996 0 1 0-1.38 1.44l4.57 4.4c.57.57 1.32.88 2.12.88s1.55-.31 2.11-.87l4.59-4.41a.996.996 0 1 0-1.38-1.44Z"/></svg>
  