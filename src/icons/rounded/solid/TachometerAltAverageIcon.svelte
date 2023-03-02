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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20 4.052A12 12 0 0 0 3.611 21.571 4.991 4.991 0 0 0 7.12 23h9.766a4.841 4.841 0 0 0 3.355-1.288A12.053 12.053 0 0 0 20 4.052ZM12 15a2 2 0 0 1-1-3.723V6a1 1 0 0 1 2 0v5.277A2 2 0 0 1 12 15Zm5.953 4.75a1 1 0 0 1-1.324-1.5A7 7 0 0 0 19 13a7 7 0 0 0-3.5-6.065 1 1 0 0 1 1-1.731 9.011 9.011 0 0 1 1.453 14.546ZM3 13a.28.28 0 0 1 .006-.028A9 9 0 0 1 7.5 5.2a1 1 0 0 1 1 1.731A7 7 0 0 0 5 13a7 7 0 0 0 2.371 5.25 1 1 0 0 1-1.324 1.5A9 9 0 0 1 3 13Z"/></svg>
  