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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23 9a1 1 0 0 0-1 1v2H2v-2a1 1 0 1 0-2 0v9.5C0 21.981 2.019 24 4.5 24H8a1 1 0 0 0 1-1v-4c0-1.654 1.346-3 3-3s3 1.346 3 3v4a1 1 0 0 0 1 1h3.5c2.481 0 4.5-2.019 4.5-4.5V10a1 1 0 0 0-1-1ZM5 10V1a1 1 0 1 1 2 0v1h2V1a1 1 0 1 1 2 0v1h2V1a1 1 0 1 1 2 0v1h2V1a1 1 0 1 1 2 0v9h-5V7a2 2 0 1 0-4 0v3H5Z"/></svg>
  