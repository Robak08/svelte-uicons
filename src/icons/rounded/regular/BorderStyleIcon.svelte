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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M1 24c-.55 0-1-.45-1-1V5c0-2.76 2.24-5 5-5h18c.55 0 1 .45 1 1s-.45 1-1 1H5C3.35 2 2 3.35 2 5v18c0 .55-.45 1-1 1Zm18-1.5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5.67 1.5 1.5 1.5 1.5-.67 1.5-1.5Zm-11 0c0-.83-.67-1.5-1.5-1.5S5 21.67 5 22.5 5.67 24 6.5 24 8 23.33 8 22.5Zm16 0c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5.67 1.5 1.5 1.5 1.5-.67 1.5-1.5Zm0-5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5.67 1.5 1.5 1.5 1.5-.67 1.5-1.5Zm0-5.5c0-.83-.67-1.5-1.5-1.5S21 11.17 21 12s.67 1.5 1.5 1.5S24 12.83 24 12Zm0-5.5c0-.83-.67-1.5-1.5-1.5S21 5.67 21 6.5 21.67 8 22.5 8 24 7.33 24 6.5Zm-10.5 16c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5.67 1.5 1.5 1.5 1.5-.67 1.5-1.5Z"/></svg>
  