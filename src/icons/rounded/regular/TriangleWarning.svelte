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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M11 13V7c0-.55.45-1 1-1s1 .45 1 1v6c0 .55-.45 1-1 1s-1-.45-1-1Zm1 2c-.83 0-1.5.67-1.5 1.5S11.17 18 12 18s1.5-.67 1.5-1.5S12.83 15 12 15Zm11.58 4.88c-.7 1.35-2.17 2.12-4.01 2.12H4.44c-1.85 0-3.31-.77-4.01-2.12-.71-1.36-.51-3.1.5-4.56L8.97 2.6C9.68 1.58 10.8 1 12 1s2.32.58 3 1.57l8.08 12.77c1.01 1.46 1.2 3.19.49 4.54Zm-2.15-3.42s-.02-.02-.02-.04L13.34 3.67C13.05 3.26 12.55 3 12 3s-1.05.26-1.36.71L2.59 16.42c-.62.88-.76 1.84-.4 2.53.35.68 1.15 1.05 2.24 1.05h15.12c1.09 0 1.89-.37 2.24-1.05.36-.69.22-1.65-.37-2.49Z"/></svg>
  