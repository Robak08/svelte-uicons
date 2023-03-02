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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M7.39 3.068a5.023 5.023 0 0 1 9.22 0A6.5 6.5 0 0 0 12 6.051a6.515 6.515 0 0 0-4.61-2.983ZM11 9.5c-.246-6.289-9.467-5.743-8.965.524a53.989 53.989 0 0 0 8.706.937A4.427 4.427 0 0 0 11 9.5ZM17.5 5a4.5 4.5 0 0 0-4.24 5.964 52.563 52.563 0 0 0 8.705-.934A4.506 4.506 0 0 0 17.5 5ZM2.736 12.19c.014.029 6.283 10.143 6.283 10.143a3.521 3.521 0 0 0 5.96 0s6.269-10.109 6.282-10.133A54.989 54.989 0 0 1 12 13a55.474 55.474 0 0 1-9.264-.81Z"/></svg>
  