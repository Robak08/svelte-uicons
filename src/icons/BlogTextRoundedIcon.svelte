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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-blog-text {customClass}"><path d="M19 2H5C2.24 2 0 4.24 0 7v10c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5ZM5 4h14c1.65 0 3 1.35 3 3H2c0-1.65 1.35-3 3-3Zm14 16H5c-1.65 0-3-1.35-3-3V9h20v8c0 1.65-1.35 3-3 3Zm-9-8c0 .55-.45 1-1 1H8v4c0 .55-.45 1-1 1s-1-.45-1-1v-4H5c-.55 0-1-.45-1-1s.45-1 1-1h4c.55 0 1 .45 1 1Zm10 0c0 .55-.45 1-1 1h-6c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1Zm0 4c0 .55-.45 1-1 1h-6c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1Z"/></svg>
  