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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19 0H5C2.243 0 0 2.243 0 5v1c0 .886.387 1.684 1 2.234V19c0 2.757 2.243 5 5 5h12c2.757 0 5-2.243 5-5V8.234c.613-.55 1-1.347 1-2.234V5c0-2.757-2.243-5-5-5ZM2 5c0-1.654 1.346-3 3-3h14c1.654 0 3 1.346 3 3v1a1 1 0 0 1-1 1H3c-.551 0-1-.448-1-1V5Zm19 14c0 1.654-1.346 3-3 3H6c-1.654 0-3-1.346-3-3V9h18v10ZM6.295 15.71a1 1 0 1 1 1.41-1.42l2.432 2.414a1.018 1.018 0 0 0 1.416.003l4.766-4.438a1 1 0 0 1 1.363 1.463l-4.74 4.414c-.541.542-1.294.854-2.096.854s-1.555-.312-2.122-.879L6.295 15.71Z"/></svg>
  