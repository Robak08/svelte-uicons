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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23 12a1 1 0 0 1-1-1c0-4.962-4.037-9-9-9a1 1 0 1 1 0-2c6.065 0 11 4.935 11 11a1 1 0 0 1-1 1Zm-3-1c0-3.86-3.141-7-7-7a1 1 0 1 0 0 2c2.757 0 5 2.243 5 5a1 1 0 1 0 2 0Zm-4 2v6c0 2.757-2.243 5-5 5H5c-2.757 0-5-2.243-5-5v-6c0-2.757 2.243-5 5-5h6c2.757 0 5 2.243 5 5ZM5 12a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"/></svg>
  