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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23 5a3 3 0 0 0-3-3h-.171A3.006 3.006 0 0 0 17 0H7a3.006 3.006 0 0 0-2.829 2H4a3 3 0 0 0-1.978 5.238L3.57 19.62A5.007 5.007 0 0 0 8.531 24h6.938a5.008 5.008 0 0 0 4.961-4.38l1.548-12.382A2.981 2.981 0 0 0 23 5Zm-3.883 9h-3.2c-.892-5.287-6.947-5.284-7.838 0h-3.2l-.75-6h15.738ZM14 15c-.105 3.954-3.895 3.953-4 0 .105-3.954 3.9-3.953 4 0ZM4 4h1a1 1 0 0 0 1-1 1 1 0 0 1 1-1h10a1 1 0 0 1 1 1 1 1 0 0 0 1 1h1a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2Zm14.445 15.372A3 3 0 0 1 15.469 22H8.531a3 3 0 0 1-2.977-2.628L5.133 16h2.948c.892 5.287 6.948 5.284 7.838 0h2.948Z"/></svg>
  