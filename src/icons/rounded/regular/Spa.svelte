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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19.367 14.727A4.149 4.149 0 0 0 22 11c0-2.622-2.5-4.354-6.8-4.849A3.267 3.267 0 0 0 16 4c0-2.43-2.355-4-6-4S4 1.57 4 4a3.464 3.464 0 0 0 1.9 3.051C3.624 8.052 3 9.606 3 11a4 4 0 0 0 2.229 3.614C1.793 15.38 0 16.857 0 19c0 3.271 4.149 5 12 5 7.963 0 12-1.682 12-5 0-2.057-1.555-3.484-4.633-4.273zM10 2c1.991 0 4 .619 4 2s-2.009 2-4 2-4-.619-4-2 2.009-2 4-2zm2.5 6c3.46 0 7.5.786 7.5 3s-4.04 3-7.5 3c-2.255 0-7.5-.292-7.5-3s5.245-3 7.5-3zM12 22c-6.075 0-10-1.178-10-3s3.925-3 10-3c6.262 0 10 1.122 10 3s-3.738 3-10 3z"/></svg>
  