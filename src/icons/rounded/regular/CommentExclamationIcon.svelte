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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 15a1 1 0 0 1-1-1V5a1 1 0 1 1 2 0v9a1 1 0 0 1-1 1Zm0 2a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 12 17Zm12 2v-6.66C24 5.861 19.096.454 12.836.028a12.042 12.042 0 0 0-9.327 3.493A12.024 12.024 0 0 0 .03 12.854C.47 19.208 6.082 24 13.084 24h5.917c2.757 0 5-2.243 5-5ZM12.701 2.024C17.916 2.378 22 6.909 22 12.339v6.66c0 1.654-1.346 3-3 3h-5.917c-6.035 0-10.686-3.904-11.059-9.284a10.02 10.02 0 0 1 2.899-7.781A10.016 10.016 0 0 1 12.7 2.023Z"/></svg>
  