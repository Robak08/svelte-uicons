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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M8 8.5a1.5 1.5 0 1 1-3.001-.001A1.5 1.5 0 0 1 8 8.5ZM24 19v-6.66C24 5.862 19.096.454 12.836.029a12.016 12.016 0 0 0-9.327 3.492A12.022 12.022 0 0 0 .03 12.854C.47 19.208 6.082 24 13.084 24h5.917c2.757 0 5-2.243 5-5ZM12.701 2.024C17.916 2.378 22 6.91 22 12.34V19c0 1.654-1.346 3-3 3h-5.917c-6.035 0-10.686-3.905-11.059-9.285a10.024 10.024 0 0 1 2.899-7.782 10.019 10.019 0 0 1 7.777-2.91ZM6.707 16.207 11 11.914l2.586 2.586c.779.78 2.049.78 2.828 0l3.293-3.293a.999.999 0 1 0-1.414-1.414L15 13.086 12.414 10.5c-.756-.756-2.072-.756-2.828 0l-4.293 4.293a.999.999 0 1 0 1.414 1.414Z"/></svg>
  