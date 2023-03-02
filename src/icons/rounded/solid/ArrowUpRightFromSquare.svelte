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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20 10.5V19c0 2.757-2.243 5-5 5H5c-2.757 0-5-2.243-5-5V9c0-2.757 2.243-5 5-5h8.5a1.002 1.002 0 0 1 .707 1.707l-7.319 7.319a2.88 2.88 0 0 0-.078 4.005 2.864 2.864 0 0 0 2.065.926 2.86 2.86 0 0 0 2.099-.846l7.319-7.319a.998.998 0 0 1 1.707.707ZM21 0h-7a1 1 0 0 0 0 2h6.586L8.293 14.293a.999.999 0 1 0 1.414 1.414L22 3.414V10a1 1 0 0 0 2 0V3c0-1.654-1.346-3-3-3Z"/></svg>
  