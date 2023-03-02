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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M15 5.026a3 3 0 0 1-6 0A11.2 11.2 0 0 1 10.739.691a1.5 1.5 0 0 1 2.522 0A11.2 11.2 0 0 1 15 5.026zM5.8 18h12.4a3.906 3.906 0 0 0-.421-.5c-1.923-1.859-2.708-4.015-2.766-7.5H16a1 1 0 0 0 0-2H8a1 1 0 0 0 0 2h.989c-.058 3.487-.843 5.643-2.766 7.5a4.073 4.073 0 0 0-.423.5zM20 22h-1v-1.629c0-.125-.026-.247-.038-.371H5.038c-.012.124-.038.246-.038.371V22H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2z"/></svg>
  