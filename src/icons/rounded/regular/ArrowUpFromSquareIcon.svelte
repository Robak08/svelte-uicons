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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M5.279 6.693a1 1 0 0 1 .027-1.414L9.893.865c1.105-1.106 3.095-1.12 4.229.014l4.572 4.4a1 1 0 0 1-1.387 1.442L13 2.575V16a1 1 0 0 1-2 0V2.575L6.693 6.721a1 1 0 0 1-1.414-.027ZM21 8a1 1 0 0 0-1 1v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V9a1 1 0 0 0-2 0v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V9a1 1 0 0 0-1-1Z"/></svg>
  