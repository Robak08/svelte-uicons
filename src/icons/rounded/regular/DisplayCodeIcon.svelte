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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M18.121 7.879a3.002 3.002 0 0 1 0 4.242l-2.583 2.584a.997.997 0 0 1-1.414 0 .999.999 0 0 1 0-1.414l2.583-2.584a1 1 0 0 0 0-1.414l-2.583-2.584a.999.999 0 1 1 1.414-1.414l2.583 2.584Zm-8.245-1.17a.999.999 0 1 0-1.414-1.414L5.879 7.879a3.002 3.002 0 0 0 0 4.242l2.583 2.584a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414l-2.583-2.584a1 1 0 0 1 0-1.414l2.583-2.584ZM24 6v8c0 2.757-2.243 5-5 5h-6v2h4a1 1 0 1 1 0 2H7a1 1 0 1 1 0-2h4v-2H5c-2.757 0-5-2.243-5-5V6c0-2.757 2.243-5 5-5h14c2.757 0 5 2.243 5 5Zm-2 0c0-1.654-1.346-3-3-3H5C3.346 3 2 4.346 2 6v8c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3V6Z"/></svg>
  