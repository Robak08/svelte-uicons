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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-paste {customClass}"><path d="M5 4h.18C5.59 5.16 6.69 6 8 6h2c1.3 0 2.4-.84 2.82-2H13c1.37 0 2.56.92 2.91 2.25.14.54.68.86 1.22.72.53-.14.86-.68.72-1.22A4.996 4.996 0 0 0 13.01 2h-.17c-.41-1.16-1.52-2-2.83-2h-2c-1.3 0-2.42.84-2.83 2h-.17C2.24 2 0 4.24 0 7v12c0 2.76 2.24 5 5 5h3c.55 0 1-.45 1-1s-.45-1-1-1H5c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3Zm3-2h2c.55 0 1 .45 1 1s-.45 1-1 1H8c-.55 0-1-.45-1-1s.45-1 1-1Zm12 7h-5c-2.21 0-4 1.79-4 4v7c0 2.21 1.79 4 4 4h5c2.21 0 4-1.79 4-4v-7c0-2.21-1.79-4-4-4Zm2 11c0 1.1-.9 2-2 2h-5c-1.1 0-2-.9-2-2v-7c0-1.1.9-2 2-2h5c1.1 0 2 .9 2 2v7Zm-2-6c0 .55-.45 1-1 1h-3c-.55 0-1-.45-1-1s.45-1 1-1h3c.55 0 1 .45 1 1Zm0 4c0 .55-.45 1-1 1h-3c-.55 0-1-.45-1-1s.45-1 1-1h3c.55 0 1 .45 1 1Z"/></svg>
  