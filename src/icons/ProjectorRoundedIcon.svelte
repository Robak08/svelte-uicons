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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-projector {customClass}"><path d="M19.673 10.045A6.009 6.009 0 0 0 14 6a6.01 6.01 0 0 0-5.657 4H5c-2.757 0-5 2.243-5 5v2a5.008 5.008 0 0 0 3 4.582V23a1 1 0 1 0 2 0v-1h14v1a1 1 0 1 0 2 0v-1.418A5.008 5.008 0 0 0 24 17v-2a5.008 5.008 0 0 0-4.327-4.955ZM14 8c2.206 0 4 1.794 4 4s-1.794 4-4 4-4-1.794-4-4 1.794-4 4-4Zm8 9c0 1.654-1.346 3-3 3H5c-1.654 0-3-1.346-3-3v-2c0-1.654 1.346-3 3-3h3c0 3.309 2.691 6 6 6a6.007 6.007 0 0 0 5.997-5.829A3.005 3.005 0 0 1 22 15v2ZM7 15.5a1.5 1.5 0 1 1-3.001-.001A1.5 1.5 0 0 1 7 15.5ZM13 3V1a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0Zm4.668.445 1-1.5a1 1 0 1 1 1.664 1.11l-1 1.5a.998.998 0 0 1-1.387.277 1 1 0 0 1-.277-1.387Zm-10-.391a1.001 1.001 0 0 1 1.664-1.11l1 1.5a1.001 1.001 0 0 1-1.664 1.11l-1-1.5Z"/></svg>
  