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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M.071 10.685c1.849-14.163 22.014-14.153 23.858 0a1 1 0 1 1-1.989.217C20.4-.9 3.6-.889 2.06 10.9a1 1 0 0 1-1.989-.217ZM18.7 19.421a10.049 10.049 0 0 1-13.4 0 1 1 0 1 0-1.341 1.485 12.063 12.063 0 0 0 16.086 0 1 1 0 0 0-1.34-1.485ZM7 11c0-1.054.679-2 1-2s1 .946 1 2a1 1 0 0 0 2 0c0-1.892-1.232-4-3-4s-3 2.108-3 4a1 1 0 0 0 2 0Zm12 0c-.248-5.285-5.753-5.282-6 0a1 1 0 0 0 2 0c0-1.054.68-2 1-2s1 .946 1 2a1 1 0 0 0 2 0Zm-7 8a6.827 6.827 0 0 0 5.842-3.458 1 1 0 0 0-1.053-1.518A15.4 15.4 0 0 1 12 15a15.4 15.4 0 0 1-4.8-.976 1 1 0 0 0-1.052 1.518A6.836 6.836 0 0 0 12 19Zm11.38-4.613A6.955 6.955 0 0 0 19.694 13a.637.637 0 0 0-.686.691c.125 2.138 1.7 5.845 4.372 3.687a2.115 2.115 0 0 0 0-2.991ZM4.306 13C2.2 13.1-1.549 14.736.62 17.38c2.673 2.159 4.247-1.552 4.372-3.687A.637.637 0 0 0 4.306 13Z"/></svg>
  