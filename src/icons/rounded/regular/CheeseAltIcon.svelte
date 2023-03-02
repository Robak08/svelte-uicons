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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M0 16c0 1.52.27 3.07.79 4.61.69 2.03 2.6 3.39 4.74 3.39H19c2.76 0 5-2.24 5-5v-7.49c0-1.88-.9-3.68-2.41-4.81L13.79.88c-1.8-1.2-4.1-1.16-5.75.08C2.74 4.92.87 11.16.79 11.39.27 12.93 0 14.48 0 16Zm19.99-8H5.53c-.4 0-.78.05-1.16.14.96-1.69 2.51-3.81 4.87-5.57.98-.73 2.35-.75 3.4-.05l7.35 5.49ZM2 16c0-1.3.23-2.64.68-3.96A3.01 3.01 0 0 1 5.52 10H21.7c.19.47.3.99.3 1.51V19c0 1.65-1.35 3-3 3H5.53c-1.29 0-2.43-.82-2.84-2.04-.45-1.33-.68-2.66-.68-3.96Z"/></svg>
  