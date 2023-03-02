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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M16 2c0 .55-.45 1-1 1H9v14c0 .55-.45 1-1 1s-1-.45-1-1V3H1c-.55 0-1-.45-1-1s.45-1 1-1h14c.55 0 1 .45 1 1Zm-3.5 3c-.83 0-1.5.67-1.5 1.5S11.67 8 12.5 8 14 7.33 14 6.5 13.33 5 12.5 5Zm0 5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5Zm0 5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5Zm0 5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5Zm5-15c-.83 0-1.5.67-1.5 1.5S16.67 8 17.5 8 19 7.33 19 6.5 18.33 5 17.5 5Zm5 0c-.83 0-1.5.67-1.5 1.5S21.67 8 22.5 8 24 7.33 24 6.5 23.33 5 22.5 5Z"/></svg>
  