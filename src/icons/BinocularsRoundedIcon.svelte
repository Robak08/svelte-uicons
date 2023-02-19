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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-binoculars {customClass}"><path d="M22.536 6.464A4.963 4.963 0 0 0 20 5.101V3c0-1.654-1.346-3-3-3s-3 1.346-3 3v2h-4V3c0-1.654-1.346-3-3-3S4 1.346 4 3v2.101a4.967 4.967 0 0 0-2.536 1.363A4.968 4.968 0 0 0 0 10v8.5C0 21.533 2.467 24 5.5 24c2.979 0 5.406-2.382 5.492-5.34 0-.014.008-.026.008-.04V13c0-.551.449-1 1-1s1 .449 1 1v5.62c0 .014.008.026.008.04.086 2.958 2.513 5.34 5.492 5.34 3.033 0 5.5-2.467 5.5-5.5V10c0-1.335-.52-2.591-1.464-3.536ZM16 3c0-.551.449-1 1-1s1 .449 1 1v2h-2V3ZM7 2c.551 0 1 .449 1 1v2H6V3c0-.551.449-1 1-1ZM5.5 22C3.57 22 2 20.43 2 18.5S3.57 15 5.5 15 9 16.57 9 18.5 7.43 22 5.5 22ZM12 10c-1.654 0-3 1.346-3 3v1.261C8.048 13.474 6.828 13 5.5 13s-2.548.474-3.5 1.261V10c0-.801.312-1.555.879-2.121A2.98 2.98 0 0 1 5 7.001h14.001c.801 0 1.554.312 2.121.878S22 9.199 22 10v4.261C21.048 13.474 19.828 13 18.5 13s-2.548.474-3.5 1.261V13c0-1.654-1.346-3-3-3Zm6.5 12c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5Z"/></svg>
  