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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20 0H4C1.79 0 0 1.79 0 4v12c0 2.21 1.79 4 4 4h2.92l3.75 3.16c.38.34.86.51 1.34.51s.93-.16 1.29-.49L17.15 20H20c2.21 0 4-1.79 4-4V4c0-2.21-1.79-4-4-4Zm2 16c0 1.1-.9 2-2 2h-3.21c-.23 0-.46.08-.64.23l-4.17 3.42-4.05-3.41c-.18-.15-.41-.24-.64-.24H4c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v12Zm-4.25-4.66c.37.41.33 1.04-.08 1.41-.1.09-2.56 2.25-5.67 2.25s-5.56-2.16-5.67-2.25a.998.998 0 1 1 1.33-1.49c.02.02 2 1.75 4.33 1.75s4.32-1.73 4.34-1.75a.997.997 0 0 1 1.41.08ZM7 7.5C7 6.67 7.67 6 8.5 6s1.5.67 1.5 1.5S9.33 9 8.5 9 7 8.33 7 7.5Zm7 0c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S16.33 9 15.5 9 14 8.33 14 7.5Z"/></svg>
  