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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 20.5a3.5 3.5 0 1 1-6.378-1.987L1.316 23.949a1 1 0 0 1-.632-1.9l.79-.263L.15 17.718a3 3 0 0 1 1.859-3.765l.6 1.839a3 3 0 0 0 3.823 1.915L16 14.441v2.505l2-.667V5a5.006 5.006 0 0 1 5-5 1 1 0 0 1 0 2 3 3 0 0 0-3 3v12c0 .018-.007.034-.008.051A3.486 3.486 0 0 1 24 20.5ZM5.787 15.8l8.789-2.977a1 1 0 0 0 .628-1.262l-1.443-4.356a3.029 3.029 0 0 0-3.854-2.048L5.008 6.84A3 3 0 0 0 3.1 10.623l1.415 4.529a1 1 0 0 0 1.272.648Z"/></svg>
  