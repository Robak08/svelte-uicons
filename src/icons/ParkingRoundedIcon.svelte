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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-parking {customClass}"><path d="M8 19a1 1 0 0 1-1-1V9c0-2.206 1.794-4 4-4h2.5C15.981 5 18 7.019 18 9.5S15.981 14 13.5 14H9v4a1 1 0 0 1-1 1Zm1-7h4.5c1.379 0 2.5-1.122 2.5-2.5S14.879 7 13.5 7H11c-1.103 0-2 .897-2 2v3Zm10 12H5c-2.757 0-5-2.243-5-5V5c0-2.757 2.243-5 5-5h14c2.757 0 5 2.243 5 5v14c0 2.757-2.243 5-5 5ZM5 2C3.346 2 2 3.346 2 5v14c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3V5c0-1.654-1.346-3-3-3H5Z"/></svg>
  