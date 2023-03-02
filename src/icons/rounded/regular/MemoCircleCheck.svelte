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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M10 23a1 1 0 0 1-1 1H5c-2.757 0-5-2.243-5-5V5c0-2.757 2.243-5 5-5h8c2.757 0 5 2.243 5 5v2a1 1 0 1 1-2 0V5c0-1.654-1.346-3-3-3H5C3.346 2 2 3.346 2 5v14c0 1.654 1.346 3 3 3h4a1 1 0 0 1 1 1Zm4-17a1 1 0 0 0-1-1H5a1 1 0 1 0 0 2h8a1 1 0 0 0 1-1Zm-4 5a1 1 0 0 0-1-1H5a1 1 0 1 0 0 2h4a1 1 0 0 0 1-1Zm-5 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H5Zm19 2c0 3.859-3.141 7-7 7s-7-3.141-7-7 3.141-7 7-7 7 3.141 7 7Zm-2 0c0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5 5-2.243 5-5Zm-3.192-1.241-2.223 2.134a.374.374 0 0 1-.522.002l-1.131-1.108a.999.999 0 1 0-1.4 1.428l1.132 1.109c.46.449 1.062.674 1.663.674s1.201-.225 1.653-.671l2.213-2.124a1 1 0 0 0-1.385-1.443Z"/></svg>
  