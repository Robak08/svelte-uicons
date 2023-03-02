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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M17.523 15.342a1 1 0 1 1-.001-1.999 1 1 0 0 1 .001 1.999m-11.046 0a1 1 0 1 1-.001-1.999 1 1 0 0 1 .001 1.999m11.404-6.02 1.997-3.459a.415.415 0 1 0-.72-.416L17.136 8.95C15.59 8.244 13.853 7.851 12 7.851s-3.59.393-5.137 1.098L4.841 5.447a.416.416 0 0 0-.72.415l1.997 3.46c-3.43 1.865-5.775 5.337-6.119 9.44h24c-.343-4.103-2.688-7.575-6.118-9.44"/></svg>
  