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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m21.8 5.579-7-4.724a4.979 4.979 0 0 0-5.6 0l-7 4.724A5 5 0 0 0 0 9.724V19a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V9.724a5 5 0 0 0-2.2-4.145ZM22 19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9.724a3 3 0 0 1 1.322-2.487l7-4.724a2.986 2.986 0 0 1 3.356 0l7 4.724A3 3 0 0 1 22 9.724ZM12 7.006a6 6 0 0 0-4.235 10.251l1.824 1.784a3.465 3.465 0 0 0 4.821 0l1.833-1.792A6 6 0 0 0 12 7.006Zm2.836 8.821-1.825 1.785a1.454 1.454 0 0 1-2.023 0l-1.817-1.777a4 4 0 1 1 5.665-.008ZM13 13a1 1 0 1 1-1-1 1 1 0 0 1 1 1Z"/></svg>
  