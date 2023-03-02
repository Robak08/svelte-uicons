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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m22.707 22.293-2.541-2.541A9.935 9.935 0 0 0 22 14v-4c0-5.514-4.486-10-10-10S2 4.486 2 10v4c0 5.514 4.486 10 10 10a9.957 9.957 0 0 0 6.851-2.735l2.442 2.442a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414ZM12 22c-4.411 0-8-3.589-8-8v-4c0-4.411 3.589-8 8-8s8 3.589 8 8v4a7.942 7.942 0 0 1-1.273 4.313l-2.02-2.02a.999.999 0 1 0-1.414 1.414l2.144 2.144A7.96 7.96 0 0 1 12 22Z"/></svg>
  