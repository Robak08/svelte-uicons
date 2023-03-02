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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19 1H5C2.243 1 0 3.243 0 6v8c0 2.757 2.243 5 5 5h6v2H7a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2h-4v-2h6c2.757 0 5-2.243 5-5V6c0-2.757-2.243-5-5-5ZM7.293 10.707l2.583 2.584a.999.999 0 1 1-1.414 1.414l-2.583-2.584a3.002 3.002 0 0 1 0-4.242l2.583-2.584a.999.999 0 1 1 1.414 1.414L7.293 9.293a1 1 0 0 0 0 1.414Zm10.828 1.414-2.583 2.584a.997.997 0 0 1-1.414 0 .999.999 0 0 1 0-1.414l2.583-2.584a1 1 0 0 0 0-1.414l-2.583-2.584a.999.999 0 1 1 1.414-1.414l2.583 2.584a3.002 3.002 0 0 1 0 4.242Z"/></svg>
  