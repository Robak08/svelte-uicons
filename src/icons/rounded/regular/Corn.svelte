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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M13 10a1 1 0 0 1-2 0 1 1 0 0 1 2 0Zm9.994 2.2C22.377 20.307 16.862 24 12 24S1.623 20.307 1.006 12.2a2.033 2.033 0 0 1 2.724-2.063 12.579 12.579 0 0 1 1.3.621c1.535-14.263 12.42-14.249 13.95 0a12.6 12.6 0 0 1 1.3-.622 2.033 2.033 0 0 1 2.714 2.064Zm-12.035 9.725c-.359-1.343-2.325-7.7-7.965-9.925.54 7.066 4.867 9.491 7.965 9.925ZM12 18.861A19.625 19.625 0 0 1 14.186 15 1.007 1.007 0 1 1 14 13h1.9a14.241 14.241 0 0 1 1.126-.977c-.012-.344-.012-.688-.037-1.023H16a1 1 0 0 1 0-2h.733a14.73 14.73 0 0 0-.533-2H14a1 1 0 0 1 0-2h1.323c-2.21-3.944-4.436-3.944-6.646 0H10a1 1 0 0 1 0 2s-2.123-.025-2.185-.037A14.865 14.865 0 0 0 7.267 9H8a1 1 0 0 1 0 2h-.988c-.025.335-.025.679-.037 1.023A14.064 14.064 0 0 1 8.1 13H10a1.007 1.007 0 1 1-.186 2A19.625 19.625 0 0 1 12 18.861Zm9-6.813c-5.635 2.182-7.6 8.535-7.959 9.877 3.098-.433 7.424-2.853 7.959-9.877Z"/></svg>
  