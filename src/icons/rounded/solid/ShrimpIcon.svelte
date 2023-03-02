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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M14.92 8.941a8.013 8.013 0 0 0 7.016-6.92H23a1 1 0 0 0 0-2h-1.8a1.023 1.023 0 0 0-.39 0L15.433.007c-5.539.184-5.975 8.14-.513 8.934ZM15 3a1 1 0 0 1 0 2 1 1 0 0 1 0-2Z"/><path d="M8.411 10.945A4.448 4.448 0 0 0 12 13a1 1 0 0 0 0-2 2.377 2.377 0 0 1-1.791-.986 6.934 6.934 0 0 1 1.105-.549 6.546 6.546 0 0 1-.605-9.343 12.5 12.5 0 0 0-8.6 5.222 7.048 7.048 0 0 0 6.302 5.601ZM6.429 15.911c.523.48 4.33 2.208 4.571.089a1 1 0 0 0-1-1 3.683 3.683 0 0 1-2.789-1.048 6.472 6.472 0 0 1 .389-1.071 9.1 9.1 0 0 1-6.785-5.13 11.4 11.4 0 0 0-.728 5.6c.356 1.025 3.013 3.175 6.342 2.56ZM21 18c-2.059 0-6.039 2.977-7.348 4a6.6 6.6 0 0 1-6.241-4.224A9.628 9.628 0 0 1 1.1 17 12 12 0 0 0 12 24h9a3 3 0 0 0 0-6Z"/></svg>
  