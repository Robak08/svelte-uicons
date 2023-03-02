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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M9.75 8.14h-.02l-1.24 4.17h2.54L9.75 8.14zm0 0h-.02l-1.24 4.17h2.54L9.75 8.14zm10-7.84H4.25C1.9.3 0 2.2 0 4.55v14.9c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zM14.7 16.83h-2.09c-.07.01-.14-.04-.16-.11l-.82-2.38H7.91l-.76 2.35c-.02.09-.1.15-.19.14H5.08c-.11 0-.14-.06-.11-.18l3.22-9.27c.03-.1.06-.21.1-.33.04-.21.06-.43.06-.65-.01-.05.03-.1.08-.11h2.59c.08 0 .12.03.13.08l3.65 10.3c.03.11 0 .16-.1.16zm3.4-.15c0 .11-.04.16-.13.16h-1.96c-.1 0-.15-.06-.15-.16v-7.7c0-.1.04-.14.13-.14h1.98c.09 0 .13.05.13.14v7.7zm-.21-9.03c-.23.24-.57.37-.91.35-.33.01-.65-.12-.89-.35a1.3 1.3 0 0 1-.34-.92c-.01-.34.12-.66.36-.89.24-.23.56-.35.89-.35.39 0 .69.12.91.35.22.24.34.56.33.89.01.34-.11.67-.35.92zm-8.16.49-1.24 4.17h2.54L9.75 8.14h-.02z"/></svg>
  