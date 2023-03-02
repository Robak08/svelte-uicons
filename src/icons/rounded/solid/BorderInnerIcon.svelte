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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 12c0 .55-.45 1-1 1H13v10c0 .55-.45 1-1 1s-1-.45-1-1V13H1c-.55 0-1-.45-1-1s.45-1 1-1h10V1c0-.55.45-1 1-1s1 .45 1 1v10h10c.55 0 1 .45 1 1ZM1.5 3C2.33 3 3 2.33 3 1.5S2.33 0 1.5 0 0 .67 0 1.5.67 3 1.5 3Zm0 5C2.33 8 3 7.33 3 6.5S2.33 5 1.5 5 0 5.67 0 6.5.67 8 1.5 8Zm21-3c-.83 0-1.5.67-1.5 1.5S21.67 8 22.5 8 24 7.33 24 6.5 23.33 5 22.5 5Zm-21 11c-.83 0-1.5.67-1.5 1.5S.67 19 1.5 19 3 18.33 3 17.5 2.33 16 1.5 16Zm21 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5Zm0-13c.83 0 1.5-.67 1.5-1.5S23.33 0 22.5 0 21 .67 21 1.5 21.67 3 22.5 3Zm-5 0c.83 0 1.5-.67 1.5-1.5S18.33 0 17.5 0 16 .67 16 1.5 16.67 3 17.5 3Zm-11 0C7.33 3 8 2.33 8 1.5S7.33 0 6.5 0 5 .67 5 1.5 5.67 3 6.5 3Zm-5 18c-.83 0-1.5.67-1.5 1.5S.67 24 1.5 24 3 23.33 3 22.5 2.33 21 1.5 21Zm21 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5Zm-5 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5Zm-11 0c-.83 0-1.5.67-1.5 1.5S5.67 24 6.5 24 8 23.33 8 22.5 7.33 21 6.5 21Z"/></svg>
  