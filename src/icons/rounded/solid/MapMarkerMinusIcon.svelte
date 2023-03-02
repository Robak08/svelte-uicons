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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512 512"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M422.147 69.996c-90.589-92.147-238.726-93.411-330.873-2.822S-2.137 305.9 88.452 398.047a237.916 237.916 0 0 0 3.413 3.401l83.868 77.487c44.837 43.862 116.448 44.041 161.504.404l84.91-78.465c91.366-91.371 91.366-239.507 0-330.878zm-80.358 186.709H171.628c-11.747 0-21.27-9.523-21.27-21.27s9.523-21.27 21.27-21.27h170.161c11.747 0 21.27 9.523 21.27 21.27s-9.523 21.27-21.27 21.27z"/></svg>
  