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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m23.707 22.293-5.968-5.968A9.955 9.955 0 0 0 20 10c0-5.514-4.486-10-10-10S0 4.486 0 10s4.486 10 10 10a9.951 9.951 0 0 0 6.325-2.261l5.968 5.968a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414ZM2 10c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8-8-3.589-8-8Zm12 2c0 1.654-1.346 3-3 3v1a1 1 0 1 1-2 0v-1h-.268a3.01 3.01 0 0 1-2.598-1.499 1 1 0 0 1 1.731-1.002c.179.31.511.501.867.501H11c.551 0 1-.448 1-1a.77.77 0 0 0-.644-.761l-3.041-.506A2.763 2.763 0 0 1 6 8c0-1.654 1.346-3 3-3V4a1 1 0 1 1 2 0v1h.268a3.01 3.01 0 0 1 2.598 1.499 1 1 0 1 1-1.731 1.002A1.003 1.003 0 0 0 11.268 7H9c-.551 0-1 .448-1 1a.77.77 0 0 0 .644.761l3.041.506A2.763 2.763 0 0 1 14 12Z"/></svg>
  