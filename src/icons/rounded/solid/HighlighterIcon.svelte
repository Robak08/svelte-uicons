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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M10.103 21.517A5.99 5.99 0 0 1 7.76 22H3.414l-1.707 1.707a.997.997 0 0 1-1.414 0 .999.999 0 0 1 0-1.414L2 20.586V16.24c0-.814.171-1.609.483-2.344l7.62 7.62ZM22.682 1.705l-.387-.387a4.517 4.517 0 0 0-6.136-.212L4.007 11.762c-.147.131-.285.27-.417.414l8.234 8.234c.145-.134.286-.274.419-.423l10.654-12.15a4.515 4.515 0 0 0-.216-6.133Z"/></svg>
  