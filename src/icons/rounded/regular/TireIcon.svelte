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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 0A12.013 12.013 0 0 0 0 12c.6 15.9 23.4 15.893 24 0A12.013 12.013 0 0 0 12 0Zm0 22A10.011 10.011 0 0 1 2 12c.5-13.248 19.5-13.245 20 0a10.011 10.011 0 0 1-10 10Zm0-18a8.009 8.009 0 0 0-8 8c.376 10.588 15.626 10.585 16 0a8.009 8.009 0 0 0-8-8Zm-.834 9.086a4.192 4.192 0 0 0-.144-.813 4.246 4.246 0 0 0-.3-.764A3.594 3.594 0 0 0 12 10.653a3.594 3.594 0 0 0 1.275.856 4.246 4.246 0 0 0-.3.764 4.192 4.192 0 0 0-.144.813 4.11 4.11 0 0 0-1.665 0Zm5.954-4.212-1.93.772A1.6 1.6 0 0 1 13 8.163V6.084a6.016 6.016 0 0 1 4.12 2.79ZM11 6.084v2.079a1.6 1.6 0 0 1-2.19 1.483l-1.93-.772A6.016 6.016 0 0 1 11 6.084ZM6 12a6.031 6.031 0 0 1 .135-1.269l1.7.681a2.128 2.128 0 0 1 .914 3.253l-1.1 1.463A5.983 5.983 0 0 1 6 12Zm3.247 5.33L10.4 15.8a2.057 2.057 0 0 1 3.2 0l1.149 1.531a6.042 6.042 0 0 1-5.502-.001Zm7.1-1.2-.656-.873-.442-.59a2.128 2.128 0 0 1 .914-3.255l1.7-.681a6.026 6.026 0 0 1-1.515 5.399Z"/></svg>
  