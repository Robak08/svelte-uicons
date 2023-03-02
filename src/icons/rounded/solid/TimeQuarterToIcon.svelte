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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M14.181.207A1 1 0 0 0 13 1.19v2.879A7.954 7.954 0 0 0 4.069 13H1.19a1 1 0 0 0-.983 1.181A12 12 0 1 0 14.181.207zM12 14a1.994 1.994 0 0 1-1.723-1H8a1 1 0 0 1 0-2h2.277a2 2 0 0 1 .723-.723V7a1 1 0 0 1 2 0v3.277A1.994 1.994 0 0 1 12 14zM9.972.1a1 1 0 1 1-1 1 1 1 0 0 1 1-1zm-4.1 1.756a1 1 0 1 1-1 1 1 1 0 0 1 .997-1.002zM2.779 4.841a1 1 0 1 1-1 1 1 1 0 0 1 1-1zm-1.6 4.167a1 1 0 1 1-1 1 1 1 0 0 1 .998-1z"/></svg>
  