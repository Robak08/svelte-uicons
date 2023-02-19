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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-file-binary {customClass}"><path d="M9.5 11C7.57 11 6 12.57 6 14.5v2C6 18.43 7.57 20 9.5 20s3.5-1.57 3.5-3.5v-2c0-1.93-1.57-3.5-3.5-3.5Zm1.5 5.5c0 .83-.67 1.5-1.5 1.5S8 17.33 8 16.5v-2c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v2Zm7-4.5v7c0 .55-.45 1-1 1s-1-.45-1-1v-4.59l-.29.29a.996.996 0 1 1-1.41-1.41l2-2c.29-.29.72-.37 1.09-.22.37.15.62.52.62.92Zm1.95-6.46-3.48-3.48A6.96 6.96 0 0 0 11.52.01H7C4.24 0 2 2.24 2 5v14c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5v-8.51c0-1.87-.73-3.63-2.05-4.95Zm-1.41 1.41c.32.32.56.67.78 1.05H15c-.55 0-1-.45-1-1V2.68c.38.22.74.47 1.05.78l3.48 3.48ZM20 19c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V5c0-1.65 1.35-3 3-3h4.51c.16 0 .32.03.49.05V7c0 1.65 1.35 3 3 3h4.95c.02.16.05.32.05.49V19Z"/></svg>
  