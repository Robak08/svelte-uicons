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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23.74 23.67a.996.996 0 0 1-1.41.07L12 14.35 1.67 23.74a.997.997 0 1 1-1.34-1.48L11 12.56V1c0-.55.45-1 1-1s1 .45 1 1v11.56l10.67 9.7c.41.37.44 1 .07 1.41ZM17.5 3c.83 0 1.5-.67 1.5-1.5S18.33 0 17.5 0 16 .67 16 1.5 16.67 3 17.5 3Zm5 5c.83 0 1.5-.67 1.5-1.5S23.33 5 22.5 5 21 5.67 21 6.5 21.67 8 22.5 8Zm-13 12c-.83 0-1.5.67-1.5 1.5S8.67 23 9.5 23s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5Zm6 1c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5Zm-9-13C7.33 8 8 7.33 8 6.5S7.33 5 6.5 5 5 5.67 5 6.5 5.67 8 6.5 8Zm-5-5C2.33 3 3 2.33 3 1.5S2.33 0 1.5 0 0 .67 0 1.5.67 3 1.5 3ZM2 13.5c0 .83.67 1.5 1.5 1.5S5 14.33 5 13.5 4.33 12 3.5 12 2 12.67 2 13.5Zm16-1c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5-1.5.67-1.5 1.5Z"/></svg>
  