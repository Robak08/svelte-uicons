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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 21a1 1 0 0 1-1 1h-8.184a2.982 2.982 0 0 1-5.632 0H1a1 1 0 0 1 0-2h8.184A3 3 0 0 1 11 18.184V14H5a3 3 0 0 1-3-3 1 1 0 0 1 1-1h5.586l.414.414a1.986 1.986 0 0 0 1.414.586h3.172A1.986 1.986 0 0 0 15 10.414l.414-.414H21a1 1 0 0 1 1 1 3 3 0 0 1-3 3h-6v4.184A3 3 0 0 1 14.816 20H23a1 1 0 0 1 1 1zM10 8.586l.414.414h3.172L14 8.586A1.986 1.986 0 0 1 15.414 8H21V4a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v4h5.586A1.986 1.986 0 0 1 10 8.586z"/></svg>
  