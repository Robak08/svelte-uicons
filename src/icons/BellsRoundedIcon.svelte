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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-bells {customClass}"><path d="m23.83 14.12-1.56-5.84a8.62 8.62 0 0 0-6.58-6.11c-.01-.01-.02-.03-.03-.04A8.572 8.572 0 0 0 10-.01C5.94 0 2.5 2.76 1.63 6.68L.11 12.35c-.31 1.38.03 2.81.91 3.91.89 1.1 2.21 1.74 3.62 1.74h.19c.06.09.12.18.19.26.89 1.1 2.21 1.74 3.62 1.74h.96c.23 2.24 2.1 4 4.4 4s4.17-1.76 4.4-4h.95c1.46 0 2.81-.67 3.7-1.84.88-1.17 1.17-2.64.78-4.04Zm-21.25.89c-.5-.63-.69-1.44-.53-2.19l1.52-5.67A6.543 6.543 0 0 1 10 1.99c.62 0 1.22.11 1.8.28a8.52 8.52 0 0 0-6.17 6.4l-1.52 5.67c-.12.53-.14 1.06-.08 1.58-.57-.13-1.08-.45-1.45-.92ZM14 22c-1.2 0-2.19-.86-2.4-2h4.8c-.21 1.14-1.2 2-2.4 2Zm7.46-5.04c-.5.66-1.27 1.04-2.11 1.04H8.64c-.81 0-1.56-.36-2.06-.99s-.69-1.44-.53-2.19l1.52-5.67A6.543 6.543 0 0 1 14 3.99c2.95 0 5.55 1.98 6.34 4.81l1.56 5.84c.22.8.06 1.64-.44 2.31Z"/></svg>
  