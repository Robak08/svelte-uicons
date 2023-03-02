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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M11 14H3v-4h8v4Zm2-4v4h8v-4h-8ZM8 5a5.003 5.003 0 0 0-4.576 3h17.152A5.003 5.003 0 0 0 16 5h-3V2.025c3.199.144 5.668.918 5.694.927a1.001 1.001 0 0 0 .612-1.904C19.173 1.005 15.999 0 12 0S4.827 1.005 4.694 1.048a1 1 0 1 0 .612 1.904c.027-.009 2.483-.784 5.694-.927V5H8Zm9 12a1 1 0 1 1-2 0v-1H9v1a1 1 0 1 1-2 0v-1H3v1c0 2.261 1.518 4.154 3.581 4.77l-.433.708a.999.999 0 1 0 1.705 1.044L8.785 22h6.431l.932 1.522a.999.999 0 1 0 1.705-1.044l-.433-.708c2.063-.616 3.581-2.509 3.581-4.77v-1h-4v1Z"/></svg>
  