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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M15.707 9.707 13.414 12l2.293 2.293a.999.999 0 1 1-1.414 1.414L12 13.414l-2.293 2.293a.997.997 0 0 1-1.414 0 .999.999 0 0 1 0-1.414L10.586 12 8.293 9.707a.999.999 0 1 1 1.414-1.414L12 10.586l2.293-2.293a.999.999 0 1 1 1.414 1.414ZM24 12.34V19c0 2.757-2.243 5-5 5h-5.917C6.082 24 .471 19.208.029 12.854a12.028 12.028 0 0 1 3.48-9.333A12.026 12.026 0 0 1 12.836.028C19.097.454 24 5.861 24 12.34Zm-2 0c0-5.431-4.085-9.962-9.299-10.315a10.018 10.018 0 0 0-7.778 2.911 10.02 10.02 0 0 0-2.898 7.781c.372 5.38 5.023 9.284 11.058 9.284H19c1.654 0 3-1.346 3-3v-6.66Z"/></svg>
  