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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M11 4.5a6.449 6.449 0 0 0-.995-3.44 9.7 9.7 0 0 1 11.256 1.679A9.409 9.409 0 0 1 24 9.758a10.5 10.5 0 0 1-3.121 7.117 11.212 11.212 0 0 1-2.623 1.963L8.787 9.373A6.481 6.481 0 0 0 11 4.5zm-2 0A4.5 4.5 0 1 0 4.5 9 4.505 4.505 0 0 0 9 4.5zm-1.941 5.973A6.463 6.463 0 0 1 4.5 11c-.158 0-.314-.013-.469-.024a9.44 9.44 0 0 0 .5 2.546A9.838 9.838 0 0 0 5.081 15a.483.483 0 0 1-.081.578l-3.814 2.664v.014a3.238 3.238 0 1 0 4.634 4.459l.01.006L8.4 19a.5.5 0 0 1 .6-.119 10.082 10.082 0 0 0 4.514 1.112 9.33 9.33 0 0 0 2.725-.34z"/></svg>
  