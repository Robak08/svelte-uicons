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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-wifi-exclamation {customClass}"><path d="M14 19c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2Zm9.73-10.88a15.975 15.975 0 0 0-7.47-4.55c-.53-.15-1.08.17-1.23.7-.15.53.17 1.08.7 1.23 2.5.69 4.76 2.07 6.53 3.98.2.21.46.32.73.32.24 0 .49-.09.68-.27.4-.38.43-1.01.05-1.41Zm-16-4.54C4.87 4.37 2.29 5.94.26 8.13c-.38.4-.35 1.04.05 1.41a.995.995 0 0 0 1.41-.05C3.5 7.58 5.75 6.2 8.25 5.51c.53-.15.84-.7.7-1.23-.15-.53-.7-.85-1.23-.7Zm8.76 7.6a1 1 0 0 0-.98 1.74c.65.37 1.24.83 1.75 1.38.2.21.46.32.73.32.24 0 .49-.09.68-.27.4-.38.43-1.01.05-1.41-.65-.7-1.4-1.29-2.23-1.76Zm-8.98 0c-.83.47-1.58 1.06-2.23 1.76-.38.4-.35 1.04.05 1.41a.995.995 0 0 0 1.41-.05c.51-.55 1.1-1.01 1.75-1.38a1 1 0 0 0-.98-1.74ZM12 15.01c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1s-1 .45-1 1v10c0 .55.45 1 1 1Z"/></svg>
  