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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19 1H5C2.24 1 0 3.24 0 6v12c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V6c0-2.76-2.24-5-5-5ZM5 3h14c1.65 0 3 1.35 3 3v2H2V6c0-1.65 1.35-3 3-3Zm14 18H5c-1.65 0-3-1.35-3-3v-8h20v8c0 1.65-1.35 3-3 3ZM18 5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S20.33 7 19.5 7 18 6.33 18 5.5Zm-4 0c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S16.33 7 15.5 7 14 6.33 14 5.5Zm-4 0c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S12.33 7 11.5 7 10 6.33 10 5.5Z"/></svg>
  