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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M16.949 15.293a5.178 5.178 0 0 1-9.9.007.994.994 0 0 1 .96-1.3h7.981a.994.994 0 0 1 .959 1.293ZM24 12a12.013 12.013 0 0 1-12 12C-3.9 23.4-3.893.6 12 0a12.013 12.013 0 0 1 12 12Zm-2 0A10.011 10.011 0 0 0 12 2c-13.248.5-13.245 19.5 0 20a10.011 10.011 0 0 0 10-10Zm-6-4a2 2 0 0 0-2 2c0 1 .895 1 2 1s2 0 2-1a2 2 0 0 0-2-2Zm-5 2a1 1 0 0 0-1-1H7a1 1 0 0 0 0 2h3a1 1 0 0 0 1-1Z"/></svg>
  