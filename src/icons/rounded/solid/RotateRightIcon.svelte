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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512 512"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M489.797 256c-10.791-.141-19.924 7.939-21.099 18.667-9.959 117.754-113.491 205.138-231.245 195.179S32.315 356.354 42.275 238.6 155.766 33.462 273.52 43.421a213.972 213.972 0 0 1 134.592 63.245h-66.603c-11.782 0-21.333 9.551-21.333 21.333s9.551 21.333 21.333 21.333h88.384c21.874-.012 39.604-17.742 39.616-39.616V21.333C469.509 9.551 459.958 0 448.176 0c-11.782 0-21.333 9.551-21.333 21.333v44.331C321.548-28.425 159.915-19.341 65.826 85.954s-85.005 266.927 20.29 361.016 266.927 85.005 361.016-20.29a255.681 255.681 0 0 0 63.977-147.214c1.096-11.814-7.593-22.279-19.407-23.375a21.612 21.612 0 0 0-1.905-.091z"/></svg>
  