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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-yin-yang {customClass}"><path d="M10 6.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S12.33 8 11.5 8 10 7.33 10 6.5Zm2.5 9.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5ZM24 12c0 6.62-5.38 12-12 12S0 18.62 0 12 5.38 0 12 0s12 5.38 12 12ZM6.73 20.5c-.47-.9-.73-1.92-.73-3 0-3.34 2.6-6.2 5.91-6.5C14.2 10.79 16 8.82 16 6.5S14.09 2.11 11.7 2C6.33 2.16 2 6.59 2 12c0 3.58 1.89 6.73 4.73 8.5ZM22 12c0-3.58-1.89-6.73-4.73-8.5.47.9.73 1.92.73 3 0 3.34-2.6 6.2-5.91 6.5C9.8 13.21 8 15.18 8 17.5s1.91 4.39 4.3 4.5c5.38-.16 9.7-4.58 9.7-10Z"/></svg>
  