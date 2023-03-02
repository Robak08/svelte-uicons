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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19 12h5v7c0 2.757-2.243 5-5 5H5c-2.757 0-5-2.243-5-5v-7h5v1a1 1 0 1 0 2 0v-1h10v1a1 1 0 1 0 2 0v-1Zm5-3v1h-5V9a1 1 0 1 0-2 0v1H7V9a1 1 0 1 0-2 0v1H0V9c0-2.757 2.243-5 5-5h1.101A5.01 5.01 0 0 1 11 0h2a5.01 5.01 0 0 1 4.899 4H19c2.757 0 5 2.243 5 5ZM8.184 4h7.631a2.996 2.996 0 0 0-2.816-2h-2a2.996 2.996 0 0 0-2.816 2Z"/></svg>
  