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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M11 24H5c-2.757 0-5-2.243-5-5v-6c0-2.757 2.243-5 5-5h6c2.757 0 5 2.243 5 5v6c0 2.757-2.243 5-5 5ZM5 10c-1.654 0-3 1.346-3 3v6c0 1.654 1.346 3 3 3h6c1.654 0 3-1.346 3-3v-6c0-1.654-1.346-3-3-3H5Zm19 1c0-6.065-4.935-11-11-11a1 1 0 1 0 0 2c4.963 0 9 4.038 9 9a1 1 0 1 0 2 0Zm-4 0c0-3.86-3.141-7-7-7a1 1 0 1 0 0 2c2.757 0 5 2.243 5 5a1 1 0 1 0 2 0ZM5 12a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"/></svg>
  