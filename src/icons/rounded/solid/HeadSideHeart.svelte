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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M14 10.16c0 .87-1.17 2.35-3 3.79-1.83-1.44-3-2.92-3-3.79C8 9.52 8.45 9 9 9c.5 0 1 .31 1 1 0 .55.45 1 1 1s1-.45 1-1c0-.69.5-1 1-1 .55 0 1 .52 1 1.16ZM24 13c0 .97-.7 2-2 2h-.33l-.22 1.66A5.012 5.012 0 0 1 16.49 21H16c0 1.65-1.35 3-3 3H6c-1.65 0-3-1.35-3-3v-.97c0-.9-.26-1.73-.74-2.35C.58 15.48-.2 12.75.05 9.98.5 4.95 4.46.79 9.45.11c4.04-.56 7.91 1.06 10.35 4.31C21.07 5.99 24 11.58 24 13Zm-8-2.84C16 8.42 14.65 7 13 7c-.78 0-1.48.27-2 .73C10.48 7.27 9.78 7 9 7c-1.65 0-3 1.42-3 3.16 0 2.03 2.12 4.09 3.9 5.47.32.25.71.38 1.1.38s.77-.12 1.1-.38c1.78-1.38 3.9-3.44 3.9-5.47Z"/></svg>
  