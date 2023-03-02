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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19.052 18H19c-1.988 0-4-3.435-4-10h1a1 1 0 0 0 0-2h-.537a4 4 0 1 0-6.926 0H8a1 1 0 0 0 0 2h1c0 6.565-2.012 10-4 10h-.052A3 3 0 0 0 5 24h14a3 3 0 0 0 .052-6ZM12 2a2 2 0 1 1-2 2 2 2 0 0 1 2-2Zm-1 6h2c0 4.464.883 7.96 2.4 10H8.6c1.517-2.04 2.4-5.536 2.4-10Zm8 14H5a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2Z"/></svg>
  