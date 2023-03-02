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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 0C5.383 0 0 5.383 0 12v7c0 2.757 2.243 5 5 5h2c1.103 0 2-.897 2-2v-5c0-1.654 1.346-3 3-3s3 1.346 3 3v5c0 1.103.897 2 2 2h2c2.757 0 5-2.243 5-5v-7c0-6.617-5.383-12-12-12Zm10 12v3h-4V9h3.54c.299.947.46 1.955.46 3Zm-1.342-5H13V2.05A10.016 10.016 0 0 1 20.658 7ZM11 2.05V7H3.342A10.014 10.014 0 0 1 11 2.05ZM2 15v-3c0-1.045.161-2.053.46-3H6v6H2Zm5 7H5c-1.654 0-3-1.346-3-3v-2h5v5Zm5-10a4.997 4.997 0 0 0-4 2.003V9h8v5.003A4.994 4.994 0 0 0 12 12Zm7 10h-2v-5h5v2c0 1.654-1.346 3-3 3Z"/></svg>
  