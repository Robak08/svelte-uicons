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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-beacon {customClass}"><path d="M12.85.03C9.38-.21 5.97 1.06 3.51 3.52a12.029 12.029 0 0 0-3.48 9.33C.46 19.1 5.87 24 12.34 24H19c2.94 0 5-2.4 5-5.85v-5.82C24 5.87 19.1.46 12.85.03ZM22 18.15c0 2.3-1.21 3.85-3 3.85h-6.66c-5.42 0-9.95-4.08-10.31-9.28-.2-2.9.86-5.74 2.9-7.79A10.02 10.02 0 0 1 12.02 2c.23 0 .47 0 .7.02C17.93 2.38 22 6.91 22 12.33v5.82Z"/></svg>
  