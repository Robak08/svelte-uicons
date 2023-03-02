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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m23.944 12.669-3.031-8.66a3.004 3.004 0 0 0-2.832-2.01H13V1c-.006-1.308-1.995-1.307-2 0v1H5.919a3.004 3.004 0 0 0-2.832 2.009l-3.031 8.66c-.037.106-.056.632-.056.632 0 2.506 1.871 4.567 4.26 4.692a4.46 4.46 0 0 0 3.338-1.229A4.517 4.517 0 0 0 9 13.5s-.021-.732-.061-.842l-3.145-8.65c.041-.005.083-.008.125-.008H11v18H5c-1.308.006-1.307 1.995 0 2h14c1.308-.006 1.307-1.995 0-2h-6V4h5.081c.042 0 .084.002.125.008l-3.146 8.65c-.04.109-.061.842-.061.842a4.52 4.52 0 0 0 1.402 3.264c2.809 2.701 7.648.752 7.598-3.462 0 0-.019-.526-.056-.632ZM6.572 12H2.409l2.042-5.833L6.572 12Zm12.977-5.833L21.591 12h-4.163l2.121-5.833Z"/></svg>
  