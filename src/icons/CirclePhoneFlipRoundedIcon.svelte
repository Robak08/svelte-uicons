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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-circle-phone-flip {customClass}"><path d="M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12Zm0-22C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2ZM7.636 13.971l-1.302 1a1.143 1.143 0 0 0 0 1.616l.522.6a2.804 2.804 0 0 0 2 .813c3.714 0 9.143-5.143 9.143-9.143 0-.723-.261-1.449-.813-2l-.6-.522a1.143 1.143 0 0 0-1.616 0l-1 1.302a1.143 1.143 0 0 0 0 1.616l.851 1.069c-.901 2.244-2.429 3.71-4.5 4.5l-1.069-.851a1.143 1.143 0 0 0-1.616 0Z"/></svg>
  