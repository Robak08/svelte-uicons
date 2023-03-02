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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 15.5v.5c0 .55-.45 1-1 1s-1-.45-1-1v-.5c0-.83-.67-1.5-1.5-1.5H19v8c0 .55-.45 1-1 1s-1-.45-1-1v-8h-1.5c-.83 0-1.5.67-1.5 1.5v.5c0 .55-.45 1-1 1s-1-.45-1-1v-.5c0-1.93 1.57-3.5 3.5-3.5h5c1.93 0 3.5 1.57 3.5 3.5ZM13 3c1.65 0 3 1.35 3 3v1c0 .55.45 1 1 1s1-.45 1-1V6c0-2.76-2.24-5-5-5H5C2.24 1 0 3.24 0 6v1c0 .55.45 1 1 1s1-.45 1-1V6c0-1.65 1.35-3 3-3h3v19c0 .55.45 1 1 1s1-.45 1-1V3h3Z"/></svg>
  