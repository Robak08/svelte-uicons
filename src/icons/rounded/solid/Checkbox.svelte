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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512 512"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M405.333 0H106.667C47.786.071.071 47.786 0 106.667v298.667C.071 464.214 47.786 511.93 106.667 512h298.667c58.88-.07 106.596-47.786 106.666-106.667V106.667C511.93 47.786 464.214.071 405.333 0zm21.334 172.352L229.248 369.771c-16.659 16.666-43.674 16.671-60.34.012l-.012-.012-83.563-83.541c-8.348-8.348-8.348-21.882 0-30.229s21.882-8.348 30.229 0l83.541 83.541 197.44-197.419c8.348-8.318 21.858-8.294 30.176.053 8.319 8.348 8.295 21.858-.052 30.176z"/></svg>
  