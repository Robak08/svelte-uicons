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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M4 11c-2.21 0-4-1.79-4-4V4c0-2.21 1.79-4 4-4s4 1.79 4 4v3c0 2.21-1.79 4-4 4Zm0-9c-1.1 0-2 .9-2 2v3c0 1.1.9 2 2 2s2-.9 2-2V4c0-1.1-.9-2-2-2Zm5.75 20.9a.998.998 0 0 0-.08-1.41C9.25 21.11 9 20.57 9 20v-4c0-.55-.45-1-1-1s-1 .45-1 1v4c0 1.14.49 2.22 1.33 2.98.19.17.43.25.67.25.27 0 .55-.11.75-.33ZM14 9V1c0-.4-.24-.77-.62-.92-.37-.15-.8-.07-1.09.22L9.85 2.74a.996.996 0 1 0 1.41 1.41l.74-.74V9c0 .55.45 1 1 1s1-.45 1-1ZM5 23v-9c0-.4-.24-.77-.62-.92-.37-.15-.8-.07-1.09.22L.85 15.74a.996.996 0 1 0 1.41 1.41l.74-.74V23c0 .55.45 1 1 1s1-.45 1-1Zm12 1c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7Zm0-12c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5Zm1 7.41 2.71-2.71a.996.996 0 1 0-1.41-1.41L16.59 18l-1.71-1.71a.996.996 0 1 0-1.41 1.41l1.71 1.71c.39.39.9.58 1.41.58s1.02-.19 1.41-.58Z"/></svg>
  