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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-chart-scatter-bubble {customClass}"><path d="M23 24H5c-2.76 0-5-2.24-5-5V1c0-.55.45-1 1-1s1 .45 1 1v18c0 1.65 1.35 3 3 3h18c.55 0 1 .45 1 1s-.45 1-1 1Zm0-20.5C23 1.57 21.43 0 19.5 0S16 1.57 16 3.5 17.57 7 19.5 7 23 5.43 23 3.5Zm-2 0c0 .83-.67 1.5-1.5 1.5S18 4.33 18 3.5 18.67 2 19.5 2s1.5.67 1.5 1.5Zm1 10c0-1.93-1.57-3.5-3.5-3.5S15 11.57 15 13.5s1.57 3.5 3.5 3.5 3.5-1.57 3.5-3.5Zm-2 0c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5ZM13 7c0-1.65-1.35-3-3-3S7 5.35 7 7s1.35 3 3 3 3-1.35 3-3Zm-1 9c0-1.65-1.35-3-3-3s-3 1.35-3 3 1.35 3 3 3 3-1.35 3-3Z"/></svg>
  