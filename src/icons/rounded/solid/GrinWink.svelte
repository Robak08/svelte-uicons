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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512 512"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M256 .828C114.683.993.165 115.511 0 256.828c12.8 339.2 499.2 339.051 512 0-.153-141.322-114.678-255.847-256-256zM155.904 191.185h64c11.782 0 21.333 9.551 21.333 21.333 0 11.782-9.551 21.333-21.333 21.333h-64c-11.782 0-21.333-9.551-21.333-21.333 0-11.781 9.551-21.333 21.333-21.333zM387.2 330.748c-25.506 44.966-72.938 73.042-124.629 73.771-51.727-.722-99.199-28.793-124.757-73.771-6.356-9.921-3.466-23.116 6.455-29.471a21.331 21.331 0 0 1 15.902-2.913 328.536 328.536 0 0 0 102.4 20.821A328.54 328.54 0 0 0 364.8 298.364c11.524-2.454 22.855 4.898 25.309 16.422a21.336 21.336 0 0 1-2.909 15.962zm-39.296-96.896c-23.573 0-42.667 0-42.667-21.333 0-23.564 19.103-42.667 42.667-42.667s42.667 19.103 42.667 42.667c0 21.333-19.094 21.333-42.667 21.333z"/></svg>
  