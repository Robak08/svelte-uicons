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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512 512"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M149.333 469.333h-42.667c-35.346 0-64-28.654-64-64V106.667c0-35.346 28.654-64 64-64h42.667c11.782 0 21.333-9.551 21.333-21.333S161.115 0 149.333 0h-42.667C47.786.071.071 47.786 0 106.667v298.667C.071 464.214 47.786 511.93 106.667 512h42.667c11.782 0 21.333-9.551 21.333-21.333 0-11.782-9.552-21.334-21.334-21.334z"/><path d="m490.667 234.667-336.576.683a43.048 43.048 0 0 1 6.955-9.515l82.752-82.752c8.475-8.185 8.71-21.691.525-30.165-8.185-8.475-21.691-8.71-30.165-.525-.178.172-.353.347-.525.525l-82.795 82.752c-33.313 33.323-33.313 87.339 0 120.661l82.752 82.752c8.185 8.475 21.691 8.709 30.165.524 8.475-8.185 8.709-21.691.524-30.165a19.915 19.915 0 0 0-.524-.524l-82.752-82.752a42.887 42.887 0 0 1-6.208-8.149l335.872-.683c11.782 0 21.333-9.551 21.333-21.333 0-11.783-9.551-21.334-21.333-21.334z"/></svg>
  