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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M15.001 11H9V8h6v3Zm-6 2v5h6.001v-5H9.001ZM22 5v14c0 2.757-2.243 5-5 5H7c-2.757 0-5-2.243-5-5V5c0-2.757 2.243-5 5-5h10c2.757 0 5 2.243 5 5Zm-5 2-.001-.052A3.003 3.003 0 0 0 14 4h-4a3.003 3.003 0 0 0-2.999 2.948L7 7v11c0 1.103.897 2 2 2h6c1.103 0 2-.897 2-2V7Z"/></svg>
  