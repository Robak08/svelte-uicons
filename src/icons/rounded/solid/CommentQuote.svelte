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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12.836.028a12.05 12.05 0 0 0-9.327 3.493A12.024 12.024 0 0 0 .03 12.854C.47 19.208 6.082 24 13.083 24H19c2.757 0 5-2.243 5-5v-6.66C24 5.861 19.097.454 12.836.028ZM11 13c0 2.206-1.794 4-4 4a1 1 0 1 1 0-2c1.103 0 2-.897 2-2H7.5A1.5 1.5 0 0 1 6 11.5V10a2 2 0 0 1 2-2h1.5A1.5 1.5 0 0 1 11 9.5V13Zm7 0c0 2.206-1.794 4-4 4a1 1 0 1 1 0-2c1.103 0 2-.897 2-2h-1.5a1.5 1.5 0 0 1-1.5-1.5V10a2 2 0 0 1 2-2h1.5A1.5 1.5 0 0 1 18 9.5V13Z"/></svg>
  