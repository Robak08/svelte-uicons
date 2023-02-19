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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-keyboard-brightness-low {customClass}"><path d="M16 17H8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1ZM12 7c.83 0 1.5-.67 1.5-1.5S12.83 4 12 4s-1.5.67-1.5 1.5S11.17 7 12 7Zm-9 8.5c0-.83-.67-1.5-1.5-1.5S0 14.67 0 15.5.67 17 1.5 17 3 16.33 3 15.5Zm21 0c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5.67 1.5 1.5 1.5 1.5-.67 1.5-1.5ZM19.5 10c.83 0 1.5-.67 1.5-1.5S20.33 7 19.5 7 18 7.67 18 8.5s.67 1.5 1.5 1.5Zm-15 0C5.33 10 6 9.33 6 8.5S5.33 7 4.5 7 3 7.67 3 8.5 3.67 10 4.5 10Z"/></svg>
  