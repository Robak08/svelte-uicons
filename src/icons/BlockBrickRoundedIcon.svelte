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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-block-brick {customClass}"><path d="M19 0H5C2.243 0 0 2.243 0 5v14c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5V5c0-2.757-2.243-5-5-5ZM8 17v-4h8v4H8Zm5-6V7h9v4h-9ZM8 5V2h8v3H8Zm3 2v4H2V7h9Zm-9 6h4v4H2v-4Zm16 0h4v4h-4v-4Zm4-8h-4V2h1c1.654 0 3 1.346 3 3ZM5 2h1v3H2c0-1.654 1.346-3 3-3ZM2 19h9v3H5c-1.654 0-3-1.346-3-3Zm17 3h-6v-3h9c0 1.654-1.346 3-3 3Z"/></svg>
  