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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 13v3c0 4.41-3.59 8-8 8h-1c-.43 0-.81-.28-.95-.68l-2.91-8.72-8.57-6.77c-.28.74-.46 1.52-.54 2.33-.21 2.27.44 4.5 1.81 6.3.74.97 1.15 2.24 1.15 3.57V21c0 .55.45 1 1 1h5c.55 0 1 .45 1 1s-.45 1-1 1H6c-1.65 0-3-1.35-3-3v-.97c0-.89-.26-1.73-.74-2.36A10.968 10.968 0 0 1 .05 9.98C.5 4.95 4.46.79 9.45.11c4.04-.56 7.91 1.06 10.35 4.31C21.07 5.99 24 11.58 24 13ZM3.51 6.02 12.35 13h1.32c2.58 0 5.14-.85 7.2-2.4l.13-.1c-.83-1.74-1.99-3.88-2.78-4.85-2.02-2.69-5.18-4.02-8.5-3.56-2.58.35-4.82 1.84-6.22 3.93ZM22 13c-.01-.12-.08-.34-.18-.62A14.102 14.102 0 0 1 13.67 15h-.28l2.33 7H16c3.31 0 6-2.69 6-6v-3Z"/></svg>
  