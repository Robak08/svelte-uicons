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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-border-inner {customClass}"><path d="M0 1.5C0 .67.67 0 1.5 0S3 .67 3 1.5 2.33 3 1.5 3 0 2.33 0 1.5ZM1.5 8C2.33 8 3 7.33 3 6.5S2.33 5 1.5 5 0 5.67 0 6.5.67 8 1.5 8Zm16-5c.83 0 1.5-.67 1.5-1.5S18.33 0 17.5 0 16 .67 16 1.5 16.67 3 17.5 3Zm5 0c.83 0 1.5-.67 1.5-1.5S23.33 0 22.5 0 21 .67 21 1.5 21.67 3 22.5 3Zm-21 13c-.83 0-1.5.67-1.5 1.5S.67 19 1.5 19 3 18.33 3 17.5 2.33 16 1.5 16Zm5-13C7.33 3 8 2.33 8 1.5S7.33 0 6.5 0 5 .67 5 1.5 5.67 3 6.5 3Zm-5 18c-.83 0-1.5.67-1.5 1.5S.67 24 1.5 24 3 23.33 3 22.5 2.33 21 1.5 21Zm21-5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5Zm.5-5H13V1c0-.55-.45-1-1-1s-1 .45-1 1v10H1c-.55 0-1 .45-1 1s.45 1 1 1h10v10c0 .55.45 1 1 1s1-.45 1-1V13h10c.55 0 1-.45 1-1s-.45-1-1-1Zm-.5-6c-.83 0-1.5.67-1.5 1.5S21.67 8 22.5 8 24 7.33 24 6.5 23.33 5 22.5 5Zm-16 16c-.83 0-1.5.67-1.5 1.5S5.67 24 6.5 24 8 23.33 8 22.5 7.33 21 6.5 21Zm11 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5Zm5 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5Z"/></svg>
  