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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M17.98 9.376 12 8.18V3.107A3.081 3.081 0 0 0 9.5.041 3 3 0 0 0 6 3v6.661L3.211 13.3a5.021 5.021 0 0 0 .249 6.794l2.4 2.425A5.036 5.036 0 0 0 9.414 24H17a5.006 5.006 0 0 0 5-5v-4.721a5.013 5.013 0 0 0-4.02-4.903ZM20 19a3 3 0 0 1-3 3H9.414a3.022 3.022 0 0 1-2.134-.891l-2.4-2.428a3.03 3.03 0 0 1-.116-4.123L6 12.945V17a1 1 0 0 0 2 0V3a1 1 0 0 1 1.176-.985A1.082 1.082 0 0 1 10 3.107V9a1 1 0 0 0 .8.98l6.784 1.357A3.01 3.01 0 0 1 20 14.279Z"/></svg>
  