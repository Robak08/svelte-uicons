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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-border-style-alt {customClass}"><path d="M19 24H1c-.55 0-1-.45-1-1s.45-1 1-1h18c1.65 0 3-1.35 3-3V1c0-.55.45-1 1-1s1 .45 1 1v18c0 2.76-2.24 5-5 5ZM0 6.5C0 7.33.67 8 1.5 8S3 7.33 3 6.5 2.33 5 1.5 5 0 5.67 0 6.5Zm0 11c0 .83.67 1.5 1.5 1.5S3 18.33 3 17.5 2.33 16 1.5 16 0 16.67 0 17.5Zm0-16C0 2.33.67 3 1.5 3S3 2.33 3 1.5 2.33 0 1.5 0 0 .67 0 1.5Zm5 0C5 2.33 5.67 3 6.5 3S8 2.33 8 1.5 7.33 0 6.5 0 5 .67 5 1.5Zm5.5 0c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5S12.83 0 12 0s-1.5.67-1.5 1.5Zm5.5 0c0 .83.67 1.5 1.5 1.5S19 2.33 19 1.5 18.33 0 17.5 0 16 .67 16 1.5ZM0 12c0 .83.67 1.5 1.5 1.5S3 12.83 3 12s-.67-1.5-1.5-1.5S0 11.17 0 12Z"/></svg>
  