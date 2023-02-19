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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-g {customClass}"><path d="M12.066 24C6.486 24 2 19.514 2 14v-4C2.08-.512 16.239-3.833 20.96 5.554a1 1 0 0 1-1.791.891C15.44-1.066 4.019 1.62 4 10v4c0 4.411 3.589 8 8 8 2.984-.001 5.639-1.483 7.167-3.963.38-.616.394-1.365.038-2.002a1.99 1.99 0 0 0-1.756-1.034h-4.448c-1.308-.006-1.307-1.994 0-2h4.448c1.473 0 2.782.77 3.502 2.059a3.929 3.929 0 0 1-.081 4.026 10.278 10.278 0 0 1-8.804 4.915Z"/></svg>
  