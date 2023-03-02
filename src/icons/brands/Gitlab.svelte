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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m23.93 13.344-1.281-3.945-2.541-7.824a.973.973 0 0 0-.934-.671h-.006a.967.967 0 0 0-.927.676l-2.417 7.442H8.18L5.759 1.581a.967.967 0 0 0-.928-.676h-.006a.975.975 0 0 0-.936.677L1.354 9.401.07 13.344c-.19.586.016 1.223.514 1.585l11.095 8.061a.55.55 0 0 0 .641 0l11.097-8.061c.497-.361.703-.998.513-1.585zm-2.914-3.231-7.542 9.663 3.141-9.663h4.401zM12 20.788l-.273-.842-3.192-9.833h6.936L12 20.788zM7.389 10.113l3.137 9.663-7.537-9.663h4.4zm11.787-7.882 2.206 6.793h-4.413l2.207-6.793zm-14.351 0 2.21 6.793H2.622l2.203-6.793zm-3.6 11.818a.33.33 0 0 1-.119-.368l.968-2.97 1.409 1.806 5.711 7.321-7.969-5.789zm21.551 0-7.968 5.788 2.26-2.896 4.862-6.23.964 2.969a.33.33 0 0 1-.118.369z"/></svg>
  