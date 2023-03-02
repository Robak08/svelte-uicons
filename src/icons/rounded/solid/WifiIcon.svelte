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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M10 19c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2Zm13.68-9.46c.41-.38.43-1.01.05-1.41-3.02-3.25-7.3-5.12-11.73-5.12S3.29 4.87.27 8.12a.996.996 0 1 0 1.46 1.36C4.37 6.63 8.11 5 12 5s7.62 1.63 10.27 4.48c.2.21.46.32.73.32.24 0 .49-.09.68-.27Zm-5.01 4.81c.41-.38.43-1.01.05-1.41C16.99 11.07 14.54 10 12 10s-4.99 1.07-6.72 2.94a.996.996 0 1 0 1.46 1.36c1.35-1.46 3.27-2.29 5.26-2.29s3.9.84 5.26 2.29c.2.21.46.32.73.32.24 0 .49-.09.68-.27Z"/></svg>
  