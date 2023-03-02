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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M10 8V7H2v8c0 1.654 1.346 3 3 3h5v-2c0-1.654 1.346-3 3-3h2.586c.534 0 1.036.208 1.414.586L18.414 15H21c1.654 0 3 1.346 3 3v3c0 1.654-1.346 3-3 3h-8c-1.654 0-3-1.346-3-3v-1H5c-2.757 0-5-2.243-5-5V1C.006-.308 1.995-.307 2 1v4h8V3c0-1.654 1.346-3 3-3h2.586c.534 0 1.036.208 1.414.586L18.414 2H21c1.654 0 3 1.346 3 3v3c0 1.654-1.346 3-3 3h-8c-1.654 0-3-1.346-3-3Z"/></svg>
  