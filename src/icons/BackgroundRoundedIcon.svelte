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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-background {customClass}"><path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5Zm3 14.59L14.59 22h-4.17l11.59-11.59v4.17ZM20.29 2.3l-18 17.99A2.94 2.94 0 0 1 2 19v-2.59L16.41 2H19c.46 0 .9.11 1.29.29ZM2 9.41 9.41 2h4.17L2 13.59V9.42ZM5 2h1.59L2 6.59V5c0-1.65 1.35-3 3-3ZM3.71 21.71l18-18c.19.39.29.83.29 1.29v2.59L7.59 22H5c-.46 0-.9-.11-1.29-.29ZM19 22h-1.59L22 17.41V19c0 1.65-1.35 3-3 3Z"/></svg>
  