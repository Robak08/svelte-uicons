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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M21 12h-3c-1.103 0-2 .897-2 2s-.897 2-2 2h-4c-1.103 0-2-.897-2-2s-.897-2-2-2H3c-1.654 0-3 1.346-3 3v4c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5v-4c0-1.654-1.346-3-3-3Zm1 7c0 1.654-1.346 3-3 3H5c-1.654 0-3-1.346-3-3v-4a1 1 0 0 1 1-1l3-.002V14c0 2.206 1.794 4 4 4h4c2.206 0 4-1.794 4-4h3a1 1 0 0 1 1 1v4ZM7.293 5.293a.999.999 0 0 1 0-1.414L10.586.586a1.99 1.99 0 0 1 1.4-.583L12 0l.014.003a1.989 1.989 0 0 1 1.4.583l3.293 3.293a.999.999 0 1 1-1.414 1.414L13 3v7a1 1 0 1 1-2 0V3L8.707 5.293a.999.999 0 0 1-1.414 0Z"/></svg>
  