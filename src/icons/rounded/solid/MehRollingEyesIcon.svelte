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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M17.847 9.149c.49 1.106-.234 2.9-1.347 2.851-1.113.045-1.838-1.745-1.347-2.851a1.505 1.505 0 0 0 2.694 0ZM9 10a2.487 2.487 0 0 0-.153-.851 1.505 1.505 0 0 1-2.694 0C5.218 11.952 8.737 13.405 9 10Zm15 2a12.013 12.013 0 0 1-12 12C-3.9 23.4-3.894.6 12 0a12.013 12.013 0 0 1 12 12ZM7.5 14c4.612-.129 4.611-7.872 0-8-4.612.129-4.611 7.872 0 8Zm9.5 3a1 1 0 0 0-1-1H8a1 1 0 0 0 0 2h8a1 1 0 0 0 1-1Zm3-7c-.128-5.278-6.872-5.277-7 0 .128 5.278 6.872 5.277 7 0Z"/></svg>
  