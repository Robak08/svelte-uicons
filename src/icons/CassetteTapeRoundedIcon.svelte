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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-cassette-tape {customClass}"><path d="M19 3H5C2.24 3 0 5.24 0 8v8c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V8c0-2.76-2.24-5-5-5Zm3 13c0 1.65-1.35 3-3 3h-.67l-.74-1.11c-.37-.56-1-.89-1.66-.89H8.07c-.67 0-1.29.33-1.66.89L5.67 19H5c-1.65 0-3-1.35-3-3V8c0-1.65 1.35-3 3-3h14c1.65 0 3 1.35 3 3v8Zm-5-8H7c-1.65 0-3 1.35-3 3s1.35 3 3 3h10c1.65 0 3-1.35 3-3s-1.35-3-3-3Zm-2.82 2c-.11.31-.18.65-.18 1s.07.69.18 1H9.81c.11-.31.18-.65.18-1s-.07-.69-.18-1h4.37ZM7 10c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1Zm10 2c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1Z"/></svg>
  