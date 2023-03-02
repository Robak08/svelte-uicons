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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M9.579 9.573c0-.948-.734-1.173-1.549-1.173H5.909v2.4h2.287c.809 0 1.383-.354 1.383-1.227zM16.666 10.816c-.98 0-1.634.611-1.698 1.591H18.3c-.091-.991-.605-1.591-1.634-1.591zM8.368 12.509H5.904v2.834H8.32c.922 0 1.672-.327 1.672-1.361-.001-1.055-.628-1.468-1.624-1.473z"/><path d="M19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.9c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zm-5.195 6.884h4.168v1.012h-4.168V7.184zM8.63 17.1H3.643V6.814h4.848c1.763 0 3.289.498 3.289 2.544 0 1.034-.482 1.543-1.404 1.982 1.264.359 1.875 1.474 1.875 2.765.001 2.09-1.751 2.984-3.621 2.995zm11.711-3.402h-5.368c0 1.189.627 1.891 1.827 1.891.621 0 1.42-.332 1.618-.97h1.805c-.557 1.709-1.709 2.507-3.487 2.507-2.346 0-3.809-1.591-3.809-3.911 0-2.239 1.538-3.942 3.809-3.942 2.33 0 3.621 1.837 3.621 4.039 0 .129-.011.263-.016.386z"/></svg>
  