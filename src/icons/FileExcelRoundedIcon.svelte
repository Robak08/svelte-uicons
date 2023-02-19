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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-file-excel {customClass}"><path d="M15.27 13.64 13.3 16l1.97 2.36a1.001 1.001 0 1 1-1.54 1.28L12 17.56l-1.73 2.08a.99.99 0 0 1-.77.36c-.23 0-.45-.08-.64-.23-.42-.35-.48-.98-.13-1.41L10.7 16l-1.97-2.36a1.001 1.001 0 1 1 1.54-1.28L12 14.44l1.73-2.08c.35-.42.98-.48 1.41-.13.42.35.48.98.13 1.41ZM22 10.49V19c0 2.76-2.24 5-5 5H7c-2.76 0-5-2.24-5-5V5c0-2.76 2.24-5 5-5h4.51c1.87 0 3.63.73 4.95 2.05l3.48 3.49a6.96 6.96 0 0 1 2.05 4.95Zm-6.95-7.03c-.32-.32-.67-.59-1.05-.81V7c0 .55.45 1 1 1h4.34c-.22-.38-.49-.73-.81-1.05l-3.48-3.49ZM20 10.48c0-.16 0-.33-.02-.49H15c-1.65 0-3-1.35-3-3V2.02C11.84 2 11.68 2 11.51 2H7C5.35 2 4 3.35 4 5v14c0 1.65 1.35 3 3 3h10c1.65 0 3-1.35 3-3v-8.51Z"/></svg>
  