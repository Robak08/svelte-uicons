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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m22.39 17.89-3.7 1.85-1.85 3.7a1 1 0 0 1-.89.55h-.05a.987.987 0 0 1-.88-.64s-2.91-8.32-2.91-8.34c-.19-.53-.08-1.15.35-1.58s1.1-.55 1.65-.32l8.21 2.95c.37.14.62.49.64.88.02.4-.2.77-.55.94ZM13.12 24H8.01c-2.76 0-5-2.24-5-5V8.44a1 1 0 0 0-.68-.95l-.26-.09A2.988 2.988 0 0 1 .02 4.56V3C0 1.34 1.34 0 3 0h3.43c.83 0 1.52.56 1.8 1.35C8.78 2.9 10.26 4 12 4s3.21-1.11 3.77-2.65c.28-.79.97-1.35 1.8-1.35H21c1.66 0 3 1.34 3 3v1.56c0 1.29-.83 2.44-2.06 2.85l-.26.09a1 1 0 0 0-.68.95v5.04l-6.12-2.19a3.505 3.505 0 0 0-3.85.74c-.96.96-1.28 2.4-.81 3.68l2.9 8.3Zm.89-16c0 .55.45 1 1 1h1v1c0 .55.45 1 1 1s1-.45 1-1V8c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1Zm-4 10c0-.55-.45-1-1-1h-1v-1c0-.55-.45-1-1-1s-1 .45-1 1v2c0 .55.45 1 1 1h2c.55 0 1-.45 1-1Zm0-10c0-.55-.45-1-1-1h-2c-.55 0-1 .45-1 1v2c0 .55.45 1 1 1s1-.45 1-1V9h1c.55 0 1-.45 1-1Z"/></svg>
  