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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M16 10.75c0 1.2-1.48 3.14-3.85 5.04a.24.24 0 0 1-.3 0C9.47 13.88 8 11.95 8 10.75 8 9.79 8.67 9 9.5 9s1.5.79 1.5 1.75c0 .55.45 1 1 1s1-.45 1-1c0-.96.67-1.75 1.5-1.75s1.5.79 1.5 1.75ZM24 5v14c0 2.76-2.24 5-5 5H5c-2.76 0-5-2.24-5-5V5c0-2.76 2.24-5 5-5h14c2.76 0 5 2.24 5 5Zm-6 5.75C18 8.68 16.43 7 14.5 7c-.98 0-1.86.43-2.5 1.13C11.36 7.43 10.48 7 9.5 7 7.57 7 6 8.68 6 10.75c0 2.41 2.5 4.92 4.6 6.6.41.33.9.49 1.4.49s1-.16 1.4-.49c2.1-1.68 4.6-4.2 4.6-6.6Z"/></svg>
  