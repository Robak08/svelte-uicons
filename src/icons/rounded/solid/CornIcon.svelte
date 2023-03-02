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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M14 11h3.461a16.076 16.076 0 0 1 1.429-.894A17.209 17.209 0 0 0 18.736 9H17a1 1 0 0 1 0-2h1.278a15.938 15.938 0 0 0-.73-2H14a1 1 0 0 1 0-2h2.464c-2.5-3.941-6.429-3.94-8.928 0H10a1 1 0 0 1 0 2H6.452a15.938 15.938 0 0 0-.73 2H7a1 1 0 0 1 0 2H5.264c-.062.364-.115.732-.154 1.106A16.076 16.076 0 0 1 6.539 11H10a1 1 0 0 1 0 2H8.924A19.674 19.674 0 0 1 12 17.027 19.674 19.674 0 0 1 15.076 13H14a1 1 0 0 1 0-2Zm-3-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm12 3.217c-1.34 15.735-20.657 15.742-22 0a1.119 1.119 0 0 1 1.5-1.144C8.591 13.443 11.282 19.4 12 22c.718-2.6 3.409-8.557 9.5-10.927a1.119 1.119 0 0 1 1.5 1.144Z"/></svg>
  