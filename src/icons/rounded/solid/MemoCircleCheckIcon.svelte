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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M18 12a6 6 0 1 0 0 12 6 6 0 0 0 0-12Zm3.192 6.202-2.213 2.124c-.452.446-1.052.671-1.653.671s-1.203-.225-1.663-.674l-1.132-1.109a1 1 0 1 1 1.4-1.428l1.131 1.108a.374.374 0 0 0 .522-.002l2.223-2.134a1 1 0 1 1 1.385 1.443ZM10 18a7.98 7.98 0 0 1 2.709-6H5a1 1 0 1 1 0-2h8a1 1 0 0 1 .997 1.072A7.958 7.958 0 0 1 18 10V5c0-2.757-2.243-5-5-5H5C2.243 0 0 2.243 0 5v14c0 2.757 2.243 5 5 5h7.709A7.98 7.98 0 0 1 10 18ZM5 5h8a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2Zm2 12H5a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2Z"/></svg>
  