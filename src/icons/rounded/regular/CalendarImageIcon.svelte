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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19 2h-1V1a1 1 0 1 0-2 0v1H8V1a1 1 0 1 0-2 0v1H5C2.243 2 0 4.243 0 7v12c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5ZM5 4h14c1.654 0 3 1.346 3 3v1H2V7c0-1.654 1.346-3 3-3Zm-3 6h20v.589c-.015.013-6.025 6.021-6.025 6.021-.521.521-1.429.521-1.951 0l-.634-.635c-1.277-1.277-3.503-1.277-4.78 0l-5.417 5.417A2.997 2.997 0 0 1 2 18.999v-9Zm17 12H5.414l4.611-4.61c.521-.521 1.429-.521 1.951 0l.634.635c1.277 1.277 3.503 1.277 4.78 0l4.61-4.61v5.586c0 1.654-1.346 3-3 3ZM4 13.5a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 4 13.5Z"/></svg>
  