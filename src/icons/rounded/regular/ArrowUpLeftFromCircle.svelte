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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M2 3.414V10a1 1 0 0 1-2 0V3c0-1.654 1.346-3 3-3h7a1 1 0 0 1 0 2H3.414l12.293 12.293a.999.999 0 1 1-1.414 1.414L2 3.414ZM14 4a9.969 9.969 0 0 0-3.333.569 1 1 0 1 0 .667 1.885 7.976 7.976 0 0 1 2.667-.455c4.411 0 8 3.589 8 8s-3.589 8-8 8-8-3.589-8-8c0-.915.153-1.812.455-2.667a1 1 0 0 0-1.885-.667 9.969 9.969 0 0 0-.569 3.333c0 5.514 4.486 10 10 10s10-4.486 10-10S19.514 4 14 4Z"/></svg>
  