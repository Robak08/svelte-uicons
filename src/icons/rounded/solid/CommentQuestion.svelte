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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12.836.028a12.047 12.047 0 0 0-9.327 3.493A12.024 12.024 0 0 0 .03 12.854C.47 19.208 6.082 24 13.084 24h5.917c2.757 0 5-2.243 5-5v-6.66C24 5.861 19.096.454 12.836.028ZM11.903 19a1.5 1.5 0 1 1 .001-3.001A1.5 1.5 0 0 1 11.903 19Zm1.928-6.512c-.521.287-.928.951-.928 1.512a1 1 0 1 1-2 0c0-1.285.807-2.627 1.963-3.264a1.995 1.995 0 0 0 1.004-2.125 2.025 2.025 0 0 0-1.596-1.596 2.002 2.002 0 0 0-2.371 1.967 1 1 0 1 1-2 0c0-1.185.521-2.301 1.428-3.063a4.033 4.033 0 0 1 3.289-.874c1.613.283 2.938 1.607 3.221 3.221a4.023 4.023 0 0 1-2.009 4.223Z"/></svg>
  