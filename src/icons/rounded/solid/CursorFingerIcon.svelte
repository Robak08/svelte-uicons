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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M17.981 9.376 13 8.18v-5.6A2.564 2.564 0 0 0 10.913.034 2.5 2.5 0 0 0 8 2.5V17a1 1 0 0 1-2 0V9.66L3.211 13.3a5.021 5.021 0 0 0 .249 6.794l2.4 2.425A5.036 5.036 0 0 0 9.414 24H17a5 5 0 0 0 5-5v-4.721a5 5 0 0 0-4.019-4.903z"/></svg>
  