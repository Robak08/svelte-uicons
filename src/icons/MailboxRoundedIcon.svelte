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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-mailbox {customClass}"><path d="M18 3H6C2.691 3 0 5.691 0 9v9c0 1.654 1.346 3 3 3h18c1.654 0 3-1.346 3-3V9c0-3.309-2.691-6-6-6ZM2 18V9c0-2.206 1.794-4 4-4s4 1.794 4 4v9c0 .552-.449 1-1 1H3c-.551 0-1-.448-1-1Zm20 0a1 1 0 0 1-1 1h-9.172c.111-.313.172-.649.172-1V9c0-1.535-.58-2.938-1.532-4H18c2.206 0 4 1.794 4 4v9Zm-2-8v2a1 1 0 1 1-2 0v-1h-3a1 1 0 1 1 0-2h4a1 1 0 0 1 1 1ZM8 10a1 1 0 0 1-1 1H5a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1Z"/></svg>
  