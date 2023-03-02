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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19 17.5c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3Zm4 6.5h-8c-.31 0-.6-.14-.79-.39a.982.982 0 0 1-.18-.86C14.59 20.58 16.68 19 19 19s4.41 1.58 4.97 3.75c.08.3.01.62-.18.86s-.48.39-.79.39ZM12 6c-3.31 0-6 2.69-6 6a6.005 6.005 0 0 0 8.86 5.28c-.54-.8-.86-1.75-.86-2.78 0-2.25 1.51-4.14 3.56-4.76A5.999 5.999 0 0 0 12 6Zm0 7.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5Zm.09 8.75c.22-.87.63-1.66 1.15-2.36-.41.06-.82.11-1.25.11-4.49 0-8.13-3.72-8-8.24.12-4 3.32-7.39 7.3-7.73 3.86-.33 7.2 2.1 8.3 5.53 2.47.3 4.4 2.39 4.4 4.94V5c0-2.76-2.24-5-5-5H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h7.19c-.2-.56-.25-1.17-.1-1.75Z"/></svg>
  