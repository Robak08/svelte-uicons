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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-diagram-previous {customClass}"><path d="M20 14h-7v-4h1.45c.69 0 1.04-.83.55-1.32l-2.45-2.45c-.3-.3-.79-.3-1.1 0L9 8.68c-.49.49-.14 1.32.55 1.32H11v4H4c-2.21 0-4 1.79-4 4v2c0 2.21 1.79 4 4 4h16c2.21 0 4-1.79 4-4v-2c0-2.21-1.79-4-4-4Zm2 6c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v2ZM20 0H4C1.79 0 0 1.79 0 4v2c0 2.21 1.79 4 4 4h1c.27 0 .52-.11.71-.29L13.41 2h3.17l-1.93 1.93a.996.996 0 0 0 .71 1.7c.26 0 .51-.1.71-.29l3.35-3.35h.59c.7 0 1.32.36 1.68.91l-4.38 4.38a.99.99 0 0 0-.29.71v1c0 .55.45 1 1 1h2c2.21 0 4-1.79 4-4v-2c0-2.21-1.79-4-4-4ZM2 4c0-1.1.9-2 2-2h.59L2 4.59V4Zm2.59 4H4c-.7 0-1.32-.36-1.68-.91L7.41 2h3.17l-6 6ZM22 6c0 1.1-.9 2-2 2h-.59L22 5.41V6Z"/></svg>
  