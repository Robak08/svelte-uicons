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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 7v1H0V7c0-2.757 2.243-5 5-5h1V1a1 1 0 0 1 2 0v1h8V1a1 1 0 0 1 2 0v1h1c2.757 0 5 2.243 5 5Zm0 3v9c0 2.757-2.243 5-5 5H5c-2.757 0-5-2.243-5-5v-9h24Zm-10.586 7 2.293-2.293a.999.999 0 1 0-1.414-1.414L12 15.586l-2.293-2.293a.999.999 0 1 0-1.414 1.414L10.586 17l-2.293 2.293a.999.999 0 1 0 1.414 1.414L12 18.414l2.293 2.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L13.414 17Z"/></svg>
  