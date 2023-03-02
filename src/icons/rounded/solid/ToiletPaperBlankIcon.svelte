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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M8 0h9.868C16.595 2.009 16 5.262 16 8.5V19c0 2.757-2.243 5-5 5H1.654A1.656 1.656 0 0 1 0 22.346c0-.678.437-1.289 1.112-1.559A2.99 2.99 0 0 0 3 18V7.5C3 3.294 5.196 0 8 0Zm16 8.5c0 4.694-1.343 8.5-3 8.5s-3-3.806-3-8.5S19.343 0 21 0s3 3.806 3 8.5Zm-2 0c0-1.105-.448-2-1-2s-1 .895-1 2 .448 2 1 2 1-.895 1-2Z"/></svg>
  