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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20.466 1.967 14.78.221a5.011 5.011 0 0 0-6.224 3.24L8.368 4H5a5.006 5.006 0 0 0-5 5v10a5.006 5.006 0 0 0 5 5h6a4.975 4.975 0 0 0 3.92-1.934 5.029 5.029 0 0 0 .689.052 4.976 4.976 0 0 0 4.775-3.563L23.8 8.156a5.021 5.021 0 0 0-3.334-6.189ZM11 22H5a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3ZM21.887 7.563l-3.412 10.4a2.992 2.992 0 0 1-2.6 2.134A4.992 4.992 0 0 0 16 19V9a5.006 5.006 0 0 0-5-5h-.507a3 3 0 0 1 3.7-1.867l5.686 1.746a3.006 3.006 0 0 1 2.008 3.684ZM12 13c0 1.45-1.544 3.391-2.714 4.378a1.991 1.991 0 0 1-2.572 0C5.544 16.391 4 14.45 4 13a2 2 0 0 1 4 0 2 2 0 0 1 4 0Z"/></svg>
  