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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-arrow-up-from-dotted-line {customClass}"><path d="M13.5 22.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5ZM17 21c-.83 0-1.5.67-1.5 1.5S16.17 24 17 24s1.5-.67 1.5-1.5S17.83 21 17 21Zm5 0c-.83 0-1.5.67-1.5 1.5S21.17 24 22 24s1.5-.67 1.5-1.5S22.83 21 22 21ZM7 21c-.83 0-1.5.67-1.5 1.5S6.17 24 7 24s1.5-.67 1.5-1.5S7.83 21 7 21Zm-5 0c-.83 0-1.5.67-1.5 1.5S1.17 24 2 24s1.5-.67 1.5-1.5S2.83 21 2 21ZM14.12.88C12.99-.25 11-.24 9.89.87L5.31 5.28a.996.996 0 1 0 1.38 1.44L11 2.58V18c0 .55.45 1 1 1s1-.45 1-1V2.58l4.31 4.15c.19.19.44.28.69.28.26 0 .52-.1.72-.31.38-.4.37-1.03-.03-1.41L14.12.88Z"/></svg>
  