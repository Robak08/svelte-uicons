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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M9.236 6.4A17.974 17.974 0 0 1 23 0a1 1 0 0 1 0 2 15.979 15.979 0 0 0-12.236 5.689A1 1 0 1 1 9.236 6.4ZM23 8a10.012 10.012 0 0 0-7.453 3.333 1 1 0 0 0 1.49 1.334A8.012 8.012 0 0 1 23 10a1 1 0 0 0 0-2Zm0-4a13.883 13.883 0 0 0-10.1 4.308 1 1 0 0 0 1.444 1.384A11.9 11.9 0 0 1 23 6a1 1 0 0 0 0-2Zm-5.135 16.172a4.951 4.951 0 0 1-3.7 3.7A5.2 5.2 0 0 1 13.1 24c-.865.017-3.08.026-5.2.026-3.695-.111-6.571.708-7.773-2.592a3.625 3.625 0 0 1 2-4.258A6 6 0 0 1 13.542 13.7c.137.326.287.359.588.427l.176.042a5.013 5.013 0 0 1 3.559 6.003ZM13.784 16.1a2.722 2.722 0 0 1-2.084-1.629 4 4 0 0 0-7.609 2.352 1.892 1.892 0 0 1-1.181 2.19A1.566 1.566 0 0 0 3.532 22c1.5.036 7.9.029 9.526 0a3.126 3.126 0 0 0 .658-.082 2.974 2.974 0 0 0 2.2-2.192 3.023 3.023 0 0 0-2.132-3.626ZM23 12a5.957 5.957 0 0 0-4.8 2.4 1 1 0 0 0 1.6 1.2A3.966 3.966 0 0 1 23 14a1 1 0 0 0 0-2Z"/></svg>
  