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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M8.586 18H7a1 1 0 0 1-1-1v-1.586c0-1.068.416-2.073 1.172-2.828l5.707-5.707A3.002 3.002 0 0 1 18 9c0 .801-.313 1.555-.879 2.122l-5.707 5.707a3.975 3.975 0 0 1-2.828 1.172ZM8 16h.586c.534 0 1.036-.208 1.414-.586l5.707-5.707c.189-.189.293-.44.293-.707s-.104-.518-.293-.707a1 1 0 0 0-1.414 0L8.586 14A2.017 2.017 0 0 0 8 15.414V16Zm11 8h-5.917C6.082 24 .471 19.208.029 12.854a12.027 12.027 0 0 1 3.48-9.333A12.043 12.043 0 0 1 12.836.029C19.097.454 24 5.862 24 12.341v6.66c0 2.757-2.243 5-5 5ZM12.015 2.001a10.015 10.015 0 0 0-7.091 2.933 10.022 10.022 0 0 0-2.898 7.782c.372 5.38 5.023 9.285 11.058 9.285h5.917c1.654 0 3-1.346 3-3v-6.66c0-5.431-4.085-9.962-9.299-10.316a9.852 9.852 0 0 0-.687-.023Z"/></svg>
  