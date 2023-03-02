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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 7v1H0V7a5 5 0 0 1 5-5h1V1a1 1 0 0 1 2 0v1h8V1a1 1 0 0 1 2 0v1h1a5 5 0 0 1 5 5Zm0 10c0 3.86-3.141 7-7 7s-7-3.14-7-7 3.141-7 7-7 7 3.14 7 7Zm-5 .586-1-1V15a1 1 0 0 0-2 0v2c0 .265.105.52.293.707L17.586 19A1 1 0 0 0 19 17.586ZM8 17a8.98 8.98 0 0 1 3.349-7H0v9a5 5 0 0 0 5 5h6.349A8.98 8.98 0 0 1 8 17Z"/></svg>
  