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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M16 .3a4.968 4.968 0 0 1 1.879 1.164l1.656 1.658A4.954 4.954 0 0 1 20.7 5H16zM21 7v12a5.006 5.006 0 0 1-5 5H8a5.006 5.006 0 0 1-5-5V5a5.006 5.006 0 0 1 5-5h6v5a2 2 0 0 0 2 2zm-4.192 10.413a1 1 0 0 0-1.4-.222 4.586 4.586 0 0 1-2.273.809 1.347 1.347 0 0 1-.864-.345A3.025 3.025 0 0 0 10.439 17a5.861 5.861 0 0 0-3.046 1.206 1 1 0 1 0 1.214 1.588A3.951 3.951 0 0 1 10.439 19c.246 0 .371.078.7.3a3.252 3.252 0 0 0 2 .7 6.464 6.464 0 0 0 3.456-1.193 1 1 0 0 0 .213-1.394zM17 14a1 1 0 0 0-1-1H8a1 1 0 0 0 0 2h8a1 1 0 0 0 1-1zm0-4a1 1 0 0 0-1-1H8a1 1 0 0 0 0 2h8a1 1 0 0 0 1-1z"/></svg>
  