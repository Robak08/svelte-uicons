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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 13a11.914 11.914 0 0 1-3.508 8.47 3.037 3.037 0 0 1-4.12.174l-1.026-.887a1 1 0 0 1 1.308-1.514l1.027.888a1.014 1.014 0 0 0 1.395-.075 10.044 10.044 0 0 0-.414-14.513 9.91 9.91 0 0 0-7.822-2.478 9.992 9.992 0 0 0-5.877 17.029 1 1 0 0 0 1.356.038l1.027-.889a1 1 0 1 1 1.308 1.514l-1.026.888a3.014 3.014 0 0 1-4.073-.13A12 12 0 1 1 24 13Zm-5.949 3.748a1 1 0 1 0 .8-1.832l-4.863-2.136a2 2 0 1 0-.8 1.832Z"/></svg>
  