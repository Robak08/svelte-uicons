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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M14 19c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2ZM1.33 7.07C.96 7.4.6 7.76.26 8.12c-.38.4-.35 1.04.05 1.41a.995.995 0 0 0 1.41-.05c.3-.32.61-.63.93-.92a.998.998 0 1 0-1.33-1.49Zm5.05 4.84c-.4.31-.77.65-1.11 1.02a.996.996 0 0 0 .05 1.41.995.995 0 0 0 1.41-.05c.27-.29.56-.56.87-.8.44-.34.52-.97.18-1.4a.993.993 0 0 0-1.4-.18Zm7.21.26c1.39.32 2.68 1.06 3.66 2.11.2.21.46.32.73.32.24 0 .49-.09.68-.27.4-.38.43-1.01.05-1.41-1.84-1.99-4.54-3.06-7.22-2.92h-.07L7.24 5.83C8.76 5.28 10.36 5 12 5c3.88 0 7.62 1.63 10.27 4.48.2.21.46.32.73.32.24 0 .49-.09.68-.27.4-.38.43-1.01.05-1.41C20.71 4.87 16.43 3 12 3c-2.19 0-4.31.43-6.3 1.29l-3.99-4C1.32-.1.68-.1.29.29s-.39 1.03 0 1.42l22 22c.2.2.45.29.71.29s.51-.1.71-.29a.996.996 0 0 0 0-1.41L13.6 12.18Z"/></svg>
  