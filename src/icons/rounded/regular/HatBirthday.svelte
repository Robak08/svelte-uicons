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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512 512"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M472.299 379.264 289.963 118.059c29.959-18.757 39.04-58.249 20.283-88.208-18.757-29.959-58.249-39.04-88.208-20.282s-39.04 58.249-20.282 88.208a64 64 0 0 0 20.282 20.282L39.701 379.264c-19.843 25.985-23.631 60.833-9.835 90.475 16.27 28.103 47.114 44.498 79.51 42.261h293.248c32.396 2.237 63.24-14.158 79.509-42.261 13.796-29.642 10.008-64.49-9.834-90.475zm-222.038 90.069 116.437-166.805 30.101 43.243-86.165 123.563h-60.373zm-110.762 0 171.819-246.144 29.355 42.069-142.444 204.075h-58.73zm-71.872-19.328a45.824 45.824 0 0 1 7.04-46.336L256 143.936l29.461 42.197c-.299.384-.725.576-1.003.96L89.6 466.325a34.937 34.937 0 0 1-21.973-16.32zm376.746 0a43.817 43.817 0 0 1-41.749 19.328h-39.957l60.203-86.272 14.4 20.608a45.824 45.824 0 0 1 7.103 46.336z"/></svg>
  