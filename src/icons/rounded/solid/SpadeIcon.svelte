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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23 13.5C23 8.358 16.021 2.375 13.881.664a3 3 0 0 0-3.762 0C7.979 2.375 1 8.357 1 13.5A6.272 6.272 0 0 0 7 20a5.82 5.82 0 0 0 3.93-1.658C10.75 20.808 10.115 22 8 22H6a1 1 0 0 0 0 2h12a1 1 0 0 0 0-2h-2c-2.115 0-2.75-1.194-2.93-3.658A5.82 5.82 0 0 0 17 20a6.272 6.272 0 0 0 6-6.5Z"/></svg>
  