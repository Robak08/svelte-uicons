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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20.5 15h-8C10.57 15 9 16.57 9 18.5s1.57 3.5 3.5 3.5h8c1.93 0 3.5-1.57 3.5-3.5S22.43 15 20.5 15Zm0 5H16v-3h4.5c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5Zm-8-11h8C22.43 9 24 7.43 24 5.5S22.43 2 20.5 2h-8C10.57 2 9 3.57 9 5.5S10.57 9 12.5 9ZM19 4h1.5c.827 0 1.5.673 1.5 1.5S21.327 7 20.5 7H19V4ZM1 3c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3Zm6.937 6.649A.999.999 0 0 1 7 11H1a1 1 0 0 1-.937-1.351C.657 8.064 2.239 7 4 7s3.343 1.064 3.937 2.649ZM4 19c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3Zm3.937 3.649A.999.999 0 0 1 7 24H1a1 1 0 0 1-.937-1.351C.657 21.064 2.239 20 4 20s3.343 1.064 3.937 2.649Z"/></svg>
  