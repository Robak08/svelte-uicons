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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19 0H5C2.243 0 0 2.243 0 5v1c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5V5c0-2.757-2.243-5-5-5Zm3 6c0 1.654-1.346 3-3 3H5C3.346 9 2 7.654 2 6V5c0-1.654 1.346-3 3-3h14c1.654 0 3 1.346 3 3v1Zm-2 0a1 1 0 0 1-1 1H5a1 1 0 1 1 0-2h14a1 1 0 0 1 1 1Zm-7 8v9a1 1 0 1 1-2 0v-9a1 1 0 1 1 2 0Zm-4 0v6c0 2.206-1.794 4-4 4s-4-1.794-4-4c0-1.739 1.121-3.397 2.667-3.943a1 1 0 0 1 .666 1.886C3.586 18.207 3 19.11 3 20c0 1.103.897 2 2 2s2-.897 2-2v-6a1 1 0 1 1 2 0Zm14 6c0 2.206-1.794 4-4 4s-4-1.794-4-4v-6a1 1 0 1 1 2 0v6c0 1.103.897 2 2 2s2-.897 2-2c0-.89-.586-1.793-1.333-2.057a1 1 0 1 1 .666-1.886C21.879 16.603 23 18.261 23 20Z"/></svg>
  