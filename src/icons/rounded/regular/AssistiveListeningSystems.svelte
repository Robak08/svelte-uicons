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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M2 23a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm5-7a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm3-3a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-7.293 4.293a.999.999 0 1 0-1.414 1.414l4 4a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414l-4-4ZM23.9 6.086A11.641 11.641 0 0 0 17.877.083a.999.999 0 1 0-.798 1.834 9.636 9.636 0 0 1 4.991 4.974 1 1 0 1 0 1.831-.804ZM15 11c0 .493-.181.967-.509 1.333a1 1 0 1 0 1.489 1.334A3.987 3.987 0 0 0 17 11c0-2.206-1.794-4-4-4a4.003 4.003 0 0 0-3.779 2.688.999.999 0 1 0 1.888.656A2.002 2.002 0 0 1 15 11Zm-2.119-7.999c-4.022.059-7.309 2.98-7.815 6.947a1 1 0 0 0 .866 1.118 1.009 1.009 0 0 0 1.119-.866c.378-2.969 2.843-5.155 5.86-5.199 1.63-.064 3.148.589 4.301 1.725A5.956 5.956 0 0 1 19.001 11c0 1.2-.355 2.359-1.028 3.351-.897 1.32-.972 2.576-.972 3.649 0 2.206-1.794 4-4 4a1 1 0 1 0 0 2c3.309 0 6-2.691 6-6 0-.877.047-1.673.627-2.526A7.94 7.94 0 0 0 21.001 11a7.94 7.94 0 0 0-2.385-5.698 7.94 7.94 0 0 0-5.734-2.301Z"/></svg>
  