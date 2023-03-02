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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M10 10c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2Zm14-3v10c0 2.76-2.24 5-5 5H5c-2.76 0-5-2.24-5-5V7c0-2.76 2.24-5 5-5h14c2.76 0 5 2.24 5 5ZM8 10c0 2.21 1.79 4 4 4s4-1.79 4-4-1.79-4-4-4-4 1.79-4 4Zm8.8 8.4C15.65 16.88 13.9 16 12 16s-3.65.88-4.8 2.4c-.33.44-.24 1.07.2 1.4.44.33 1.07.24 1.4-.2.76-1.02 1.93-1.6 3.2-1.6s2.44.58 3.2 1.6c.2.26.5.4.8.4.21 0 .42-.07.6-.2.44-.33.53-.96.2-1.4Z"/></svg>
  