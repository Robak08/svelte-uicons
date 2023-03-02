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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M14.987 22a6.955 6.955 0 0 0 3-.685V23a1 1 0 0 1-1 1h-10a1 1 0 0 1-1-1v-1.685a6.941 6.941 0 0 0 3 .685h6Zm5-13v6c0 2.757-2.243 5-5 5h-6c-2.757 0-5-2.243-5-5V9c0-2.757 2.243-5 5-5h6c2.757 0 5 2.243 5 5Zm-5.28 4.293L13 11.586V8a1 1 0 1 0-2 0v4c0 .266.105.52.293.707l2 2a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414ZM14.987 2c1.074 0 2.089.251 3 .685V1a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1v1.685a6.941 6.941 0 0 1 3-.685h6Z"/></svg>
  