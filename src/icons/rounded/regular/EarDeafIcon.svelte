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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m11.71 13.71-10 10c-.2.2-.45.29-.71.29s-.51-.1-.71-.29a.996.996 0 0 1 0-1.41l10-10.01a.996.996 0 1 1 1.41 1.41Zm12-13.42a.996.996 0 0 0-1.41 0l-3.65 3.65c-1.43-1.57-3.41-2.64-5.61-2.88-2.56-.29-5.13.53-7.03 2.23-1.91 1.71-3 4.15-3 6.71 0 .55.45 1 1 1s1-.45 1-1a7 7 0 0 1 2.34-5.22c1.51-1.35 3.45-1.96 5.48-1.73 3.17.36 5.74 2.91 6.13 6.06.25 2.05-.36 4.01-1.71 5.54-.75.85-1.24 2.16-1.24 3.36 0 2.21-1.79 4-4 4-.55 0-1 .45-1 1s.45 1 1 1c3.31 0 6-2.69 6-6 0-.7.31-1.55.73-2.03a9.05 9.05 0 0 0 2.2-7.11 8.88 8.88 0 0 0-1.09-3.29l3.87-3.87a.996.996 0 0 0 0-1.41ZM14.34 13.4c.19.17.43.25.66.25.28 0 .55-.11.75-.34C16.56 12.4 17 11.22 17 10c0-2.76-2.24-5-5-5s-5 2.24-5 5c0 .55.45 1 1 1s1-.45 1-1c0-1.65 1.35-3 3-3s3 1.35 3 3c0 .73-.27 1.44-.75 1.98a.989.989 0 0 0 .09 1.41Z"/></svg>
  