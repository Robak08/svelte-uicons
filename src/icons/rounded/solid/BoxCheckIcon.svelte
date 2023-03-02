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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M4.999.005A4.999 4.999 0 0 0 0 5.004a3 3 0 0 0 2.999 2.999h17.997a2.97 2.97 0 0 0 2.999-2.776A5.003 5.003 0 0 0 19.214.01C19.141.007 4.999.005 4.999.005Zm16.997 9.998H2a1 1 0 0 0-1 1v7.998A5.005 5.005 0 0 0 5.999 24h11.998a5.005 5.005 0 0 0 4.999-4.999v-7.998a1 1 0 0 0-1-1Zm-4.314 4.729-4.74 4.414c-.541.542-1.294.854-2.096.854s-1.555-.312-2.122-.879L6.295 16.71a1 1 0 1 1 1.41-1.42l2.432 2.414a1.018 1.018 0 0 0 1.416.003l4.766-4.438a1 1 0 0 1 1.363 1.463Z"/></svg>
  