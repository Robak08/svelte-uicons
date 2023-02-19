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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-key-skeleton-left-right {customClass}"><path d="M19 0c-2.76 0-5 2.24-5 5H5C3.35 5 2 6.35 2 8v1c0 .55.45 1 1 1s1-.45 1-1V8c0-.55.45-1 1-1h1v2c0 .55.45 1 1 1s1-.45 1-1V7h6c0 2.76 2.24 5 5 5s5-2.24 5-5V5c0-2.76-2.24-5-5-5Zm3 7c0 1.65-1.35 3-3 3s-3-1.35-3-3V5c0-1.65 1.35-3 3-3s3 1.35 3 3v2Zm-1 7c-.55 0-1 .45-1 1v1c0 .55-.45 1-1 1h-1v-2c0-.55-.45-1-1-1s-1 .45-1 1v2h-6c0-2.76-2.24-5-5-5s-5 2.24-5 5v2c0 2.76 2.24 5 5 5s5-2.24 5-5h9c1.65 0 3-1.35 3-3v-1c0-.55-.45-1-1-1ZM8 19c0 1.65-1.35 3-3 3s-3-1.35-3-3v-2c0-1.65 1.35-3 3-3s3 1.35 3 3v2Z"/></svg>
  