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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M0 7V6c0-2.757 2.243-5 5-5h2.528c.463 0 .927.109 1.341.316l3.156 1.578c.138.069.292.105.446.105h6.528a5.01 5.01 0 0 1 4.899 4H0Zm24 2v9c0 2.757-2.243 5-5 5H5c-2.757 0-5-2.243-5-5V9h24Zm-7 7c-.167-6.594-9.834-6.593-10 0 .167 6.594 9.834 6.593 10 0Zm-3.293 1.707a.999.999 0 0 0 0-1.414L13 15.586V14c-.005-1.308-1.995-1.307-2 0v2c0 .266.105.52.293.707l1 1a.997.997 0 0 0 1.414 0Z"/></svg>
  