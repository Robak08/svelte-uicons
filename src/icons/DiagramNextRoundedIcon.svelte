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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-diagram-next {customClass}"><path d="M24 18v2c0 2.21-1.79 4-4 4H4c-2.21 0-4-1.79-4-4v-2c0-2.21 1.79-4 4-4h2c.55 0 1 .45 1 1s-.45 1-1 1H4c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2h-2c-.55 0-1-.45-1-1s.45-1 1-1h2c2.21 0 4 1.79 4 4Zm0-14v2c0 2.21-1.79 4-4 4h-7v4h1.45c.69 0 1.04.83.55 1.32l-2.45 2.45c-.3.3-.79.3-1.1 0L9 15.32c-.49-.49-.14-1.32.55-1.32H11v-4H4c-2.21 0-4-1.79-4-4V4c0-2.21 1.79-4 4-4h16c2.21 0 4 1.79 4 4ZM2 4.59 4.59 2H4c-1.1 0-2 .9-2 2v.59ZM4.59 8l6-6H7.42l-5.1 5.09c.36.55.97.91 1.68.91h.59Zm12-6h-3.17l-6 6h3.17l6-6Zm0 6 5.09-5.09C21.32 2.36 20.71 2 20 2h-.59l-6 6h3.17ZM22 5.41 19.41 8H20c1.1 0 2-.9 2-2v-.59Z"/></svg>
  