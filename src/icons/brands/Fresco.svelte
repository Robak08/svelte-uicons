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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.9c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zm-6.69 7.96c-.03.03-.07.04-.1.04H8.47v2.45h4.02c.1 0 .14.04.14.11v1.77c.01.06-.03.12-.1.13h-.03l-4.03.01v3.94c.01.06-.03.12-.1.13H6.36c-.03 0-.07-.01-.09-.03-.02-.03-.03-.07-.02-.11V6.41c0-.15.04-.23.11-.23h6.38c.04 0 .08 0 .11.02.02.02.04.09.05.22l.18 1.75c.01.03 0 .07-.02.09zm5.8 2.52c0 .08-.05.11-.16.11-.65-.04-1.3.08-1.89.34-.2.09-.39.21-.54.37v5.1c0 .1-.04.14-.13.14H14.2c-.08.01-.15-.04-.16-.12v-5.58c0-.24 0-.49-.01-.75s-.01-.52-.02-.78c-.01-.22-.03-.44-.06-.66-.01-.05.02-.1.07-.11 0-.01.02-.01.03 0h1.75c.1 0 .18.07.21.16.04.07.07.15.08.23a3.33 3.33 0 0 1 .07.67c.3-.35.66-.64 1.07-.86.46-.25.97-.37 1.49-.36.07-.01.13.04.14.11v1.99z"/></svg>
  