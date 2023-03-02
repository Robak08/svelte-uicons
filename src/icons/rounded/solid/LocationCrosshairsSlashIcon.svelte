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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19.743 18.329A9.9 9.9 0 0 0 21.95 13h1.049a1 1 0 1 0 0-2H21.95a9.919 9.919 0 0 0-2.88-6.071 9.923 9.923 0 0 0-6.071-2.879V1a1 1 0 1 0-2 0v1.049A9.907 9.907 0 0 0 5.67 4.256L1.707.293A.999.999 0 1 0 .293 1.707l10.68 10.68 11.32 11.32a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414l-3.964-3.964Zm-4.208-9.864A4.966 4.966 0 0 1 16.999 12c0 .996-.291 1.946-.829 2.757l-1.471-1.471c.19-.398.3-.832.3-1.286a2.98 2.98 0 0 0-.878-2.121 2.995 2.995 0 0 0-3.406-.577L9.242 7.829a5.008 5.008 0 0 1 6.292.636Zm.171 11.315a1 1 0 0 1-.375 1.651 9.894 9.894 0 0 1-2.333.512V23a1 1 0 1 1-2 0v-1.06a10.033 10.033 0 0 1-6.071-2.869A10.023 10.023 0 0 1 2.066 13H1a1 1 0 1 1 0-2h1.075a9.91 9.91 0 0 1 .495-2.333 1 1 0 0 1 1.65-.374l2.865 2.865A4.965 4.965 0 0 0 7 12c0 2.757 2.243 5 5 5 .288 0 .567-.038.842-.085l2.865 2.865Z"/></svg>
  