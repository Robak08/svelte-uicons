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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M21.976 10H15c-1.654 0-3-1.346-3-3V.024C11.839.013 11.678 0 11.515 0H7C4.243 0 2 2.243 2 5v14c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5v-7.5c0-.163-.013-1.339-.024-1.5ZM8.293 17.789l2.019 2.019a.999.999 0 1 1-1.414 1.414l-2.019-2.019a3.003 3.003 0 0 1 0-4.243l2.062-2.062a.999.999 0 1 1 1.414 1.414l-2.062 2.062c-.39.39-.39 1.024 0 1.415Zm8.828 1.414-2.019 2.019a.997.997 0 0 1-1.414 0 .999.999 0 0 1 0-1.414l2.019-2.019c.39-.39.39-1.024 0-1.415l-2.062-2.062a.999.999 0 1 1 1.414-1.414l2.062 2.062a3.003 3.003 0 0 1 0 4.243ZM14 7V.46a6.977 6.977 0 0 1 2.465 1.59l3.484 3.486A6.954 6.954 0 0 1 21.54 8H15c-.552 0-1-.449-1-1Z"/></svg>
  