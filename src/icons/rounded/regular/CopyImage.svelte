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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M9 7.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5S11.33 9 10.5 9 9 8.33 9 7.5ZM24 7v6c0 2.76-2.24 5-5 5h-9c-2.76 0-5-2.24-5-5V7c0-2.76 2.24-5 5-5h9c2.76 0 5 2.24 5 5ZM7 13c0 .77.29 1.47.77 2.01l5.24-5.24c.98-.98 2.69-.98 3.67 0l1.04 1.04c.23.23.62.23.85 0L22 7.38V7c0-1.65-1.35-3-3-3h-9C8.35 4 7 5.35 7 7v6Zm15 0v-2.79l-2.02 2.02c-.98.98-2.69.98-3.67 0l-1.04-1.04a.61.61 0 0 0-.85 0l-4.79 4.79c.12.02.24.02.37.02h9c1.65 0 3-1.35 3-3Zm-5 7H5c-1.65 0-3-1.35-3-3v-6c0-.74.27-1.45.77-2a.998.998 0 1 0-1.49-1.33A5.01 5.01 0 0 0 0 11.01v6c0 2.76 2.24 5 5 5h12c.55 0 1-.45 1-1s-.45-1-1-1Z"/></svg>
  