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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M6.435 9.444c-.208-.155-.416-.233-.624-.233h-.934v5.597h.935c.208 0 .416-.078.624-.233.208-.155.312-.388.312-.7v-3.731c-.001-.311-.106-.545-.313-.7zM21.648 0H2.352A2.351 2.351 0 0 0 0 2.346v19.307A2.352 2.352 0 0 0 2.352 24h19.296A2.351 2.351 0 0 0 24 21.654V2.346A2.351 2.351 0 0 0 21.648 0zM8.261 13.885c0 1.008-.622 2.534-2.591 2.531H3.184V7.552h2.538c1.899 0 2.537 1.525 2.538 2.533l.001 3.8zm5.393-4.749H10.8v2.058h1.745v1.584H10.8v2.058h2.855v1.584h-3.331a1.082 1.082 0 0 1-1.11-1.055V8.663a1.083 1.083 0 0 1 1.056-1.109h3.385l-.001 1.582zm5.552 6.176c-.707 1.647-1.974 1.319-2.541 0l-2.064-7.757h1.745l1.592 6.092 1.584-6.092h1.745l-2.061 7.757z"/></svg>
  