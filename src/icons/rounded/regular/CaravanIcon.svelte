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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512 512"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M491.52 399.343h-40.96v-266.24c-.068-67.837-55.043-122.812-122.88-122.88h-204.8C55.043 10.291.068 65.267 0 133.103v204.8c.07 49.476 35.444 91.852 84.111 100.762 11.021 44.044 55.659 70.814 99.703 59.793a82.207 82.207 0 0 0 59.365-58.155h248.34c11.311 0 20.48-9.169 20.48-20.48.001-11.311-9.168-20.48-20.479-20.48zM40.96 174.063h92.16c5.655 0 10.24 4.585 10.24 10.24v20.48c0 5.655-4.585 10.24-10.24 10.24H40.96v-40.96zm122.88 286.72c-22.622 0-40.96-18.338-40.96-40.96s18.338-40.96 40.96-40.96 40.96 18.338 40.96 40.96-18.338 40.96-40.96 40.96zm163.84-61.44h-61.44v-215.04c0-5.655 4.585-10.24 10.24-10.24h40.96c5.655 0 10.24 4.585 10.24 10.24v215.04zm81.92 0h-40.96v-215.04c0-28.277-22.923-51.2-51.2-51.2h-40.96c-28.277 0-51.2 22.923-51.2 51.2v181.391c-30.705-33.766-82.969-36.247-116.735-5.543a82.638 82.638 0 0 0-23.349 36.713c-26.207-7.644-44.228-31.663-44.237-58.962v-81.92h92.16c28.277 0 51.2-22.923 51.2-51.2v-20.48c0-28.277-22.923-51.2-51.2-51.2H40.96c0-45.243 36.677-81.92 81.92-81.92h204.8c45.243 0 81.92 36.677 81.92 81.92v266.241z"/></svg>
  