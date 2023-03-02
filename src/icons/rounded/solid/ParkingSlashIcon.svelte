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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M18.386 23.383a.999.999 0 0 1-.924.617H5c-2.757 0-5-2.243-5-5V6.539a1 1 0 0 1 1.707-.707L7 11.202v6.799a1 1 0 0 0 2 0v-4.799l9.169 9.092a1 1 0 0 1 .217 1.09ZM24 5v14a4.969 4.969 0 0 1-1.465 3.536.997.997 0 0 1-1.414-.001l-9.828-9.828-7.778-7.778-2.05-2.051a.999.999 0 0 1 0-1.414A4.966 4.966 0 0 1 5 0h14c2.757 0 5 2.243 5 5Zm-6 4.5C18 7.019 15.981 5 13.5 5H11c-.765 0-1.508.216-2.148.626a1 1 0 1 0 1.076 1.686C10.247 7.108 10.618 7 11 7h2.5C14.879 7 16 8.122 16 9.5c0 .886-.476 1.714-1.242 2.161a1 1 0 0 0 1.008 1.728A4.517 4.517 0 0 0 18 9.5Z"/></svg>
  