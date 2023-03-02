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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M7 0H4C1.79 0 0 1.79 0 4v3c0 2.21 1.79 4 4 4h3c2.21 0 4-1.79 4-4V4c0-2.21-1.79-4-4-4Zm2 7c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2v3Zm11 6h-3c-2.21 0-4 1.79-4 4v3c0 2.21 1.79 4 4 4h3c2.21 0 4-1.79 4-4v-3c0-2.21-1.79-4-4-4Zm2 7c0 1.1-.9 2-2 2h-3c-1.1 0-2-.9-2-2v-3c0-1.1.9-2 2-2h3c1.1 0 2 .9 2 2v3ZM13 5c0-1.06.44-2.05 1.25-2.78L16.32.27a.996.996 0 0 1 1.41.04c.38.4.36 1.04-.04 1.41l-2.08 1.95c-.11.1-.2.21-.28.32H19c2.21 0 4 1.79 4 4v2c0 .55-.45 1-1 1s-1-.45-1-1v-2c0-1.1-.9-2-2-2h-3.67c.08.11.17.21.27.31l2.09 1.96A.996.996 0 0 1 17 9.98c-.25 0-.49-.09-.69-.27l-2.08-1.95c-.79-.73-1.24-1.72-1.24-2.77Zm-2 14c0 1.06-.44 2.04-1.25 2.78l-2.07 1.95c-.19.18-.44.27-.69.27-.27 0-.53-.11-.73-.31a.996.996 0 0 1 .04-1.41l2.08-1.95c.11-.1.2-.21.28-.32H4.99c-2.21 0-4-1.79-4-4v-2c0-.55.45-1 1-1s1 .45 1 1v2c0 1.1.9 2 2 2h3.67c-.08-.11-.17-.21-.27-.31L6.3 15.74a.996.996 0 1 1 1.37-1.45l2.08 1.95c.79.73 1.24 1.72 1.24 2.77Z"/></svg>
  