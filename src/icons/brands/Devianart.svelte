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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M8.973 11.228 8.613 10.793 4.573 10.793 4.573 4.8 11.922 4.8 12.569 4.363 14.628.439 15.064 0 19.426 0 19.427 0 19.427 4.364 15.028 12.769 15.387 13.207 19.427 13.207 19.427 19.2 12.078 19.2 11.431 19.637 9.372 23.561 8.936 24 4.574 24 4.573 24 4.573 19.636z"/></svg>
  