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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-truck-tow {customClass}"><path d="M19 6h-2c-1.103 0-2 .897-2 2v4h-1.032L4.268.36A1 1 0 0 0 3.5 0H3a1 1 0 0 0-1 1v5.5a.5.5 0 0 1-.5.5H1a1 1 0 0 0 0 2h.5C2.878 9 4 7.878 4 6.5V3.162L11.365 12H3c-1.654 0-3 1.346-3 3v2c0 1.654 1.346 3 3 3h.037A3.504 3.504 0 0 0 6.5 24a3.504 3.504 0 0 0 3.463-4h4.074a3.504 3.504 0 0 0 3.463 4 3.504 3.504 0 0 0 3.445-4.113A4.007 4.007 0 0 0 24 16v-5c0-2.757-2.243-5-5-5Zm0 2c1.654 0 3 1.346 3 3v1h-5V8h2ZM2 17v-2c0-.551.449-1 1-1h12v4H3c-.551 0-1-.449-1-1Zm6 3.5c0 .827-.673 1.5-1.5 1.5S5 21.327 5 20.5c0-.189.037-.356.091-.5H7.91c.054.144.091.311.091.5Zm9.5 1.5c-.827 0-1.5-.673-1.5-1.5 0-.189.037-.356.091-.5h2.819c.054.144.091.311.091.5 0 .827-.673 1.5-1.5 1.5Zm2.5-4h-3v-4h5v2c0 1.103-.897 2-2 2Z"/></svg>
  