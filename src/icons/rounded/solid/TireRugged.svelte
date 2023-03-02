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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M22.611 9.1a10.8 10.8 0 0 0-1.056-2.542 2 2 0 0 0-.363-2.332l-1.414-1.418a2.01 2.01 0 0 0-2.334-.364A10.805 10.805 0 0 0 14.9 1.389 2 2 0 0 0 13 0h-2a2 2 0 0 0-1.9 1.389 10.805 10.805 0 0 0-2.54 1.055 2 2 0 0 0-.918-.222 1.947 1.947 0 0 0-1.416.586L2.808 4.222a2 2 0 0 0-.363 2.332A10.8 10.8 0 0 0 1.389 9.1 2 2 0 0 0 0 11v2a2 2 0 0 0 1.389 1.9 10.805 10.805 0 0 0 1.055 2.54 2.01 2.01 0 0 0 .364 2.334l1.414 1.414a2.01 2.01 0 0 0 2.334.364A10.805 10.805 0 0 0 9.1 22.611 2 2 0 0 0 11 24h2a2 2 0 0 0 1.9-1.389 10.805 10.805 0 0 0 2.54-1.055 2.01 2.01 0 0 0 2.334-.364l1.414-1.414a2.01 2.01 0 0 0 .364-2.334 10.805 10.805 0 0 0 1.055-2.54A2 2 0 0 0 24 13v-2a2 2 0 0 0-1.389-1.9ZM12 20a8.009 8.009 0 0 1-8-8c.376-10.588 15.626-10.585 16 0a8.009 8.009 0 0 1-8 8Zm0-14c-7.929.252-7.928 11.749 0 12 7.929-.252 7.928-11.749 0-12Zm-3 7a1 1 0 0 1 0-2 1 1 0 0 1 0 2Zm3 3a1 1 0 0 1 0-2 1 1 0 0 1 0 2Zm0-6a1 1 0 0 1 0-2 1 1 0 0 1 0 2Zm3 3a1 1 0 0 1 0-2 1 1 0 0 1 0 2Z"/></svg>
  