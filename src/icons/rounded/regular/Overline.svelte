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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 24c-4.411 0-8-3.589-8-8v-4c0-4.411 3.589-8 8-8s8 3.589 8 8v4c0 4.411-3.589 8-8 8Zm0-18c-3.309 0-6 2.691-6 6v4c0 3.309 2.691 6 6 6s6-2.691 6-6v-4c0-3.309-2.691-6-6-6Zm10-5a1 1 0 0 0-1-1H3a1 1 0 1 0 0 2h18a1 1 0 0 0 1-1Z"/></svg>
  